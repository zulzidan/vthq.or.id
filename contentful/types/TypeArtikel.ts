import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeArtikelFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    body: EntryFieldTypes.RichText;
    image: EntryFieldTypes.AssetLink;
    date: EntryFieldTypes.Date;
    author?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
}

export type TypeArtikelSkeleton = EntrySkeletonType<TypeArtikelFields, "artikel">;
export type TypeArtikel<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeArtikelSkeleton, Modifiers, Locales>;
