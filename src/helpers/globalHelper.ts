import { TMetaItem, TMetaResponse } from "@/entities/meta";
import { siteConfig } from "@/config/site";

export const handleToContact = () => {
  const phone = siteConfig.whatsappNumber;
  const message = encodeURIComponent(siteConfig.whatsappMessage);

  const url = `https://wa.me/${phone}?text=${message}`;

  window.open(url, "_blank", "noopener,noreferrer");
};

export const formatCurrency = (value: number | unknown): string =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value));

export const metaResponsePrefix = <T>({
  data,
  meta,
}: {
  data: T;
  meta: TMetaItem;
}): TMetaResponse<T> => {
  return {
    data,
    meta,
  };
};

export function calculateTotalPages(
  totalItems: number,
  itemsPerPage: number
): number {
  return Math.ceil(totalItems / itemsPerPage);
}

export function getSupabasePath(url: string, bucket: string): string {
  return url.replace(
    new RegExp(`^https?://[^/]+/storage/v1/object/public/${bucket}/`),
    ""
  );
}

export function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
}

export function deslugify(slug: string) {
  return slug
    .split("-") // pisah dengan dash
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // kapital
    .join(" "); // gabung spasi
}

export function capitalizeEachWord(text: string): string {
  if (!text) return "";
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
