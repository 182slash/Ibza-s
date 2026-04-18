import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import HeroLogo from "../components/HeroLogo";

const ease = [0.22, 1, 0.36, 1];

function fadeUp(delay = 0, duration = 1.4) {
  return {
    hidden: { opacity: 0, y: 18 },
    show:   { opacity: 1, y: 0, transition: { duration, ease, delay } },
  };
}

function lineReveal(delay = 0) {
  return {
    hidden: { scaleX: 0 },
    show:   { scaleX: 1, transition: { duration: 1.8, ease, delay } },
  };
}

export default function HomePage({ events, navigate }) {
  const [jakartaTime, setJakartaTime] = useState(new Date());
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const carouselRef = useRef(null);

  // Desktop shows 2, mobile shows up to 6
  const sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
  const upcoming = isMobile ? sortedEvents.slice(0, 6) : sortedEvents.slice(0, 2);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile || !carouselRef.current) return;
    const interval = setInterval(() => {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (scrollLeft >= maxScroll - 5) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: clientWidth * 0.82, behavior: "smooth" });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isMobile, upcoming]);

  useEffect(() => {
    const timer = setInterval(() => setJakartaTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeStr = jakartaTime.toLocaleTimeString("en-US", {
    timeZone: "Asia/Jakarta", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true,
  });

  const hourWIB = parseInt(new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Jakarta', hour: 'numeric', hour12: false
  }).format(jakartaTime));

  const isOpen = hourWIB >= 12 || hourWIB < 2;

  const contactItems = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a03c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          <circle cx="12" cy="9" r="2.5"/>
        </svg>
      ),
      text: "Jl. Boulevard Raya No.5-6 Blok FX1, Kelapa Gading"
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a03c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      text: "Open Daily · 12:00 PM – 2:00 AM"
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a03c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
        </svg>
      ),
      text: "+62 213 887 9271"
    },
  ];

  return (
    <div style={{ paddingTop: 0 }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=Montserrat:wght@300;400;500;600&family=Great+Vibes&family=Cinzel:wght@400;500&family=Josefin+Sans:wght@400;600;700&display=swap');

        /* ── MOBILE FIXES ── */
        @media (max-width: 768px) {
          .events-section-wrapper { padding: 60px 20px !important; }
          .section-description { display: none; }

          .events-grid {
            display: flex !important;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 15px !important;
            padding-bottom: 20px;
            scrollbar-width: none;
          }
          .events-grid::-webkit-scrollbar { display: none; }

          .event-ice-card {
            flex: 0 0 82%;
            scroll-snap-align: center;
            border-radius: 20px !important;
          }

          .card-img-wrapper { height: 200px !important; }
          .card-content-wrapper { padding: 25px !important; }
          .card-title { font-size: 24px !important; margin: 10px 0 8px !important; }
          .card-date { font-size: 11px !important; }

          .status-v-bar { display: none !important; }
          .desktop-logo-wrapper { display: none !important; }
          .mobile-logo-wrapper {
            display: flex !important;
            justify-content: center;
            align-items: center;
            margin-top: 15px !important;
            margin-bottom: -5px !important;
            z-index: 50;
          }

          .logo-text-left {
            font-size: 7.5rem !important;
            text-align: center;
            display: block !important;
            position: relative !important;
            z-index: 999 !important;
            transform: translate(-77%, 22%) !important;
            margin-top: 0 !important;
            margin-right: 0 !important;
            margin-left: 0 !important;
          }

          .logo-text-right {
            margin-top: 0 !important;
            margin-left: 0 !important;
            text-align: center;
            align-items: center;
          }
          .logo-text-right span:first-child { font-size: 2rem !important; }
          .logo-text-right span:last-child  { font-size: 2.8rem !important; }

          .logo-row { flex-direction: column !important; gap: 0 !important; }
          .logo-row > div { width: 140px !important; }

          .hero-cta-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 16px !important;
            width: 100%;
          }
          .lux-btn-solid, .lux-btn-tropical { width: 80% !important; text-align: center !important; }

          section[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; gap: 40px !important; }
          .score-grid { grid-template-columns: 1fr 1fr !important; gap: 10px !important; }
          .events-header { flex-direction: column !important; align-items: flex-start !important; gap: 24px !important; }
          .about-section { grid-template-columns: 1fr !important; gap: 40px !important; }
          .section-title { font-size: 32px !important; }
          .about-strip { flex-wrap: wrap !important; }
          .about-stat  { flex: 0 0 50% !important; }
          .hero-descriptor-lux { font-size: 9px !important; letter-spacing: 0.12em !important; }
          .hero-scroll-line { height: 20px; }
          .hero-scroll { bottom: 16px; }
        }

        /* ── DESKTOP & GLOBAL ── */
        .mobile-logo-wrapper { display: none; }
        .desktop-logo-wrapper { display: block; width: 235px; }

        .logo-text-left {
          font-family: 'Great Vibes', cursive;
          font-size: 10rem;
          color: #ff3131;
          text-shadow: 0 0 15px rgba(255, 49, 49, 0.8);
          margin-top: 140px;
          margin-right: -105px;
          z-index: 11;
          white-space: nowrap;
        }
        .logo-text-right {
          display: flex;
          flex-direction: column;
          font-family: 'Cinzel', serif;
          color: #d4af37;
          letter-spacing: 0.2rem;
          margin-top: 140px;
          margin-left: -105px;
          z-index: 11;
          text-align: left;
          line-height: 0.9;
        }

        @keyframes waveFloat1 {
          0% { transform: translate(0%,0%) rotate(0deg) scale(1); }
          50% { transform: translate(-8%,12%) rotate(15deg) scale(1.1); }
          100% { transform: translate(0%,0%) rotate(0deg) scale(1); }
        }
        @keyframes waveFloat2 {
          0% { transform: translate(0%,0%) rotate(0deg) scale(1); }
          50% { transform: translate(12%,-8%) rotate(-15deg) scale(1.15); }
          100% { transform: translate(0%,0%) rotate(0deg) scale(1); }
        }
        @keyframes waveFloat3 {
          0% { transform: translate(0%,0%) scale(1); }
          50% { transform: translate(-10%,-10%) scale(0.9); }
          100% { transform: translate(0%,0%) scale(1); }
        }
        @keyframes tropicalShimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes scrollGlow {
          0%, 100% { color: rgba(201,168,76,0.6); text-shadow: 0 0 8px rgba(201,168,76,0.8), 0 0 20px rgba(201,168,76,0.5); }
          33% { color: rgba(255,100,100,1); text-shadow: 0 0 12px #ff3131, 0 0 30px rgba(255,49,49,0.9), 0 0 60px rgba(255,49,49,0.5); }
          66% { color: rgba(255,255,255,1); text-shadow: 0 0 12px #fff, 0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(201,168,76,0.6); }
        }
        @keyframes neonShortage {
          0%,18%,22%,25%,53%,57%,100% { text-shadow: 0 0 10px rgba(212,175,55,0.7), 0 0 20px rgba(212,175,55,0.4); opacity: 1; }
          20%,24%,55% { text-shadow: none; opacity: 0.6; }
        }
        @keyframes arrowPoint {
          0%   { opacity: 0; transform: translateX(-5px) rotate(45deg); }
          50%  { opacity: 1; }
          100% { opacity: 0; transform: translateX(5px) rotate(45deg); }
        }
        @keyframes vividGlow {
          0%,100% { text-shadow: 0 0 8px rgba(212,175,55,0.3); color: #d4af37; }
          50% { text-shadow: 0 0 15px #ff3131, 0 0 30px rgba(255,49,49,0.6); color: #fff; }
        }

        .hero-rule { height: 0.5px; background: linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.55) 25%, rgba(201,168,76,0.55) 75%, transparent 100%); transform-origin: center; }
        .hero-location-lux { font-family: 'Montserrat', sans-serif; font-weight: 500; font-size: 12px; letter-spacing: 0.3em; text-transform: uppercase; color: rgba(201,168,76,1); }
        .hero-descriptor-lux { font-family: 'Montserrat', sans-serif; font-weight: 400; font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase; color: rgba(255,255,255,0.85); }

        .lux-btn-solid {
          font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 10.5px; letter-spacing: 0.22em; text-transform: uppercase;
          padding: 16px 44px; border-radius: 100px;
          background: linear-gradient(135deg, #1b3d28 0%, #2e6644 40%, #1e4a30 100%);
          color: #d4af5a; border: 1px solid rgba(180,140,50,0.55); cursor: pointer; position: relative; overflow: hidden;
          transition: transform 0.35s ease, box-shadow 0.4s ease, border-color 0.4s ease;
          box-shadow: 0 0 0 0 rgba(180,140,50,0), inset 0 1px 0 rgba(255,220,120,0.12);
        }
        .lux-btn-solid::before { content: ''; position: absolute; inset: 0; background: linear-gradient(105deg, transparent 20%, rgba(255,220,120,0.18) 40%, rgba(255,240,160,0.28) 50%, rgba(255,220,120,0.18) 60%, transparent 80%); background-size: 200% auto; background-position: -200% center; border-radius: inherit; }
        .lux-btn-solid:hover { transform: translateY(-3px); border-color: rgba(212,175,90,0.85); box-shadow: 0 8px 28px rgba(30,80,45,0.55), 0 0 20px rgba(180,140,50,0.20), inset 0 1px 0 rgba(255,220,120,0.18); }
        .lux-btn-solid:hover::before { animation: tropicalShimmer 0.8s ease forwards; }

        .lux-btn-tropical {
          font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 10.5px; letter-spacing: 0.22em; text-transform: uppercase;
          padding: 15px 52px 15px 44px; border-radius: 0px; background: transparent; color: rgba(220,140,60,0.9);
          border-top: 1px solid rgba(220,140,60,0.55); border-bottom: 1px solid rgba(220,140,60,0.55); border-left: none; border-right: none;
          cursor: pointer; position: relative; overflow: hidden;
          transition: color 0.4s ease, padding-right 0.4s ease, transform 0.35s ease, border-color 0.4s ease; box-shadow: none;
        }
        .lux-btn-tropical::before { content: ''; position: absolute; left: 0; right: 0; height: 1px; background: rgba(220,140,60,0); transition: background 0.4s ease, box-shadow 0.4s ease; z-index: 0; pointer-events: none; top: 0; }
        .lux-btn-tropical::after { content: '🌿'; position: absolute; right: 14px; top: 50%; transform: translateY(-50%) rotate(0deg) scale(0.7); font-size: 14px; opacity: 0; transition: transform 0.5s ease, opacity 0.4s ease; z-index: 2; }
        .lux-btn-tropical span { position: relative; z-index: 2; }
        .lux-btn-tropical:hover { color: #fde8c0; padding-right: 52px; border-top: 1px solid rgba(220,140,60,1); border-bottom: 1px solid rgba(220,140,60,1); transform: translateY(-2px); filter: drop-shadow(0 -1px 6px rgba(220,140,60,0.7)) drop-shadow(0 1px 6px rgba(220,140,60,0.7)); }
        .lux-btn-tropical:hover::after { opacity: 1; transform: translateY(-50%) rotate(25deg) scale(1.15); }

        body .btn-text-only { all: unset; font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 12px; letter-spacing: 4px; text-transform: uppercase; cursor: pointer; display: inline-flex; align-items: center; gap: 15px; color: #d4af37; background: transparent !important; transition: all 0.4s ease; padding: 10px 0; }
        body .btn-text-only .arrows-lead { display: inline-flex; align-items: center; gap: 5px; }
        body .btn-text-only .arrows-lead i { box-sizing: border-box; display: block; width: 7px; height: 7px; border-top: 2px solid rgba(212,175,55,0.9); border-right: 2px solid rgba(212,175,55,0.9); transform: rotate(45deg); opacity: 0; animation: arrowPoint 2.2s cubic-bezier(0.4,0,0.2,1) infinite; }
        body .btn-text-only .arrows-lead i:nth-child(1) { animation-delay: 0s; }
        body .btn-text-only .arrows-lead i:nth-child(2) { animation-delay: 0.3s; }
        body .btn-text-only .arrows-lead i:nth-child(3) { animation-delay: 0.6s; }
        body .btn-text-only:hover span { animation: vividGlow 1.5s ease-in-out infinite; }
        body .btn-text-only:hover .arrows-lead i { border-color: #ff3131 !important; filter: drop-shadow(0 0 5px #ff3131); }
        body .btn-text-only:active { transform: scale(0.95); }

        .flicker-text { animation: neonShortage 4s infinite; }

        .status-widget { display: flex; flex-direction: column; align-items: center; gap: 8px; margin-bottom: 15px; }
        .status-badge { display: flex; align-items: center; gap: 6px; font-family: 'Montserrat', sans-serif; font-size: 9px; font-weight: 600; letter-spacing: 0.2em; color: ${isOpen ? '#4ade80' : '#ff3131'}; }
        .status-dot { width: 4px; height: 4px; border-radius: 50%; background: currentColor; box-shadow: 0 0 8px currentColor; }
        .status-time { font-family: 'Montserrat', sans-serif; font-size: 10px; letter-spacing: 0.3em; color: rgba(255,255,255,0.4); }
        .status-v-bar { width: 1px; height: 50px; background: linear-gradient(to bottom, #c9a84c 0%, transparent 100%); margin-top: 10px; margin-bottom: 5px; }
      `}</style>

      <div className="hero" style={{ overflow: "hidden", position: "relative", background: "#07050d", minHeight: "100vh", marginTop: 0 }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 140% 100% at 50% 100%, #0c1c12 0%, #07050d 45%, #1c1205 100%)", zIndex: 0 }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-20%", left: "-10%", width: "75vw", height: "75vw", background: "radial-gradient(ellipse at center, rgba(12,28,18,0.85) 0%, transparent 60%)", filter: "blur(90px)", animation: "waveFloat1 22s ease-in-out infinite", zIndex: 1, pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "10%", right: "-20%", width: "85vw", height: "85vw", background: "radial-gradient(ellipse at center, rgba(28,18,5,0.75) 0%, transparent 60%)", filter: "blur(100px)", animation: "waveFloat2 28s ease-in-out infinite", zIndex: 1, pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "30%", left: "25%", width: "60vw", height: "60vw", background: "radial-gradient(ellipse at center, rgba(7,5,13,0.9) 0%, transparent 60%)", filter: "blur(80px)", animation: "waveFloat3 18s ease-in-out infinite", zIndex: 1, pointerEvents: "none" }} />

        <motion.div initial="hidden" animate="show" style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 10, textAlign: "center", padding: "0 24px" }}>
          <motion.div variants={fadeUp(0.1, 1.2)} className="status-widget">
            <div className="status-badge"><span className="status-dot" />{isOpen ? "WE ARE OPEN" : "CLOSED"}</div>
            <div className="status-time" style={{ fontSize: '14px', color: '#fff', fontWeight: 500 }}>{timeStr} WIB</div>
            <div className="status-time" style={{ fontSize: '11px', opacity: 0.6, letterSpacing: '0.2em' }}>Open Daily · 12PM – 2AM</div>
            <div className="status-v-bar" />
            <div className="mobile-logo-wrapper"><HeroLogo /></div>
          </motion.div>

          <motion.div variants={fadeUp(0.2, 1.2)} className="hero-location-lux" style={{ marginBottom: '20px' }}>Kelapa Gading, Jakarta</motion.div>

          <div className="logo-row" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
            <motion.div variants={fadeUp(0.7, 1.5)} className="logo-text-left" style={{ rotate: -5 }}>Ibza's</motion.div>
            <motion.div variants={fadeUp(0.75, 1.8)} className="desktop-logo-wrapper"><HeroLogo /></motion.div>
            <motion.div variants={fadeUp(0.8, 1.5)} className="logo-text-right">
              <span className="flicker-text" style={{ fontSize: "4rem", fontWeight: "500" }}>BAR</span>
              <span style={{ fontSize: "5.6rem", fontWeight: "400" }}>LOUNGE</span>
            </motion.div>
          </div>

          <div style={{ height: "16px" }} />

          <motion.div variants={fadeUp(1.3, 1.2)} className="hero-descriptor-lux" style={{ marginTop: '16px' }}>
            Bar &nbsp;·&nbsp; Lounge &nbsp;·&nbsp; Rooftop Cocktails &nbsp;·&nbsp; Live Music
          </motion.div>

          <motion.div variants={fadeUp(1.6, 1.2)} className="hero-cta-row" style={{ display: "flex", gap: 14, marginTop: 28 }}>
            <button className="lux-btn-solid" onClick={() => navigate("events")}>Upcoming Events</button>
            <button className="lux-btn-tropical" onClick={() => navigate("shop")}><span>Wine &amp; Liquor Shop</span></button>
          </motion.div>
        </motion.div>

        <motion.div className="hero-scroll" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6, duration: 1.4 }} style={{ zIndex: 10, position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: 8.5, letterSpacing: "0.38em", animation: "scrollGlow 2.5s ease-in-out infinite" }}>
          <div className="hero-scroll-line" />
          Scroll
        </motion.div>
      </div>

      {/* ── Stats strip ── */}
      <div className="about-strip">
        {[["21.8K","Instagram Followers"],["7.6","Overall Rating"],["8.5","Service Score"],["2 Floors","Of Atmosphere"]].map(([num, label]) => (
          <div key={label} className="about-stat">
            <div className="stat-num">{num}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>

      <style>{`
        .ice-card { transition: backdrop-filter 0.6s ease, background 0.6s ease, border-color 0.6s ease, box-shadow 0.6s ease !important; }
        .ice-card:hover { background: rgba(255,255,255,0.25) !important; backdrop-filter: blur(60px) saturate(130%) !important; border-color: rgba(255,255,255,0.6) !important; box-shadow: 0 12px 40px 0 rgba(0,0,0,0.35), inset 0 0 20px 5px rgba(255,255,255,0.3) !important; }
      `}</style>

      {/* ── About Section ── */}
      <section className="about-section" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div>
          <div className="section-eyebrow">About Us</div>
          <h2 className="section-title">More Than a Bar.<br /><em style={{ fontStyle: "italic", color: "var(--gold)" }}>An Experience.</em></h2>
          <div className="divider" />
          <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.7, marginBottom: 20 }}>
            Ibza's Bar and Lounge is Kelapa Gading's most vibrant destination — a two-floor escape where great food, world-class drinks, and electric live music come together.
          </p>
          <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.7, marginBottom: 32 }}>
            From quiet conversations on the ground floor to rooftop cocktails under the Jakarta sky, every corner of Ibza's is designed to make you feel alive.
          </p>

          {/* ── Contact info — Josefin Sans + SVG icons ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {contactItems.map(({ icon, text }) => (
              <div key={text} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(201,160,60,0.30)", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(201,160,60,0.06)", marginTop: 2 }}>
                  {icon}
                </div>
                <span style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 600, fontSize: 15, letterSpacing: "0.06em", color: "rgba(240,234,216,0.88)", lineHeight: 1.55, paddingTop: 7 }}>
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Score Cards ── */}
        <div className="score-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 15 }}>
          {[{label:"Services",score:8.5},{label:"Ambiance",score:8},{label:"Prices",score:8},{label:"Drinks",score:7.5},{label:"Safety",score:7.5},{label:"Music",score:7}].map(({ label, score }) => (
            <div key={label} className="ice-card" style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(30px) saturate(160%)", WebkitBackdropFilter: "blur(30px) saturate(160%)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "12px", padding: "28px 24px", cursor: "pointer", boxShadow: "0 8px 32px 0 rgba(0,0,0,0.3), inset 0 0 12px 2px rgba(255,255,255,0.15)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)" }} />
              <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 10, fontWeight: 600 }}>{label}</div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 36, color: "var(--gold)", lineHeight: 1 }}>{score}</div>
              <div style={{ marginTop: 12, height: 3, background: "rgba(255,255,255,0.1)", borderRadius: 2 }}>
                <div style={{ width: `${score * 10}%`, height: "100%", background: "var(--gold)", borderRadius: 2, boxShadow: "0 0 10px var(--gold)" }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .event-ice-card { transition: all 0.5s cubic-bezier(0.25,0.46,0.45,0.94) !important; position: relative; overflow: hidden; }
        .event-ice-card:hover { background: rgba(255,255,255,0.22) !important; backdrop-filter: blur(45px) saturate(140%) !important; border-color: rgba(255,255,255,0.6) !important; box-shadow: 0 20px 40px rgba(0,0,0,0.5), inset 0 0 25px 5px rgba(255,255,255,0.3) !important; }
        .glow-tag { font-size: 11px; letter-spacing: 2px; font-weight: 800; text-transform: uppercase; color: #fff; background: rgba(201,160,60,0.3); border: 1px solid var(--gold); padding: 6px 14px; border-radius: 4px; text-shadow: 0 0 8px rgba(255,255,255,0.8), 0 0 15px var(--gold); box-shadow: 0 0 15px rgba(201,160,60,0.4), inset 0 0 8px rgba(201,160,60,0.2); display: inline-block; }
        .title-decoration { display: flex; flex-direction: column; gap: 4px; margin-top: 16px; margin-bottom: 24px; }
        .line-1 { width: 80px; height: 2px; background: var(--gold); }
        .line-2 { width: 50px; height: 1.5px; background: rgba(201,160,60,0.5); }
        .line-3 { width: 30px; height: 1px; background: rgba(201,160,60,0.3); }
      `}</style>

      {/* ── Events Section ── */}
      {upcoming.length > 0 && (
        <section className="events-section-wrapper" style={{ padding: "100px 40px", background: "transparent" }}>
          <div className="events-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60 }}>
            <div style={{ maxWidth: "600px" }}>
              <div className="section-eyebrow" style={{ fontSize: 14, letterSpacing: '4px', marginBottom: 12 }}>WHAT'S ON</div>
              <h2 className="section-title" style={{ fontSize: 52, marginBottom: 0 }}>
                Upcoming <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Events</em>
              </h2>
              <div className="title-decoration">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
              </div>
              <p className="section-description" style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginTop: 10 }}>
                Experience the pulse of Kelapa Gading through our curated lineup of world-class DJs and mesmerizing live performances.
              </p>
            </div>
            <button className="btn-text-only" onClick={() => navigate('events')} style={{ paddingBottom: 20 }}>
              <div className="arrows-lead"><i></i><i></i><i></i></div>
              <span style={{ fontSize: 13, letterSpacing: 2 }}>VIEW ALL EVENTS</span>
            </button>
          </div>

          <div className="events-grid" ref={carouselRef} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30 }}>
            {upcoming.map((ev) => (
              <div key={ev.id} className="event-ice-card" style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(25px)", WebkitBackdropFilter: "blur(25px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "24px", cursor: "pointer", overflow: "hidden" }} onClick={() => navigate("events")}>
                <div className="card-img-wrapper" style={{ overflow: 'hidden', height: 280 }}>
                  <img src={ev.image} alt={ev.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="card-content-wrapper" style={{ padding: "40px" }}>
                  <div className="glow-tag">{ev.tag}</div>
                  <div className="card-title" style={{ fontFamily: "var(--font-serif)", fontSize: 34, color: "#fff", margin: "20px 0 12px", fontWeight: 700 }}>{ev.title}</div>
                  <div className="card-date" style={{ fontSize: 14, letterSpacing: 2, textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, opacity: 0.9 }}>
                    {new Date(ev.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} · {ev.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Shop CTA ── */}
      <section style={{ textAlign: "center", padding: "120px 48px" }}>
        <div className="section-eyebrow" style={{ justifyContent: "center", display: "flex", gap: 16, alignItems: "center" }}>
          <span style={{ width: 60, height: "0.5px", background: "var(--gold)", display: "block" }} />
          Wine & Liquor
          <span style={{ width: 60, height: "0.5px", background: "var(--gold)", display: "block" }} />
        </div>
        <h2 className="section-title" style={{ margin: "0 auto 20px" }}>
          Shop Premium<br /><em style={{ fontStyle: "italic", color: "var(--gold)" }}>Spirits</em>
        </h2>
        <p style={{ fontSize: 14, color: "var(--muted)", maxWidth: 480, margin: "0 auto 48px", lineHeight: 1.7 }}>
          Order from our curated selection of wines, champagnes, and spirits — delivered via WhatsApp. Open daily 4PM–12AM.
        </p>
        <button className="lux-btn-tropical" onClick={() => navigate("shop")}><span>Browse the Shop</span></button>
      </section>
    </div>
  );
}