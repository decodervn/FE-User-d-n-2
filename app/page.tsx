// app/page.tsx
import Link from "next/link";
import { movies } from "@/lib/mockData";
import MovieCard from "@/components/MovieCard";
import HeroCarousel from "@/components/HeroCarousel";

export default function HomePage() {
  const featured = movies.slice(0, 5);

  return (
    <div className="app-main">
      <section className="hero">
        <div className="hero-left">
          <p className="hero-kicker">Movie tickets · GenZmephim</p>
          <h1 className="hero-title">
            Đặt vé xem phim{" "}
            <span className="accent">nhanh, gọn, không xếp hàng</span>.
          </h1>
          <p className="hero-subtitle">
            Chọn suất chiếu, chọn ghế đẹp và thanh toán trực tuyến chỉ trong vài
            bước. GenZmephim giúp bạn giữ chỗ trước cho mọi buổi chiếu hot.
          </p>
          <p className="hero-quote">Lights. Camera. Let&apos;s go!</p>

          <div className="hero-actions">
            <Link href="/movies" className="btn-primary">
              🎬 Browse movies
            </Link>
            <Link href="/showtimes" className="btn-outline">
              View showtimes
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <HeroCarousel movies={featured} intervalMs={4000} />
        </div>
      </section>

      <section>
        <div className="section-header">
          <div>
            <h2 className="section-title">Now showing</h2>
            <p className="section-subtitle">Book your tickets now</p>
          </div>
          <Link href="/movies" className="section-link">
            View all ▸
          </Link>
        </div>

        <div className="movies-grid">
          {featured.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
}
