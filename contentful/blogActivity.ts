import { Entry } from "contentful"
import contentfulClient from "./contentfulClient"
import { TypeKegiatanSkeleton } from "./types"
import { Document } from "@contentful/rich-text-types"
import { ContentImage, parseContentfulContentImage } from "./contentImage"
import { ContentAuthor, ContentAuthorEntry, parseContentfulContentAuthor } from "./contentfulAuthor"

type BlogActivityEntry = Entry<TypeKegiatanSkeleton, undefined, string>

export interface BlogActivity {
     title: string
     slug: string
     body: Document | null
     image: ContentImage | null
     date: string
     author: ContentAuthor | null
}

export function parseContentfulBlogActivity(blogActivityEntry?: BlogActivityEntry): BlogActivity | null {
     if (!blogActivityEntry) {
          return null
     }

     const authorEntry = blogActivityEntry.fields.author as ContentAuthorEntry | undefined

     return {
          title: blogActivityEntry.fields.title || '',
          slug: blogActivityEntry.fields.slug,
          body: blogActivityEntry.fields.body || null,
          image: parseContentfulContentImage(blogActivityEntry.fields.image),
          date: blogActivityEntry.fields.date || '',
          author: parseContentfulContentAuthor(authorEntry)
     }
}

interface FetchActivityPostsOptions {
     preview: boolean
}

export async function fetchActivityPosts({preview}: FetchActivityPostsOptions): Promise<BlogActivity[]> {
     const contentful = contentfulClient({preview})

     const activityPostResults = await contentful.getEntries<TypeKegiatanSkeleton>({
          content_type: 'kegiatan',
          include: 1,
          order: ['-fields.date'],
     })

     return activityPostResults.items.map((activityEntry) => parseContentfulBlogActivity(activityEntry) as BlogActivity)
}

interface FetchActivityPostOptions {
     slug: string
     preview: boolean
}

export async function fetchActivityPost({slug, preview}: FetchActivityPostOptions): Promise<BlogActivity | null> {
     const contentful = contentfulClient({preview})

     const activityPostResult = await contentful.getEntries<TypeKegiatanSkeleton>({
          content_type: 'kegiatan',
          'fields.slug': slug,
          include: 1,
     })

     return parseContentfulBlogActivity(activityPostResult.items[0])
}