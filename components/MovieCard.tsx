// components/MovieCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/lib/types";
import { showtimes } from "@/lib/mockData";
import { formatVNDate } from "@/lib/format";

type Props = {
  movie: Movie;
};

export default function MovieCard({ movie }: Props) {
  // Lọc suất chiếu của phim
  const movieShowtimes = showtimes.filter((s) => s.movieId === movie.id);
  const firstShowtime = movieShowtimes[0];
  const hasShowtime = !!firstShowtime;

  // Thời lượng dạng Xh Ym
  const hours = Math.floor(movie.durationMinutes / 60);
  const minutes = movie.durationMinutes % 60;

  // Giờ suất chiếu gần nhất (nếu có)
  const nextShowtimeLabel =
    firstShowtime &&
    new Date(firstShowtime.startTime).toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <article className="movie-card">
      {/* Poster */}
      <div className="movie-card-poster">
        <Image
          src={movie.posterUrl}
          alt={movie.title}
          fill
          sizes="(min-width: 1024px) 260px, 50vw"
          style={{ objectFit: "cover" }}
        />

        {/* Gắn HOT nếu rating cao */}
        {movie.rating >= 9 && <span className="movie-badge-hot">HOT</span>}

        {/* Rating chip */}
        <div className="movie-badge-rating">
          <span className="icon">★</span>
          <span>{movie.rating.toFixed(1)}</span>
        </div>
      </div>

      {/* Thông tin phim */}
      <div className="movie-card-body">
        <h3 className="movie-title">{movie.title}</h3>

        {/* Ngày phát hành + thời lượng */}
        <div className="movie-meta-row">
  <span>Release: {formatVNDate(movie.releaseDate)}</span>
  <span>
    {hours}h {minutes}m
  </span>
</div>


        {/* Suất chiếu gần nhất */}
        <p className="movie-genre">
          {hasShowtime
            ? `Suất chiếu gần nhất: ${nextShowtimeLabel} · ${firstShowtime.screen}`
            : "Chưa có lịch chiếu"}
        </p>

        {/* Action buttons */}
        <div className="movie-actions">
          <Link
            href={hasShowtime ? `/showtimes?movieId=${movie.id}` : "/showtimes"}
            className="movie-btn-book"
          >
            Book
          </Link>
          <Link
            href={`/movies/${movie.id}`}
            className="movie-btn-details"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
