    import contentfulClient from "./contentfulClient";

    export async function getTimeLinePendaftaran() {
        const contentful = contentfulClient({preview: false})

        const entries = await contentful.getEntries({
            content_type: 'timelinePendaftaran',
        });
    
        if (entries.items && entries.items.length > 0) {
            return entries.items[0].fields;
        }
    
        return [];
    }