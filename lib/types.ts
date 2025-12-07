// lib/types.ts
export type Movie = {
  id: string;
  title: string;
  synopsis: string;
  durationMinutes: number;
  releaseDate: string; // ISO string
  rating: number;      // 0–10
  posterUrl: string;   // tạm thời dùng ảnh trong /public, sau này đổi thành URL từ backend
};

export type Showtime = {
  id: string;
  movieId: string;
  startTime: string;   // ISO datetime
  screen: string;      // "IMAX", "Screen A"...
  price: number;       // VND
};

export type SeatStatus = "available" | "booked";

export type Seat = {
  id: string;          // "A1"
  row: string;
  number: number;
  status: SeatStatus;
};

export type BookingStatus = "completed" | "cancelled";

export type BookingHistoryItem = {
  id: string;
  movieTitle: string;
  showtime: string;    // ISO datetime
  screen: string;
  seats: string[];     // ["B2","B3"]
  total: number;
  status: BookingStatus;
  createdAt: string;   // booking date
};
