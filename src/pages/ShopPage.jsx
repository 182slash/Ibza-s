import { formatIDR } from "../utils/helpers";

export default function ShopPage({
  products,
  categories,
  filter,
  setFilter,
  addToCart,
}) {
  return (
    <div style={{ paddingTop: 72 }}>
      <section
        style={{
          borderBottom: "0.5px solid var(--border)",
          padding: "80px 48px 64px",
        }}
      >
        {/* Header */}
        <div className="section-eyebrow">Ibza's Wine & Liquor</div>
        <h1 className="section-title">
          Premium{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Spirits</em>
        </h1>
        <p className="section-sub">Order via WhatsApp · Open Daily 4PM–12AM</p>
        <div className="divider" />

        {/* Category filters */}
        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="shop-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">

              {/* ── Product image ── */}
              {product.image ? (
                <div className="product-img-wrap">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-img"
                  />
                  {/* Badge sits over the image when image is present */}
                  {product.badge && (
                    <div className="product-badge product-badge--overlay">
                      {product.badge}
                    </div>
                  )}
                </div>
              ) : (
                /* Badge inline (no image) */
                product.badge && (
                  <div className="product-badge">{product.badge}</div>
                )
              )}

              <div className="product-category">{product.category}</div>
              <div className="product-name">{product.name}</div>
              <div className="product-desc">{product.desc}</div>
              <div className="product-price">{formatIDR(product.price)}</div>

              <div className="product-actions">
                <button
                  className="btn-primary"
                  style={{ flex: 1, padding: "12px" }}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  className="btn-ghost"
                  style={{ padding: "12px 16px", fontSize: "18px" }}
                  onClick={() =>
                    window.open(
                      `https://wa.me/6287789163072?text=Hi+Ibza%27s!+I%27d+like+to+order:+${encodeURIComponent(
                        product.name
                      )}`,
                      "_blank"
                    )
                  }
                >
                  💬
                </button>
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "80px 0",
              color: "var(--muted)",
              fontSize: 14,
            }}
          >
            No products in this category yet.
          </div>
        )}
      </section>

      {/* WhatsApp contact strip */}
      <div
        style={{
          background: "var(--surface)",
          borderTop: "0.5px solid var(--border)",
          padding: "40px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 10,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 8,
            }}
          >
            Order Direct
          </div>
          <div
            style={{ fontFamily: "var(--font-serif)", fontSize: 20, color: "#fff" }}
          >
            WhatsApp: 087 789 163 072
          </div>
        </div>
        <button
          className="btn-primary"
          onClick={() => window.open("https://wa.me/6287789163072", "_blank")}
        >
          Chat on WhatsApp
        </button>
      </div>
    </div>
  );
}
