import { formatIDR } from "../utils/helpers";

/**
 * Slide-in cart drawer showing current order items, quantities,
 * total, WhatsApp order CTA, and clear-cart option.
 */
export default function CartDrawer({
  cart,
  cartTotal,
  onClose,
  onUpdateQty,
  onClear,
}) {
  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(7,7,7,0.7)",
          zIndex: 940,
        }}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="cart-drawer">
        {/* Header */}
        <div className="cart-header">
          <div className="cart-title">Your Order</div>
          <button className="cart-close" onClick={onClose}>
            ×
          </button>
        </div>

        {/* Items */}
        <div className="cart-items">
          {cart.length === 0 && (
            <div
              style={{
                color: "var(--muted)",
                fontSize: 13,
                padding: "32px 0",
                textAlign: "center",
              }}
            >
              Your cart is empty.
              <br />
              Browse the shop to add items.
            </div>
          )}

          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">{formatIDR(item.price)}</div>
                <div className="cart-qty">
                  <button
                    className="qty-btn"
                    onClick={() => onUpdateQty(item.id, -1)}
                  >
                    −
                  </button>
                  <span style={{ fontSize: 14, color: "var(--text)" }}>
                    {item.qty}
                  </span>
                  <button
                    className="qty-btn"
                    onClick={() => onUpdateQty(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--gold)",
                  fontSize: 16,
                  fontWeight: 700,
                }}
              >
                {formatIDR(item.price * item.qty)}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <div className="cart-total-label">Total</div>
              <div className="cart-total-amt">{formatIDR(cartTotal)}</div>
            </div>

            <button
              className="btn-primary"
              style={{ width: "100%", marginBottom: 10 }}
              onClick={() => {
                const items = cart
                  .map((i) => `${i.qty}x ${i.name}`)
                  .join(", ");
                const msg = `Order from Ibza's Wine & Liquor: ${items} Total: ${formatIDR(cartTotal)}`;
                window.open(
                  `https://wa.me/6287789163072?text=${encodeURIComponent(msg)}`,
                  "_blank"
                );
              }}
            >
              Order via WhatsApp
            </button>

            <button
              className="btn-ghost"
              style={{ width: "100%" }}
              onClick={() => {
                onClear();
                onClose();
              }}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
