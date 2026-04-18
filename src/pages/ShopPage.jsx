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
      {/* Mobile-only overrides */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .mobile-compact-section {
            padding: 40px 20px 40px !important;
          }
          .section-title {
            font-size: 28px !important;
            margin-bottom: 8px;
          }
          .filter-bar {
            display: flex;
            overflow-x: auto;
            white-space: nowrap;
            padding-bottom: 12px;
            margin: 0 -20px 24px;
            padding-left: 20px;
            scrollbar-width: none;
          }
          .filter-bar::-webkit-scrollbar { display: none; }
          
          .shop-grid {
            grid-template-columns: 1fr 1fr; /* Two columns for a compact look */
            gap: 12px;
          }
          .product-card {
            padding: 12px !important;
          }
          .product-name {
            font-size: 14px !important;
            line-height: 1.2;
            height: 34px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .product-desc {
            display: none; /* Hide description on mobile for extreme compactness */
          }
          .product-price {
            font-size: 13px !important;
            margin: 8px 0 !important;
          }
          .product-actions {
            flex-direction: column;
            gap: 8px;
          }
          .mobile-footer-strip {
            padding: 32px 20px !important;
            text-align: center;
            justify-content: center !important;
          }
        }
      `}} />

      <section
        className="mobile-compact-section"
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
            <div key={product.id} className="product-card" style={{ padding: "24px", border: "0.5px solid var(--border)" }}>

              {/* ── Product image ── */}
              {product.image ? (
                <div className="product-img-wrap" style={{ marginBottom: 16 }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-img"
                    style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
                  />
                  {product.badge && (
                    <div className="product-badge product-badge--overlay">
                      {product.badge}
                    </div>
                  )}
                </div>
              ) : (
                product.badge && (
                  <div className="product-badge" style={{ marginBottom: 12 }}>{product.badge}</div>
                )
              )}

              <div className="product-category" style={{ fontSize: 10, textTransform: 'uppercase', color: 'var(--muted)' }}>
                {product.category}
              </div>
              <div className="product-name" style={{ fontWeight: 600, margin: '4px 0' }}>{product.name}</div>
              <div className="product-desc" style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 12 }}>{product.desc}</div>
              <div className="product-price" style={{ color: 'var(--gold)', fontWeight: 600, marginBottom: 16 }}>
                {formatIDR(product.price)}
              </div>

              <div className="product-actions" style={{ display: 'flex', gap: 8 }}>
                <button
                  className="btn-primary"
                  style={{ flex: 1, padding: "10px", fontSize: '13px' }}
                  onClick={() => addToCart(product)}
                >
                  Add
                </button>
                <button
                  className="btn-ghost"
                  style={{ padding: "10px 12px", fontSize: "16px" }}
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
        className="mobile-footer-strip"
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
            087 789 163 072
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