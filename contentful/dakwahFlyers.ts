import contentfulClient from "./contentfulClient";
import type { DakwahFlyer } from "@/types/dakwahFlyer";
import type { TypeDakwahFlyerSkeleton } from "./types/TypeDakwahFlyer";

export async function getDakwahFlyers(): Promise<DakwahFlyer[]> {
  const client = contentfulClient({ preview: false });
  const entries = await client.withoutUnresolvableLinks.getEntries<TypeDakwahFlyerSkeleton>({
    content_type: "dakwahFlyer",
    "fields.enabled": true,
    order: ["fields.order", "-sys.createdAt"],
    include: 1,
    limit: 100,
  });

  return entries.items.flatMap(({ sys, fields }) => {
    const file = fields.image?.fields.file;
    const dimensions = file?.details.image;

    // Ignore documents and incomplete assets rather than rendering broken posters.
    if (
      !file?.url ||
      !/^image\/(jpe?g|png|webp|gif|avif)$/.test(file.contentType) ||
      !dimensions?.width ||
      !dimensions.height
    ) {
      return [];
    }

    return [{
      id: sys.id,
      title: fields.title,
      description: fields.description || "",
      url: file.url.startsWith("//") ? `https:${file.url}` : file.url,
      width: dimensions.width,
      height: dimensions.height,
    }];
  });
}
