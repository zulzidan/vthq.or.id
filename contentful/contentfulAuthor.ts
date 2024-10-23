import { Entry } from "contentful";
import { TypeAuthorSkeleton } from "./types";

export type ContentAuthorEntry = Entry<TypeAuthorSkeleton, undefined, string>

export interface ContentAuthor {
     name: string
}

export function parseContentfulContentAuthor(contentAuthorEntry?: ContentAuthorEntry): ContentAuthor | null {
     if(!contentAuthorEntry || !('fields' in contentAuthorEntry)) {
          return null
     }

     return {
          name: contentAuthorEntry.fields.name || 'Anonymous Author',
     }
}
