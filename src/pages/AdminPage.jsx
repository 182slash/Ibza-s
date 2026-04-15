import { formatIDR } from "../utils/helpers";

export default function AdminPage({
  products,
  events,
  adminTab,
  setAdminTab,
  openProductModal,
  openEventModal,
  deleteProduct,
  deleteEvent,
  setAdminAuth,
}) {
  return (
    <div className="admin-layout">
      {/* ── Sidebar ── */}
      <div className="admin-sidebar">
        <div
          style={{
            padding: "0 32px 40px",
            borderBottom: "0.5px solid var(--border)",
            marginBottom: 16,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 18,
              color: "var(--gold)",
            }}
          >
            IBZA'S
          </div>
          <div
            style={{
              fontSize: 9,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "var(--muted)",
              marginTop: 4,
            }}
          >
            Admin Portal
          </div>
        </div>

        {[
          ["products", "🍾 Shop Products"],
          ["events",   "🎵 Events"],
        ].map(([tab, label]) => (
          <button
            key={tab}
            className={`admin-nav-item ${adminTab === tab ? "active" : ""}`}
            onClick={() => setAdminTab(tab)}
          >
            {label}
          </button>
        ))}

        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: 0,
            right: 0,
            padding: "0 32px",
          }}
        >
          <button
            className="btn-ghost"
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "9px",
              letterSpacing: "3px",
            }}
            onClick={() => setAdminAuth(false)}
          >
            Log Out
          </button>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="admin-main">
        {adminTab === "products" && (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 8,
              }}
            >
              <div>
                <div className="admin-header">Shop Products</div>
                <div className="admin-sub">
                  {products.length} items in the Wine & Liquor shop
                </div>
              </div>
              <button
                className="btn-primary"
                onClick={() => openProductModal()}
              >
                + Add Product
              </button>
            </div>

            <table className="admin-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Badge</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id}>
                    <td style={{ color: "var(--text)", fontWeight: 500 }}>
                      {p.name}
                    </td>
                    <td>{p.category}</td>
                    <td style={{ color: "var(--gold)" }}>
                      {formatIDR(p.price)}
                    </td>
                    <td>{p.badge || "—"}</td>
                    <td>
                      <div style={{ display: "flex", gap: 8 }}>
                        <button
                          className="btn-ghost"
                          style={{
                            padding: "6px 14px",
                            fontSize: "9px",
                            letterSpacing: "2px",
                          }}
                          onClick={() => openProductModal(p)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn-red"
                          style={{ padding: "6px 14px" }}
                          onClick={() => deleteProduct(p.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {adminTab === "events" && (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 8,
              }}
            >
              <div>
                <div className="admin-header">Events</div>
                <div className="admin-sub">
                  {events.length} events scheduled
                </div>
              </div>
              <button
                className="btn-primary"
                onClick={() => openEventModal()}
              >
                + Add Event
              </button>
            </div>

            <table className="admin-table">
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Tag</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((ev) => (
                  <tr key={ev.id}>
                    <td style={{ color: "var(--text)", fontWeight: 500 }}>
                      {ev.title}
                    </td>
                    <td>
                      {new Date(ev.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td>{ev.time}</td>
                    <td
                      style={{
                        color: "var(--red)",
                        fontSize: 11,
                        letterSpacing: 2,
                      }}
                    >
                      {ev.tag}
                    </td>
                    <td>
                      <div style={{ display: "flex", gap: 8 }}>
                        <button
                          className="btn-ghost"
                          style={{
                            padding: "6px 14px",
                            fontSize: "9px",
                            letterSpacing: "2px",
                          }}
                          onClick={() => openEventModal(ev)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn-red"
                          style={{ padding: "6px 14px" }}
                          onClick={() => deleteEvent(ev.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}
