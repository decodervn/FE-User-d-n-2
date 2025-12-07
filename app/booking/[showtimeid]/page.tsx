import Image from "next/image";
import { notFound } from "next/navigation";
import { movies, showtimes, exampleSeats } from "@/lib/mockData";
import { formatVNDate, formatTime } from "@/lib/format";
import SeatSelector from "@/components/SeatSelector";

type Props = {
  params: { showtimeId: string };
};

export default function SelectSeatPage({ params }: Props) {
  const showtime = showtimes.find((s) => s.id === params.showtimeId);
  if (!showtime) return notFound();

  const movie = movies.find((m) => m.id === showtime.movieId);
  if (!movie) return notFound();

  return (
    <div className="select-seat-page">
      {/* Poster + info bên trái */}
      <div className="select-seat-left">
        <div className="select-poster">
          <Image
            src={movie.posterUrl}
            alt={movie.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="select-info-card">
          <h2 className="movie-title">{movie.title}</h2>
          <p className="movie-meta">
            {movie.durationMinutes} minutes
          </p>
          <p className="movie-meta">
            Showtime:{" "}
            {formatVNDate(showtime.startTime)}{" "}
            {formatTime(showtime.startTime)}
          </p>
          <p className="movie-meta">Screen: {showtime.screen}</p>
        </div>
      </div>

      {/* Ghế + summary bên phải */}
      <div className="select-seat-right">
        <SeatSelector seats={exampleSeats} price={showtime.price} />
      </div>
    </div>
  );
}
