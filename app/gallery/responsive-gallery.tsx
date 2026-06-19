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
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isMobile ? (
    <GridGallery products={products} />
  ) : (
    <SpiralGallery products={products} />
  );
}