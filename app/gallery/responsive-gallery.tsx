"use client";

import dynamic from "next/dynamic";
import type { Product } from "@/lib/products";

const LazySpiralGallery = dynamic(
  () => import("./spiral-gallery").then((mod) => mod.SpiralGallery),
  { ssr: false }
);

const LazyGridGallery = dynamic(
  () => import("./grid-gallery").then((mod) => mod.GridGallery),
  { ssr: false }
);

export function ResponsiveGallery({
  products,
}: {
  products: Product[];
}) {
  return (
    <>
      <div className="md:hidden">
        <LazyGridGallery products={products} />
      </div>
      <div className="hidden md:block">
        <LazySpiralGallery products={products} />
      </div>
    </>
  );
}