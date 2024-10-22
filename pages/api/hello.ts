import type { NextApiRequest, NextApiResponse } from "next";
import * as contentful from 'contentful';

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

type GalleryItem = {
  alt: string;
  date: string;
  image: { url: string; title: string };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GalleryItem[] | { message: string }>
) {
  try {
    // Fetch entries of type "galeriKegiatan" (assuming this is the content type ID)
    const entries = await client.getEntries({
      content_type: 'galeryKegiatan' // replace with your content type ID
    });

    // Map through entries and extract the required fields (alt, date, image)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const galleryItems: GalleryItem[] = entries.items.map((item: any) => ({
      alt: item.fields.alt,
      date: item.fields.date,
      image: {
        url: item.fields.image.fields.file.url,
        title: item.fields.image.fields.title,
      }
    }));

    res.status(200).json(galleryItems);
  } catch (error) {
    console.error('Error fetching entries:', error);
    res.status(500).json({ message: 'Error fetching gallery items' });
  }
}