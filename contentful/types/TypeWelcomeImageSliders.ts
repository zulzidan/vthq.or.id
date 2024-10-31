import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeWelcomeImageSlidersFields {
    image: EntryFieldTypes.AssetLink;
}

export type TypeWelcomeImageSlidersSkeleton = EntrySkeletonType<TypeWelcomeImageSlidersFields, "welcomeImageSliders">;
export type TypeWelcomeImageSliders<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeWelcomeImageSlidersSkeleton, Modifiers, Locales>;
