"use client";

import { useEffect, useState } from "react";
import { SpiralGallery } from "./spiral-gallery";
import { GridGallery } from "./grid-gallery";
import type { Product } from "@/lib/products";

export function ResponsiveGallery({
  products,
}: {
  products: Product[];
}) {
  const [isMobile, setIsMobile] = useState(false);
useEffect(() => {
  const mediaQuery = window.matchMedia("(max-width: 767px)");

  setIsMobile(mediaQuery.matches);

  const handleMediaChange = (e: MediaQueryListEvent) => {
    setIsMobile(e.matches);
  };

  mediaQuery.addEventListener("change", handleMediaChange);

  return () => {
    mediaQuery.removeEventListener("change", handleMediaChange);
  };
}, []);
  return isMobile ? (
    <GridGallery products={products} />
  ) : (
    <SpiralGallery products={products} />
  );
}