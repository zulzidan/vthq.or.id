import { Entry } from "contentful";
import { TypeArtikelSkeleton } from "./types";
import { Document } from "@contentful/rich-text-types";
import { ContentImage, parseContentfulContentImage } from "./contentImage";
import { ContentAuthor, ContentAuthorEntry, parseContentfulContentAuthor } from "./contentfulAuthor";
import contentfulClient from "./contentfulClient";

type BlogArticleEntry = Entry<TypeArtikelSkeleton, undefined, string>

export interface BlogArticle {
     title: string
     slug: string
     body: Document | null
     image: ContentImage | null
     date: string
     author: ContentAuthor | null
}

export function parseContentfulBlogArtikel(blogArticleEntry?: BlogArticleEntry): BlogArticle | null {
     if (!blogArticleEntry) {
          return null
     }

     const authorEntry = blogArticleEntry.fields.author as ContentAuthorEntry | undefined

     return {
          title: blogArticleEntry.fields.title || '',
          slug: blogArticleEntry.fields.slug,
          body: blogArticleEntry.fields.body || null,
          image: parseContentfulContentImage(blogArticleEntry.fields.image),
          date: blogArticleEntry.fields.date || '',
          author: parseContentfulContentAuthor(authorEntry)
     }
}

interface FetchArticlePostsOptions {
     preview: boolean
}

export async function fetchArticlePosts({preview}: FetchArticlePostsOptions): Promise<BlogArticle[]> {
     const contentful = contentfulClient({preview})

     const articlePostResults = await contentful.getEntries<TypeArtikelSkeleton>({
          content_type: 'artikel',
          include: 1,
          order: ['fields.date'],
     })

     return articlePostResults.items.map((articleEntry) => parseContentfulBlogArtikel(articleEntry) as BlogArticle)
}

interface FetchArticlePostOptions {
     slug: string
     preview: boolean
}

export async function fetchArticlePost({slug, preview}: FetchArticlePostOptions): Promise<BlogArticle | null> {
     const contentful = contentfulClient({preview})

     const articlePostResult = await contentful.getEntries<TypeArtikelSkeleton>({
          content_type: 'artikel',
          'fields.slug': slug,
          include: 1,
     })

     return parseContentfulBlogArtikel(articlePostResult.items[0])
}