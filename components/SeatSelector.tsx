"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Seat } from "@/lib/types";
import { formatCurrencyVND } from "@/lib/format";

type Props = {
  seats: Seat[];
  price: number;
};

export default function SeatSelector({ seats, price }: Props) {
  const [selected, setSelected] = useState<string[]>([]);
  const router = useRouter();

  function toggleSeat(id: string) {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((s) => s !== id)
        : [...prev, id],
    );
  }

  const total = selected.length * price;

  function handleBook() {
    if (!selected.length) return;
    // tạm thời redirect luôn sang payment
    router.push("/booking/payment");
  }

  return (
    <div className="seat-layout">
      <div className="seat-panel">
        <div className="seat-screen">SCREEN</div>

        <div className="seat-grid">
          {seats.map((seat) => {
            const isSelected = selected.includes(seat.id);
            const isBooked = seat.status === "booked";
            const classes =
              "seat" +
              (isBooked ? " seat-booked" : "") +
              (isSelected ? " seat-selected" : "");
            return (
              <button
                key={seat.id}
                className={classes}
                disabled={isBooked}
                onClick={() => toggleSeat(seat.id)}
              >
                {seat.id}
              </button>
            );
          })}
        </div>

        <div className="seat-legend">
          <div>
            <span className="seat sample available" /> Available
          </div>
          <div>
            <span className="seat sample selected" /> Selected
          </div>
          <div>
            <span className="seat sample booked" /> Booked
          </div>
        </div>
      </div>

      <div className="booking-summary-card">
        <h3>Booking Summary</h3>
        <p className="booking-summary-row">
          Selected seats: {selected.length || 0}
        </p>
        <p className="booking-summary-row">
          Seats:{" "}
          {selected.length ? selected.join(", ") : "-"}
        </p>
        <p className="booking-summary-row">
          Ticket price: {formatCurrencyVND(price)}
        </p>
        <p className="booking-summary-row total">
          Total: {formatCurrencyVND(total)}
        </p>
        <button
          className="booking-btn"
          onClick={handleBook}
          disabled={!selected.length}
        >
          Book Tickets
        </button>
      </div>
    </div>
  );
}
