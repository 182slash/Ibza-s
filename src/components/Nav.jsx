import ibzasLogo from '../assets/ibzas-logo.png';

export default function Nav({ page, navigate, cartCount, onCartOpen }) {
  return (
    <nav className="tropical-textured-nav">
     <style>{`
  /* Import Tropical Calligraphy Font */
  @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');

  .tropical-textured-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    display: flex;
    align-items: center;
    /* Added gap for more space between links */
    gap: 50px; 
    z-index: 1000;
    padding: 0 60px; /* Slightly increased side padding to balance the wider gaps */
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(28px) saturate(180%) brightness(1.15);
    -webkit-backdrop-filter: blur(28px) saturate(180%) brightness(1.15);
    border-bottom: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow:
      0 4px 32px rgba(200, 230, 255, 0.08),
      0 1px 0 rgba(255, 255, 255, 0.12) inset,
      0 -1px 0 rgba(255, 255, 255, 0.06) inset;
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

  /* ── NAV LINKS ── */
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
`}</style>

      {/* ── LEFT LINKS ── */}
      <div className="nav-links left">
        {[
          ["home", "Home"],
          ["shop", "Shop"],
        ].map(([pg, label]) => (
          <button
            key={pg}
            className={`nav-link ${page === pg ? "active" : ""}`}
            onClick={() => navigate(pg)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ── CENTER LOGO ── */}
      <div className="nav-logo" onClick={() => navigate("home")}>
        <img
          src={ibzasLogo}
          alt="Ibza's Logo"
          style={{ height: '125px', display: 'block' }}
        />
      </div>

      {/* ── RIGHT LINKS ── */}
      <div className="nav-links right">
        <button
          className={`nav-link ${page === "events" ? "active" : ""}`}
          onClick={() => navigate("events")}
        >
          Events
        </button>

        <button className="nav-link cart-btn" onClick={onCartOpen}>
          Cart
          {cartCount > 0 && (
            <span className="cart-indicator">{cartCount}</span>
          )}
        </button>

        <button
          className="btn-ghost"
          style={{ padding: "9px 22px", fontSize: "10px", letterSpacing: "3px" }}
          onClick={() => navigate("admin")}
        >
          Admin
        </button>
      </div>
    </nav>
  );
}