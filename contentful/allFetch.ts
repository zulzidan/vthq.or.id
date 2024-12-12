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

export async function getInformasiPpdbBanner() {
     const contentful = contentfulClient({preview: false})

     const entries = await contentful.getEntries({
          content_type: 'informasiPpdbBanner',
     });

     if (entries.items && entries.items.length > 0) {
          return entries.items[0].fields;
     }

     return [];
}

export async function getYoutubeLink() {
     const contentful = contentfulClient({preview: false})

     const entries = await contentful.getEntries({
          content_type: 'youtubeLink',
     });

     if (entries.items && entries.items.length > 0) {
          return entries.items[0].fields;
     }

     return [];
}

export async function getVisi() {
     const contentful = contentfulClient({preview: false})

     const entries = await contentful.getEntries({
          content_type: 'visi',
     });

     if (entries.items && entries.items.length > 0) {
          return entries.items;
     }

     return [];
}

export async function getMisi() {
     const contentful = contentfulClient({preview: false})

     const entries = await contentful.getEntries({
          content_type: 'misi',
     });

     if (entries.items && entries.items.length > 0) {
          return entries.items;
     }

     return [];
}

export async function getStrukturOrganisasiImage() {
     const contentful = contentfulClient({preview: false})

     const entries = await contentful.getEntries({
          content_type: 'strukturOrganisasiGambar',
     });

     if (entries.items && entries.items.length > 0) {
          return entries.items;
     }

     return [];
}

export async function getKurikulumDescription() {
     const contentful = contentfulClient({preview: false})

     const entries = await contentful.getEntries({
          content_type: 'kurikulumDescription',
     });

     if (entries.items && entries.items.length > 0) {
          return entries.items[0].fields;
     }

     return [];
}