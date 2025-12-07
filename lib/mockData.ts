// lib/mockData.ts
import {
  Movie,
  Showtime,
  Seat,
  BookingHistoryItem,
} from "./types";

export const movies: Movie[] = [
  {
    id: "1",
    title: "The Conjuring: Nghi lễ cuối cùng",
    synopsis:
      "Bộ phim kinh dị siêu nhiên của Hoa Kỳ do Michael Chaves đạo diễn, theo chân vợ chồng nhà trừ tà Ed và Lorraine Warren.",
    durationMinutes: 125,
    releaseDate: "2025-09-05",
    rating: 8,
    posterUrl:
      "https://tse2.mm.bing.net/th/id/OIP.sGhGhqHE_fqiVTC3dU7zwwHaEK?pid=Api&P=0&h=220",
  },
  {
    id: "2",
    title: "Stranger Things",
    synopsis:
      "Cậu bé mất tích và một loạt phim truyền hình chiếu mạng thể loại khoa học viễn tưởng – kinh dị tại thị trấn Hawkins.",
    durationMinutes: 120,
    releaseDate: "2025-06-18",
    rating: 10,
    posterUrl:
      "https://www.gossipherald.com/assets/uploads/updates/2025-12-03/42875_094706_stranger-things-drops-shocking-finale-runtime-ahead-of-volume-2_updates.jpg",
  },
  {
    id: "3",
    title: "HI FIVE",
    synopsis:
      "Hi-Five là bộ phim hài hành động Hàn Quốc 2025, kể về nhóm người sở hữu siêu năng lực bất đắc dĩ.",
    durationMinutes: 119,
    releaseDate: "2025-06-15",
    rating: 7,
    posterUrl:
      "https://m.media-amazon.com/images/S/pv-target-images/e78bc393690ca125b3746a4d29b4f691b57614eb91c9dd48fa361a15763e0f70.jpg",
  },
  {
    id: "4",
    title: "Nhiệm Vụ: Bất Khả Thi 8 - Nghiệp Báo Phần 2",
    synopsis:
      "Ethan Hunt và IMF đối mặt với nhiệm vụ nguy hiểm nhất trong loạt phim Mission: Impossible.",
    durationMinutes: 170,
    releaseDate: "2025-06-14",
    rating: 9,
    posterUrl:
      "https://tse3.mm.bing.net/th/id/OIP.zp_3gbPvCTOdPr_At3yT9wHaEK?pid=Api&P=0&h=220",
  },
  {
    id: "5",
    title: "How to train your dragon",
    synopsis:
      "Câu chuyện về cậu bé Viking Hiccup và chú rồng Night Fury Toothless trong hành trình bảo vệ ngôi làng.",
    durationMinutes: 112,
    releaseDate: "2025-06-16",
    rating: 7,
    posterUrl:
      "https://images.hdqwalls.com/wallpapers/how-to-train-your-dragon-2-movie-wide.jpg",
  },
];

export const showtimes: Showtime[] = [
  // The Conjuring: Nghi lễ cuối cùng – 05 Sep 2025
  {
    id: "st-7",
    movieId: "1",
    startTime: "2025-09-05T14:10:00",
    screen: "Screen 1",
    price: 120000,
  },
  {
    id: "st-8",
    movieId: "1",
    startTime: "2025-09-05T17:30:00",
    screen: "Screen 2",
    price: 120000,
  },
  {
    id: "st-9",
    movieId: "1",
    startTime: "2025-09-05T21:00:00",
    screen: "Screen 1",
    price: 140000,
  },

  // Stranger Things – 18 Jun 2025
  {
    id: "st-1",
    movieId: "2",
    startTime: "2025-06-18T14:40:00",
    screen: "Screen A",
    price: 120000,
  },
  {
    id: "st-2",
    movieId: "2",
    startTime: "2025-06-18T20:20:00",
    screen: "Screen A",
    price: 120000,
  },
  {
    id: "st-3",
    movieId: "2",
    startTime: "2025-06-18T22:36:00",
    screen: "Screen A",
    price: 120000,
  },

  // HI FIVE – 16 Jun 2025
  {
    id: "st-4",
    movieId: "3",
    startTime: "2025-06-16T14:30:00",
    screen: "Screen 1",
    price: 120000,
  },
  {
    id: "st-5",
    movieId: "3",
    startTime: "2025-06-16T15:20:00",
    screen: "Screen 2",
    price: 120000,
  },

  // Nhiệm Vụ: Bất Khả Thi 8 - Nghiệp Báo Phần 2 – 14 Jun 2025
  {
    id: "st-10",
    movieId: "4",
    startTime: "2025-06-14T16:00:00",
    screen: "IMAX",
    price: 180000,
  },
  {
    id: "st-11",
    movieId: "4",
    startTime: "2025-06-14T19:30:00",
    screen: "Screen 3",
    price: 160000,
  },
  {
    id: "st-12",
    movieId: "4",
    startTime: "2025-06-14T22:10:00",
    screen: "Screen 3",
    price: 160000,
  },

  // How to train your dragon – 16 Jun 2025
  {
    id: "st-6",
    movieId: "5",
    startTime: "2025-06-16T15:15:00",
    screen: "Screen 1",
    price: 120000,
  },
  {
    id: "st-13",
    movieId: "5",
    startTime: "2025-06-16T18:00:00",
    screen: "Screen 2",
    price: 120000,
  },
  {
    id: "st-14",
    movieId: "5",
    startTime: "2025-06-16T20:30:00",
    screen: "Screen 1",
    price: 140000,
  },
];

export const exampleSeats: Seat[] = (() => {
  const rows = ["A", "B", "C"];
  const numbers = [1, 2, 3, 4, 5];
  const booked = new Set(["A3", "B1", "C4"]);

  const seats: Seat[] = [];
  for (const row of rows) {
    for (const num of numbers) {
      const id = `${row}${num}`;
      seats.push({
        id,
        row,
        number: num,
        status: booked.has(id) ? "booked" : "available",
      });
    }
  }
  return seats;
})();

export const bookingHistory: BookingHistoryItem[] = [
  {
    id: "bk-1",
    movieTitle: "Nhiệm Vụ: Bất Khả Thi 8 - Nghiệp Báo Phần 2",
    showtime: "2025-06-17T14:10:00",
    screen: "IMAX",
    seats: ["B2", "B3", "B4"],
    total: 450000,
    status: "completed",
    createdAt: "2025-06-16T20:28:00",
  },
  {
    id: "bk-2",
    movieTitle: "Nhiệm Vụ: Bất Khả Thi 8 - Nghiệp Báo Phần 2",
    showtime: "2025-06-17T14:10:00",
    screen: "IMAX",
    seats: ["C5"],
    total: 150000,
    status: "cancelled",
    createdAt: "2025-06-16T20:11:00",
  },
];
