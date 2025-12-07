"use client";

import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/booking/success");
  }

  return (
    <div className="payment-card">
      <h1 className="section-title" style={{ marginBottom: 12 }}>
        Payment Information
      </h1>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="payment-row">
          <label>
            <input type="radio" name="cardOption" defaultChecked />
            <span>Visa •••• 1234 | Expires: 7890 (Default)</span>
          </label>
        </div>

        <div className="payment-row">
          <label>
            <input type="radio" name="cardOption" />
            <span>Add a new card</span>
          </label>
        </div>

        <div className="payment-grid">
          <div className="form-group">
            <label>Cardholder Name</label>
            <input type="text" placeholder="Name on card" />
          </div>
          <div className="form-group">
            <label>Card Number</label>
            <input
              type="text"
              placeholder="XXXX-XXXX-XXXX-XXXX"
            />
          </div>
          <div className="form-group">
            <label>Expiry Date</label>
            <input type="text" placeholder="MM/YY" />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input type="text" placeholder="123" />
          </div>
          <div className="form-group">
            <label>Card Type</label>
            <select defaultValue="Visa">
              <option>Visa</option>
              <option>Mastercard</option>
            </select>
          </div>
        </div>

        <div className="payment-options">
          <label>
            <input type="checkbox" defaultChecked />
            <span>Save card for future payments</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>Make this my default card</span>
          </label>
        </div>

        <button type="submit" className="pay-btn">
          Pay Now
        </button>
      </form>
    </div>
  );
}
