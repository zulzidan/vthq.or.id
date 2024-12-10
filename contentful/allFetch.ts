import contentfulClient from "./contentfulClient";

export async function getPesantrenProfileContent() {
     const contentful = contentfulClient({preview: false})

     const entries = await contentful.getEntries({
          content_type: 'pesantrenProfile',
     });

     if (entries.items && entries.items.length > 0) {
          return entries.items[0].fields;
     }

     return [];
}    