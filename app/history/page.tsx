import { bookingHistory } from "@/lib/mockData";
import {
  formatVNDate,
  formatCurrencyVND,
} from "@/lib/format";

export default function HistoryPage() {
  return (
    <div>
      <h1 className="section-title">Booking History</h1>

      <div className="history-grid">
        {bookingHistory.map((b) => (
          <div key={b.id} className="history-card">
            <div className="history-header">
              <div className="history-title">
                🎟 {b.movieTitle}
              </div>
              <div
                className={
                  "badge-status " +
                  (b.status === "completed"
                    ? "completed"
                    : "cancelled")
                }
              >
                {b.status === "completed"
                  ? "Completed"
                  : "Cancelled"}
              </div>
            </div>

            <div className="history-body">
              <div className="history-row">
                <span>Showtime Information:</span>
                <span>
                  {formatVNDate(b.showtime)} | {b.screen} | Seats:{" "}
                  {b.seats.join(", ")}
                </span>
              </div>
              <div className="history-row">
                <span>Booking Date:</span>
                <span>
                  {formatVNDate(b.createdAt)}
                </span>
              </div>
              <div className="history-row">
                <span>Total:</span>
                <strong>
                  {formatCurrencyVND(b.total)}
                </strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
