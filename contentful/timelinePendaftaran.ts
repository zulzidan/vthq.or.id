import contentfulClient from "./contentfulClient";

export async function getNews() {
     const contentful = contentfulClient({preview: false})

     const entries = await contentful.getEntries({
         content_type: 'timelinePendaftaran',
     });
 
     if (entries.items) return entries.items.map((item) => item.fields);
 
     return [];
 }