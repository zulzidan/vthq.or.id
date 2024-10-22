import { Entry } from "contentful";
import { TypeGaleryKegiatanSkeleton } from "./types";
import { ContentImage, parseContentfulContentImage } from "./contentImage";
import contentfulClient from "./contentfulClient";

type GaleryActivityEntry = Entry<TypeGaleryKegiatanSkeleton, undefined, string>

export interface GaleryActivity {
     alt: string
     date: string
     image: ContentImage | null
}

export function parseContentfulGaleryActivity(galeryActivityEntry?: GaleryActivityEntry): GaleryActivity | null {
     if (!galeryActivityEntry) {
          return null
     }

     return {
          alt: galeryActivityEntry.fields.alt || '',
          date: galeryActivityEntry.fields.date || '',
          image: parseContentfulContentImage(galeryActivityEntry.fields.image),
     }
}

interface FetchGaleryActivityOptions {
     preview: boolean
}

export async function fetchGaleryActivities({preview}: FetchGaleryActivityOptions): Promise<GaleryActivity[]> {
     const contentful = contentfulClient({preview})

     const galeryActivitiesResult = await contentful.getEntries<TypeGaleryKegiatanSkeleton>({
          content_type: 'galeryKegiatan',
     })

     return galeryActivitiesResult.items.map((galeryActivityEntry) => parseContentfulGaleryActivity(galeryActivityEntry) as GaleryActivity)
}

