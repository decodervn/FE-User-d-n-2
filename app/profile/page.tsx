"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [fullName, setFullName] = useState("Lin Luu");
  const [email, setEmail] = useState("lhlinh01@gmail.com");
  const [username, setUsername] =
    useState("lhlinh01@gmail.com");
  const [phone, setPhone] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // tạm thời chỉ preventDefault
    alert("Saved (dummy).");
  }

  return (
    <div className="profile-card">
      <h1 className="section-title">Profile</h1>

      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label>Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Full Name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="profile-actions">
          <button type="submit" className="save-btn">
            Save Changes
          </button>
          <button
            type="button"
            className="link-btn"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
}
