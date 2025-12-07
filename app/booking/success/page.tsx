import { formatVNDate, formatCurrencyVND } from "@/lib/format";

export default function BookingSuccessPage() {
  const amount = 120000;
  const showtime = "2025-06-18T17:30:00";

  return (
    <div className="success-card">
      <div className="success-icon">✓</div>
      <h1 className="success-title">Booking Successful!</h1>
      <p className="success-note">
        Please complete payment within <strong>15 minutes</strong> to
        confirm your booking
      </p>

      <div className="success-info">
        <div className="success-row">
          <span>Movie:</span>
          <strong>Kiện Tướng</strong>
        </div>
        <div className="success-row">
          <span>Showtime:</span>
          <strong>
            {formatVNDate(showtime)} 17:30
          </strong>
        </div>
        <div className="success-row">
          <span>Screen:</span>
          <strong>Screen A</strong>
        </div>
        <div className="success-row">
          <span>Seats:</span>
          <strong>A2</strong>
        </div>
        <div className="success-row">
          <span>Total amount:</span>
          <strong>{formatCurrencyVND(amount)}</strong>
        </div>
        <div className="success-row">
          <span>Booking ID:</span>
          <strong>2</strong>
        </div>
      </div>
    </div>
  );
}
