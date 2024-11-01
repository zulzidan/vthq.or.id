import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSejarahFields {
    description: EntryFieldTypes.Text;
}

export type TypeSejarahSkeleton = EntrySkeletonType<TypeSejarahFields, "sejarah">;
export type TypeSejarah<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSejarahSkeleton, Modifiers, Locales>;
