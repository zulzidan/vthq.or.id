import { createClient } from "contentful";
const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_PREVIEW_ACCESS_TOKEN } = process.env

const client = createClient({
     space: CONTENTFUL_SPACE_ID as string,
     accessToken: CONTENTFUL_ACCESS_TOKEN as string,
})

const previewClient = createClient({
     space: CONTENTFUL_SPACE_ID!,
     accessToken: CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
     host: `preview.contentful.com`,
})

export default function contentfulClient({preview = false}) {
     if (preview) {
          return previewClient
     }
     return client
}