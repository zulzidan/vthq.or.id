import { Entry } from "contentful";
import { ContentImage, parseContentfulContentImage } from "./contentImage";
import { TypeWelcomeImageSlidersSkeleton } from "./types";
import contentfulClient from "./contentfulClient";

type WelcomeImageSlidersEntry = Entry<TypeWelcomeImageSlidersSkeleton, undefined, string>

export interface WelcomeImageSliders {
     image: ContentImage | null
}

export function parseContentfulImageSliders(welcomeImageSlidersEntry?: WelcomeImageSlidersEntry): WelcomeImageSliders | null {
     if (!welcomeImageSlidersEntry) {
          return null
     }

     return {
          image: parseContentfulContentImage(welcomeImageSlidersEntry.fields.image)
     }
}

interface FetchWelcomeImageSlider {
     preview: boolean
}

export async function FetchWelcomeImageSliders({preview}: FetchWelcomeImageSlider): Promise<WelcomeImageSliders[]> {
     const contentful = contentfulClient({preview})

     const welcomeImageSliders = await contentful.getEntries<TypeWelcomeImageSlidersSkeleton>({
          content_type: 'welcomeImageSliders',
     })

     return welcomeImageSliders.items.map((welcomeImageEntry) => parseContentfulImageSliders(welcomeImageEntry) as WelcomeImageSliders)
}