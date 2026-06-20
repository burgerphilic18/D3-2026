"use client";

import Image from "next/image";
import type { Product } from "@/lib/products";

export function GridGallery({
  products,
}: {
  products: Product[];
}) {
  return (
    <div className="min-h-screen bg-black p-2 sm:p-4 pt-16 sm:pt-24 overflow-y-auto">
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative overflow-hidden rounded-xl border border-white/10"
          >
           <Image
  src={product.image}
  alt={product.title}
  width={500}
  height={300}
  sizes="50vw"
  className="w-full aspect-video object-cover"
/>
          </div>
        ))}
      </div>
    </div>
  );
}