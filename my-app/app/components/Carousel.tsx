"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = Array.from({ length: 14 }, (_, i) => `/photos/${i}.webp`);

export default function CarouselImages() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(timer);
  }, [currentImageIndex]);

  const nextImage = () => {
    setIsFading(true);

    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );

      setIsFading(false);
    }, 500);
  };

  const prevImage = () => {
    setIsFading(true);

    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );

      setIsFading(false);
    }, 500);
  };

  return (
    <section
      className="m-auto relative w-[50%] h-full overflow-hidden rounded-sm shadow-2xl
      max-2xl:w-[60%] max-xl:w-[70%] max-lg:w-[80%] max-md:w-full"
    >
      <Image
        src={images[currentImageIndex]}
        alt="photo.webp"
        fill={true}
        quality={100}
        priority={true}
        className={`object-cover object-center transition-opacity duration-700 ease-in-out select-none ${
          isFading ? "opacity-5" : "opacity-100"
        }`}
        sizes="(max-width: 768px) 100vw"
      />

      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 text-black p-2 rounded-full cursor-pointer z-10 hover:bg-white/70 transition-colors"
        aria-label="Imagem anterior"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 max-sm:w-4 max-sm:h-4"
          width="24"
          height="24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 text-black p-2 rounded-full cursor-pointer z-10 hover:bg-white/70 transition-colors"
        aria-label="Próxima imagem"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 max-sm:w-4 max-sm:h-4"
          width="24"
          height="24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </section>
  );
}