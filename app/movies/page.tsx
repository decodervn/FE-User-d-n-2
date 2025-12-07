// app/movies/page.tsx
import { movies } from "@/lib/mockData";
import MovieCard from "@/components/MovieCard";

export default function MoviesPage() {
  return (
    <main className="app-main">
      {/* Header */}
      <section className="section-header">
        <div>
          <h1 className="section-title">Now showing</h1>
          <p className="section-subtitle">
            Chọn bộ phim bạn muốn xem và đặt vé chỉ trong vài bước.
          </p>
        </div>
      </section>

      {/* Danh sách phim */}
      <section className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </main>
  );
}
