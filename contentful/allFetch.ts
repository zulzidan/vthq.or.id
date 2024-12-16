import contentfulClient from "./contentfulClient";

export async function getWelcomeImageSlidersBySlug(slug: string) {
     const contentful = contentfulClient({preview: false})

     const entries = await contentful.getEntries({
          content_type: 'welcomeImageSliders',
          'fields.slug': slug,
     });

     if (entries.items && entries.items.length > 0) {
          return entries.items[0].fields;
     }

     return [];
}

export async function getHeadingProfileBySlug(slug: string) {
     const contentful = contentfulClient({preview: false})

     const entries = await contentful.getEntries({
          content_type: 'headingProfile',
          'fields.slug': slug,
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

export async function getTentangKamiContent() {
     const contentful = contentfulClient({preview: false})

     const entries = await contentful.getEntries({
          content_type: 'tentangKami',
     });

     if (entries.items && entries.items.length > 0) {
          return entries.items[0].fields;
     }

     return [];
}

export async function getPendaftaran() {
     const contentful = contentfulClient({preview: false})

     const entries = await contentful.getEntries({
          content_type: 'pendaftaran',
     });

     if (entries.items && entries.items.length > 0) {
          return entries.items[0].fields;
     }

     return [];
}

export async function getKontakPendaftaran() {
     const contentful = contentfulClient({preview: false})

     const entries = await contentful.getEntries({
          content_type: 'informasiPendaftaran',
     });

     if (entries.items && entries.items.length > 0) {
          return entries.items;
     }

     return [];
}

