// components/HeroCarousel.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { movies } from "@/lib/mockData";

const SLIDE_INTERVAL = 4000;

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % movies.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const movie = movies[currentIndex];

  return (
    <div className="hero-right-wrapper">
      {/* CARD POSTER */}
      <div className="hero-right">
        <div className="hero-right-poster">
          <Image
            src={movie.posterUrl}
            alt={movie.title}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            style={{ objectFit: "cover" }}
            priority
          />

          {/* overlay + text trên ảnh */}
          <div className="hero-right-overlay" />
          <div className="hero-right-content">
            <div className="hero-tag">Now showing</div>
            <h3 className="hero-movie-title">{movie.title}</h3>
          </div>
        </div>
      </div>

      {/* Dots – NẰM DƯỚI CARD, KHÔNG ĐÈ LÊN ẢNH */}
      <div className="hero-dots">
        {movies.map((m, idx) => (
          <button
            key={m.id}
            type="button"
            className={`hero-dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
