"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", icon: "▶" },
  { href: "/movies", label: "Movies", icon: "🎬" },
  { href: "/showtimes", label: "Showtimes", icon: "🕒" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="navbar">
      <div className="nav-left">
        <div className="nav-logo">🎞</div>
        <span>GenZmephim</span>
      </div>

      <nav className="nav-center">
        {navItems.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${active ? "active" : ""}`}
            >
              <span className="icon">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="nav-right">
        <button className="btn-outline">Register</button>
        <button className="btn-primary">
          <span className="icon">⇥</span>
          <span>Login</span>
        </button>
      </div>
    </header>
  );
}
