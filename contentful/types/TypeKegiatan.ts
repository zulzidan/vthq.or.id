import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeKegiatanFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    body: EntryFieldTypes.RichText;
    image: EntryFieldTypes.AssetLink;
    date: EntryFieldTypes.Date;
    author?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
}

export type TypeKegiatanSkeleton = EntrySkeletonType<TypeKegiatanFields, "kegiatan">;
export type TypeKegiatan<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeKegiatanSkeleton, Modifiers, Locales>;
