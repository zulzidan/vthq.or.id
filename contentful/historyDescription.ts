import { Entry } from "contentful"
import { TypeSejarahSkeleton } from "./types"
import contentfulClient from "./contentfulClient"

type HistoryDescriptionEntry = Entry<TypeSejarahSkeleton, undefined, string>

export interface HistoryDescription {
     description: string
}

export function parseContentHistoryDescription(historyDescriptionEntry?: HistoryDescriptionEntry): HistoryDescription | null {
     if (!historyDescriptionEntry) {
          return null
     }

     return {
          description: historyDescriptionEntry.fields.description
     }
}

interface FetchHistoryDescriptionOptions {
     preview: boolean
}

export async function fetchHistoryDescrition({preview}: FetchHistoryDescriptionOptions): Promise<HistoryDescription> {
     const contenful = contentfulClient({preview})

     const historyDescription = await contenful.getEntries<TypeSejarahSkeleton>({
          content_type: 'sejarah',
     })

     return parseContentHistoryDescription(historyDescription.items[0])!
}
