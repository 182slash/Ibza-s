import React from 'react';
import logoImg from '../assets/ibzas-logo.png'; 

export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <style>{`
        .footer {
          position: relative;
          background: linear-gradient(
            135deg,
            rgba(180, 220, 255, 0.06) 0%,
            rgba(220, 240, 255, 0.04) 40%,
            rgba(160, 210, 255, 0.07) 100%
          );
          backdrop-filter: blur(48px) saturate(180%) brightness(1.08);
          -webkit-backdrop-filter: blur(48px) saturate(180%) brightness(1.08);
          border-top: 1px solid rgba(200, 230, 255, 0.35);
          padding: 32px 40px 0 40px; 
          overflow: hidden;
          box-shadow:
            inset 0 1px 0 rgba(220, 240, 255, 0.45),
            inset 0 0 80px rgba(180, 220, 255, 0.04);
          color: white;
          font-family: 'DM Sans', sans-serif;
        }

        .footer::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 80% 60% at 50% -20%,
            rgba(180, 220, 255, 0.07) 0%,
            transparent 70%
          );
          pointer-events: none;
        }

        /* ── LOGO ── */
        .footer-logo-img {
          height: 110px; 
          width: auto;
          margin-bottom: 12px;
          display: block;
        }

        /* ── SLOGAN — Premium Lounge Style ── */
.footer-about {
  /* Alex Brush is sleek, Allura is very classy, Heritage is a great fallback */
  font-family: 'Alex Brush', 'Allura', 'Petit Formal Script', cursive;
  font-size: 24px; 
  line-height: 1.1;
  letter-spacing: 0.8px;
  color: rgba(255, 255, 255, 0.95);
  max-width: 750px;
  margin-bottom: 24px;
  font-weight: 400;
  /* Adds a subtle "glow" to make the calligraphy pop against the glass background */
  text-shadow: 0 0 20px rgba(232, 213, 163, 0.2); 
}

        /* ── HEADINGS ── */
        .footer-heading {
          font-family: 'Dancing Script', 'Pinyon Script', 'Great Vibes', cursive;
          font-weight: 600;
          font-size: 24px;
          margin-bottom: 14px;
          color: #e8d5a3;
          letter-spacing: 0.5px;
          text-transform: none;
        }

        .footer-link {
          display: block;
          font-size: 14.5px;
          margin-bottom: 8px;
          cursor: pointer;
          transition: color 0.2s ease;
          color: rgba(255, 255, 255, 0.65);
        }
        .footer-link:hover { color: #e8d5a3; }

        .footer-info {
          display: block;
          font-size: 14.5px;
          margin-bottom: 6px;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.4;
        }

        /* ── SOCIAL BUTTONS ── */
        .social-container {
          display: flex;
          gap: 12px;
          margin-top: 10px;
        }

        .btn-social-icon {
          position: relative;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .btn-social-icon svg {
          width: 18px;
          height: 18px;
          fill: white;
          z-index: 2;
        }

        .btn-social-icon:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.15);
        }

        .btn-whatsapp:hover { box-shadow: 0 0 15px #25D366; border-color: #25D366; }
        .btn-instagram:hover { box-shadow: 0 0 15px #E1306C; border-color: #E1306C; }
        .btn-facebook:hover { box-shadow: 0 0 15px #1877F2; border-color: #1877F2; }
        .btn-youtube:hover { box-shadow: 0 0 15px #FF0000; border-color: #FF0000; }
        .btn-x:hover { box-shadow: 0 0 15px #ffffff; border-color: #ffffff; }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 44px;
        }

        /* ── BOTTOM STRIP ── */
        .footer-strip {
          position: relative;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.13) 0%,
            rgba(220, 235, 255, 0.18) 40%,
            rgba(255, 255, 255, 0.13) 100%
          );
          backdrop-filter: blur(20px) saturate(180%) brightness(1.4);
          -webkit-backdrop-filter: blur(20px) saturate(180%) brightness(1.4);
          border-top: 1px solid rgba(255, 255, 255, 0.35);
          padding: 12px 40px;
          margin: 24px -40px 0 -40px;
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.75);
        }

        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr; gap: 30px; }
          .footer-strip { flex-direction: column; gap: 8px; text-align: center; }
          .footer-about { font-size: 28px; } /* Slightly smaller for mobile */
        }
      `}</style>

      <div className="footer-grid">
        <div>
          <img src={logoImg} alt="Ibzas" className="footer-logo-img" />
          <p className="footer-about">
            "Two floors of atmosphere, one unforgettable night"
          </p>

          <div className="social-container">
            <button className="btn-social-icon btn-whatsapp" onClick={() => window.open("https://wa.me/6287789163072", "_blank")}>
              <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </button>
            <button className="btn-social-icon btn-instagram" onClick={() => window.open("https://www.instagram.com/ibzas_bar_kelapagading/", "_blank")}>
              <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.474 1.38.894.42.42.678.82.894 1.38.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.474.96-.894 1.38-.42.42-.82.678-1.38.894-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.474-1.38-.894-.42-.42-.678-.82-.894-1.38-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.474-.96.894-1.38.42-.42.82-.678 1.38-.894.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.132 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126s1.384 1.078 2.126 1.384c.766.296 1.636.499 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384s1.078-1.384 1.384-2.126c.296-.765.499-1.636.558-2.913.058-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126S20.65.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </button>
            <button className="btn-social-icon btn-facebook" onClick={() => window.open("https://facebook.com", "_blank")}>
              <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </button>
            <button className="btn-social-icon btn-x" onClick={() => window.open("https://x.com", "_blank")}>
              <svg viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
            </button>
            <button className="btn-social-icon btn-youtube" onClick={() => window.open("https://youtube.com", "_blank")}>
              <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </button>
          </div>
        </div>

        <div>
          <div className="footer-heading">Navigate</div>
          {[
            ["home",   "Home"],
            ["shop",   "Shop"],
            ["events", "Events"],
            ["admin",  "Admin"],
          ].map(([pg, label]) => (
            <span key={pg} className="footer-link" onClick={() => navigate(pg)}>
              {label}
            </span>
          ))}
        </div>

        <div>
          <div className="footer-heading">Contact</div>
          <span className="footer-info">Jl. Boulevard Raya No.5-6 Blok FX1, Kelapa Gading, Jakarta Utara 14240</span>
          <span className="footer-info" style={{ marginTop: 8 }}>+62 213 887 9271</span>
          <span className="footer-info">ibzasbarandlounge@gmail.com</span>
          <span className="footer-info" style={{ marginTop: 8 }}>Open Daily · 12PM – 2AM</span>
        </div>
      </div>

      <div className="footer-strip">
        <div>© 2025 Ibza's Bar and Lounge</div>
        <div>Rating: 7.6 / 10 · Very Good</div>
      </div>
    </footer>
  );
}