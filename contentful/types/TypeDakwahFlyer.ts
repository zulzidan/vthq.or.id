import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeDakwahFlyerFields {
  title: EntryFieldTypes.Symbol;
  image: EntryFieldTypes.AssetLink;
  description?: EntryFieldTypes.Text;
  order: EntryFieldTypes.Integer;
  enabled: EntryFieldTypes.Boolean;
}

export type TypeDakwahFlyerSkeleton = EntrySkeletonType<TypeDakwahFlyerFields, "dakwahFlyer">;
export type TypeDakwahFlyer<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeDakwahFlyerSkeleton, Modifiers, Locales>;
