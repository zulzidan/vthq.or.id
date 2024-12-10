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

export async function getPesantrenImageGallery() {
     const contentful = contentfulClient({preview: false})

     const entries = await contentful.getEntries({
          content_type: 'pesantrenImageGallery',
     });

     if (entries.items && entries.items.length > 0) {
          return entries.items;
     }

     return [];
}    

export async function getInformasiPesertaDidik() {
     const contentful = contentfulClient({preview: false})

     const entries = await contentful.getEntries({
          content_type: 'informasiPesertaDidik',
     });

     if (entries.items && entries.items.length > 0) {
          return entries.items[0].fields;
     }

     return [];
}

// ImageReviewer
// ReviewerType
// Description
// NamaReviewer
// TitleReviewer

export async function getApaKataMereka() {
     const contentful = contentfulClient({preview: false})

     const entries = await contentful.getEntries({
          content_type: 'apaKataMereka',
     });

     if (entries.items && entries.items.length > 0) {
          return entries.items;
     }

     return [];
}