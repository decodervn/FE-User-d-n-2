// app/movies/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";

import { movies, showtimes } from "@/lib/mockData";
import { formatVNDate, formatTime, formatCurrencyVND } from "@/lib/format";

type PageProps = {
  params: { id: string };
};

export default function MovieDetailPage({ params }: PageProps) {
  // id trên URL: /movies/1, /movies/2, ...
  const movieId = String(params.id);

  // Tìm movie theo id
  const movie = movies.find((m) => m.id === movieId);

  // Nếu không tìm thấy, hiện message rõ ràng (thay vì 404)
  if (!movie) {
    return (
      <main className="app-main">
        <section className="section-header">
          <h1 className="section-title">Movie not found</h1>
          <p className="section-subtitle">
            Không tìm thấy phim với id: <strong>{movieId}</strong>.  
            Hãy kiểm tra lại `movie.id` trong <code>lib/mockData.ts</code> và
            đường dẫn <code>href={`/movies/${"{movie.id}"}`}</code> trong
            <code>MovieCard.tsx</code>.
          </p>
        </section>
      </main>
    );
  }

  const hours = Math.floor(movie.durationMinutes / 60);
  const minutes = movie.durationMinutes % 60;

  const movieShowtimes = showtimes
    .filter((s) => s.movieId === movie.id)
    .sort(
      (a, b) =>
        new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
    );

  const hasShowtime = movieShowtimes.length > 0;

  return (
    <main className="app-main">
      {/* HEADER */}
      <section className="section-header">
        <div>
          <h1 className="section-title">{movie.title}</h1>
          <p className="section-subtitle">
            Release: {formatVNDate(movie.releaseDate)} · {hours}h {minutes}m ·
            Rating {movie.rating}/10
          </p>
        </div>

        {hasShowtime && (
          <Link
            href={`/showtimes?movieId=${movie.id}`}
            className="movie-btn-book"
          >
            Book now
          </Link>
        )}
      </section>

      {/* 2 CỘT: POSTER + INFO / SHOWTIMES */}
      <section className="movie-detail-layout">
        {/* Cột trái: Poster + synopsis */}
        <div className="movie-detail-card">
          <div className="select-poster">
            <Image
              src={movie.posterUrl}
              alt={movie.title}
              fill
              sizes="(min-width: 1024px) 360px, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div
            style={{
              marginTop: 16,
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <span className="chip">⭐ {movie.rating}/10</span>
            <span className="chip">
              {hours}h {minutes}m
            </span>
            <span className="chip">
              Release: {formatVNDate(movie.releaseDate)}
            </span>
          </div>

          <section style={{ marginTop: 18 }}>
            <h2 style={{ fontWeight: 600, marginBottom: 6 }}>Synopsis</h2>
            <p
              style={{
                fontSize: 14,
                color: "#cbd5f5",
                lineHeight: 1.6,
              }}
            >
              {movie.synopsis}
            </p>
          </section>
        </div>

        {/* Cột phải: Showtimes */}
        <div className="movie-detail-card">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: 10,
            }}
          >
            <h2
              className="section-title"
              style={{ fontSize: 20, marginBottom: 0 }}
            >
              Available showtimes
            </h2>
            <span style={{ fontSize: 13, color: "#64748b" }}>Next 7 days</span>
          </div>

          {!hasShowtime ? (
            <p className="section-subtitle">
              Hiện chưa có lịch chiếu cho phim này.
            </p>
          ) : (
            <div className="showtimes-list">
              {movieShowtimes.map((st) => {
                const dt = new Date(st.startTime);
                const dateLabel = dt.toLocaleDateString("vi-VN", {
                  weekday: "short",
                  day: "2-digit",
                  month: "2-digit",
                });

                return (
                  <div key={st.id} className="showtime-time-card">
                    <div className="showtime-time">{formatTime(st.startTime)}</div>
                    <div className="showtime-screen-index">
                      {dateLabel} · {st.screen}
                    </div>
                    <div className="showtime-price">
                      {formatCurrencyVND(st.price)}
                    </div>
                    <Link
                      href={`/booking/${st.id}`}
                      className="showtime-btn"
                    >
                      Book
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
