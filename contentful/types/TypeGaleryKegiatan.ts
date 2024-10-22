import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeGaleryKegiatanFields {
    image: EntryFieldTypes.AssetLink;
    alt: EntryFieldTypes.Symbol;
    date: EntryFieldTypes.Date;
}

export type TypeGaleryKegiatanSkeleton = EntrySkeletonType<TypeGaleryKegiatanFields, "galeryKegiatan">;
export type TypeGaleryKegiatan<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeGaleryKegiatanSkeleton, Modifiers, Locales>;
