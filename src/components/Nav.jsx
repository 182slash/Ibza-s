import { useState } from 'react';
import ibzasLogo from '../assets/ibzas-logo.png';

export default function Nav({ page, navigate, cartCount, onCartOpen, onCartClose }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (target) => {
    onCartClose();
    navigate(target);
    setMenuOpen(false);
  };

  return (
    <nav className="tropical-textured-nav">
      <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');

  .tropical-textured-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;   /* ← even distribution */
    z-index: 1000;
    padding: 0 60px;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(28px) saturate(180%) brightness(1.15);
    -webkit-backdrop-filter: blur(28px) saturate(180%) brightness(1.15);
    border-bottom: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow:
      0 4px 32px rgba(200, 230, 255, 0.08),
      0 1px 0 rgba(255, 255, 255, 0.12) inset,
      0 -1px 0 rgba(255, 255, 255, 0.06) inset;
    overflow: visible;
  }

  .tropical-textured-nav::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background:
      linear-gradient(
        105deg,
        rgba(255, 255, 255, 0.13) 0%,
        rgba(200, 225, 255, 0.06) 30%,
        rgba(255, 255, 255, 0.0) 50%,
        rgba(180, 215, 255, 0.07) 70%,
        rgba(255, 255, 255, 0.11) 100%
      );
  }

  .tropical-textured-nav::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1.5px;
    z-index: 1;
    pointer-events: none;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.55) 25%,
      rgba(210, 240, 255, 0.85) 50%,
      rgba(255, 255, 255, 0.55) 75%,
      transparent 100%
    );
  }

  .tropical-textured-nav > *:not(style) {
    position: relative;
    z-index: 2;
  }

  /* ── Left & right link groups take equal flex space ── */
  .nav-links {
    display: flex;
    gap: 40px;
    align-items: center;
    flex: 1;
  }
  .nav-links.left  { justify-content: flex-end; }
  .nav-links.right { justify-content: flex-start; }

  /* ── Center logo: fixed width so it doesn't squash the link groups ── */
  .nav-logo {
    flex-shrink: 0;
    width: 160px;               /* reserve a fixed slot for the logo */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    /* allow the image to visually overflow the nav height */
    overflow: visible;
  }

  /* Logo image: taller than the bar for that "breaking out" effect,
     but capped so it doesn't escape the viewport or push layout */
  .nav-logo img {
    height: 72px !important;   /* slightly overflows 100px nav — intentional */
    width: auto;
    display: block;
    object-fit: contain;
    /* subtle drop shadow so it reads against any background */
    filter: drop-shadow(0 4px 12px rgba(0,0,0,0.55));
  }

  .tropical-textured-nav .nav-link {
    font-family: 'Alex Brush', cursive;
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 0.03em;
    text-transform: none;
    color: rgba(240, 225, 185, 0.85);
    cursor: pointer;
    background: none;
    border: none;
    position: relative;
    padding-bottom: 5px;
    transition: color 0.35s ease, text-shadow 0.35s ease;
    text-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
  }

  .tropical-textured-nav .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 100%;
    height: 0.5px;
    background: linear-gradient(
      90deg,
      rgba(201, 160, 60, 0.0) 0%,
      rgba(201, 160, 60, 0.9) 40%,
      rgba(255, 215, 100, 0.7) 100%
    );
    transition: right 0.5s cubic-bezier(0.22, 1, 0.36, 1);
    box-shadow: 0 0 6px rgba(201, 160, 60, 0.4);
  }

  .tropical-textured-nav .nav-link:hover,
  .tropical-textured-nav .nav-link.active {
    color: #f0d98a;
    text-shadow:
      0 0 18px rgba(201, 160, 60, 0.5),
      0 0 35px rgba(201, 160, 60, 0.2),
      0 1px 12px rgba(0, 0, 0, 0.5);
  }

  .tropical-textured-nav .nav-link:hover::after,
  .tropical-textured-nav .nav-link.active::after {
    right: 0;
  }

  /* Desktop: hide mobile-only elements */
  .menu-toggle { display: none; }

  @media (max-width: 768px) {
    .tropical-textured-nav {
      height: 85px;
      padding: 0 16px;
      gap: 0;
      justify-content: space-between;
      flex-wrap: nowrap;
    }

    .nav-logo {
      width: auto;
      position: relative;
      top: -5px;
      left: -139px;
    }

    .nav-links.left,
    .nav-links.right {
      display: none;
    }

    .nav-logo img {
      height: 55px !important;
    }

    .menu-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: 1px solid rgba(240, 217, 138, 0.35);
      border-radius: 6px;
      color: #f0d98a;
      font-size: 20px;
      width: 38px;
      height: 38px;
      cursor: pointer;
      flex-shrink: 0;
      z-index: 1001;
    }

    .mobile-menu-bar .nav-link {
      font-size: 20px !important;
      padding-bottom: 3px;
    }

    .mobile-menu-bar .btn-ghost {
      padding: 6px 12px !important;
      font-size: 8px !important;
      letter-spacing: 2px !important;
    }

    .cart-indicator {
      background: #c9a03c;
      color: #07050d;
      font-size: 9px;
      font-weight: 700;
      padding: 1px 5px;
      border-radius: 10px;
      margin-left: 3px;
    }
  }
`}</style>

      {/* ── MOBILE HAMBURGER ── */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* ── LEFT LINKS (desktop only) ── */}
      <div className="nav-links left">
        {[["home", "Home"], ["shop", "Shop"]].map(([pg, label]) => (
          <button
            key={pg}
            className={`nav-link ${page === pg ? "active" : ""}`}
            onClick={() => handleNav(pg)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ── CENTER LOGO ── */}
      <div className="nav-logo" onClick={() => handleNav("home")}>
        <img src={ibzasLogo} alt="Ibza's Logo" />
      </div>

      {/* ── MOBILE SLIDE-DOWN BAR ── */}
      <div
        className="mobile-menu-bar"
        style={{
          position: 'absolute',
          top: '70px',
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '14px 8px',
          background: 'rgba(15, 12, 8, 0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(201, 160, 60, 0.25)',
          zIndex: 999,
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? 'translateY(0px)' : 'translateY(-8px)',
          pointerEvents: menuOpen ? 'all' : 'none',
        }}
      >
        <button className={`nav-link ${page === "home" ? "active" : ""}`} onClick={() => handleNav("home")}>Home</button>
        <button className={`nav-link ${page === "shop" ? "active" : ""}`} onClick={() => handleNav("shop")}>Shop</button>
        <button className={`nav-link ${page === "events" ? "active" : ""}`} onClick={() => handleNav("events")}>Events</button>
        <button className="nav-link" onClick={() => { setMenuOpen(false); onCartOpen(); }}>
          Cart {cartCount > 0 && <span className="cart-indicator">{cartCount}</span>}
        </button>
        <button className="btn-ghost" onClick={() => handleNav("admin")}>Admin</button>
      </div>

      {/* ── RIGHT LINKS (desktop only) ── */}
      <div className="nav-links right">
        <button
          className={`nav-link ${page === "events" ? "active" : ""}`}
          onClick={() => handleNav("events")}
        >
          Events
        </button>

        <button className="nav-link cart-btn" onClick={onCartOpen}>
          Cart
          {cartCount > 0 && <span className="cart-indicator">{cartCount}</span>}
        </button>

        <button
          className="btn-ghost"
          style={{ padding: "9px 22px", fontSize: "10px", letterSpacing: "3px" }}
          onClick={() => handleNav("admin")}
        >
          Admin
        </button>
      </div>
    </nav>
  );
}