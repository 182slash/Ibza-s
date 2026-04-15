export default function EventsPage({ events }) {
  const sorted = [...events].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Header */}
      <section
        style={{
          borderBottom: "0.5px solid var(--border)",
          padding: "80px 48px 0",
        }}
      >
        <div className="section-eyebrow">Live At Ibza's</div>
        <h1 className="section-title">
          Upcoming{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Events</em>
        </h1>
        <p className="section-sub">
          From live bands to DJ nights and sports screenings — something for
          every night.
        </p>
        <div className="divider" style={{ marginBottom: 0 }} />
      </section>

      {/* Event list */}
      <section style={{ padding: "0 48px 80px" }}>
        <div className="events-list">
          {sorted.map((ev, i) => (
            <div
              key={ev.id}
              className="event-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Image with date badge */}
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="event-img"
                />
                <div
                  style={{
                    position: "absolute",
                    top: 20,
                    left: 20,
                    background: "var(--bg)",
                    border: "0.5px solid var(--border)",
                    padding: "8px 16px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 28,
                      color: "var(--gold)",
                      lineHeight: 1,
                    }}
                  >
                    {new Date(ev.date).getDate()}
                  </div>
                  <div
                    style={{
                      fontSize: 9,
                      letterSpacing: 3,
                      textTransform: "uppercase",
                      color: "var(--muted)",
                    }}
                  >
                    {new Date(ev.date)
                      .toLocaleString("en", { month: "short" })
                      .toUpperCase()}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="event-body">
                <div className="event-tag">{ev.tag}</div>
                <div className="event-title">{ev.title}</div>
                <div className="event-meta">
                  <span>
                    📅{" "}
                    {new Date(ev.date).toLocaleDateString("en-GB", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span>🕒 {ev.time}</span>
                </div>
                <div className="event-desc">{ev.desc}</div>
                <div style={{ marginTop: 8 }}>
                  <button
                    className="btn-primary"
                    onClick={() =>
                      window.open(
                        `https://wa.me/6287789163072?text=I%27d+like+info+about+the+${encodeURIComponent(
                          ev.title
                        )}+event`,
                        "_blank"
                      )
                    }
                  >
                    Reserve a Table
                  </button>
                </div>
              </div>
            </div>
          ))}

          {events.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "100px 0",
                color: "var(--muted)",
                fontSize: 14,
              }}
            >
              No upcoming events. Check back soon.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
