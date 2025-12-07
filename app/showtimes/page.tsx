"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { movies, showtimes } from "@/lib/mockData";
import { formatTime, formatCurrencyVND } from "@/lib/format";

type DayTab = {
  key: string;  // "2025-06-16"
  label: string;
  sub: string;
};

// Tạo danh sách ngày dựa trên dữ liệu showtimes đang có
function buildDaysFromShowtimes(): DayTab[] {
  const uniqueDates = Array.from(
    new Set(showtimes.map((st) => st.startTime.slice(0, 10)))
  ).sort();

  return uniqueDates.map((dateStr) => {
    const d = new Date(dateStr + "T00:00:00");
    return {
      key: dateStr,
      label: d.toLocaleDateString("en-US", { weekday: "short" }),
      sub: d.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
      }),
    };
  });
}

export default function ShowtimesPage() {
  const days = useMemo(() => buildDaysFromShowtimes(), []);
  const [selectedDate, setSelectedDate] = useState(
    days[0]?.key ?? ""
  );

  // map movieId -> movie
  const movieMap = new Map(movies.map((m) => [m.id, m]));

  // showtimes theo ngày đang chọn
  const todaysShowtimes = showtimes.filter(
    (st) => st.startTime.slice(0, 10) === selectedDate
  );

  // group theo movie
  const byMovie = new Map<string, typeof todaysShowtimes>();
  todaysShowtimes.forEach((st) => {
    const list = byMovie.get(st.movieId) ?? [];
    list.push(st);
    byMovie.set(st.movieId, list);
  });

  const items = Array.from(byMovie.entries());

  return (
    <div>
      <h1 className="section-title">Showtimes</h1>
      <p className="section-subtitle">
        Find and book tickets for upcoming movie showtimes
      </p>

      {/* Tabs ngày */}
      <div className="showtimes-tabs">
        {days.map((d) => (
          <button
            key={d.key}
            className={
              "showtimes-tab" +
              (d.key === selectedDate ? " active" : "")
            }
            onClick={() => setSelectedDate(d.key)}
          >
            <div>{d.label}</div>
            <div className="showtimes-tab-sub">{d.sub}</div>
          </button>
        ))}
      </div>

      {/* Danh sách phim theo ngày */}
      <div className="showtimes-list">
        {items.map(([movieId, sts]) => {
          const movie = movieMap.get(movieId);
          if (!movie) return null;

          return (
            <div key={movieId} className="showtime-movie-card">
              <div className="showtime-movie-left">
                <div className="showtime-poster">
                  <Image
                    src={movie.posterUrl}
                    alt={movie.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <div className="showtime-movie-title">
                    {movie.title}
                  </div>
                  <div className="showtime-rating-chip">
                    {movie.rating}/10
                  </div>
                </div>
              </div>

              <div className="showtime-times">
                {sts.map((st, idx) => (
                  <div key={st.id} className="showtime-time-card">
                    <div className="showtime-time">
                      {formatTime(st.startTime)}
                    </div>
                    <div className="showtime-screen-index">
                      {idx + 1}
                    </div>
                    <div className="showtime-price">
                      {formatCurrencyVND(st.price)}
                    </div>
                    <Link
                      href={`/booking/${st.id}`}
                      className="showtime-btn"
                    >
                      Book Tickets
                    </Link>
                  </div>
                ))}
              </div>

              <div className="showtime-viewdetails">
                <Link href={`/movies/${movie.id}`}>View Details</Link>
              </div>
            </div>
          );
        })}

        {items.length === 0 && (
          <p style={{ marginTop: 16, fontSize: 14 }}>
            No showtimes available for this day.
          </p>
        )}
      </div>
    </div>
  );
}
