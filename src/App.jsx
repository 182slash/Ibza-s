import { useState } from "react";

import Nav          from "./components/Nav";
import Footer       from "./components/Footer";
import Toast        from "./components/Toast";
import CartDrawer   from "./components/CartDrawer";
import AdminModal   from "./components/AdminModal";

import HomePage     from "./pages/HomePage";
import ShopPage     from "./pages/ShopPage";
import EventsPage   from "./pages/EventsPage";
import LoginPage    from "./pages/LoginPage";
import AdminPage    from "./pages/AdminPage";

import { useCart }    from "./hooks/useCart";
import { useStorage } from "./hooks/useStorage";
import { useAdmin }   from "./hooks/useAdmin";

export default function App() {
  // ── Routing ──────────────────────────────────────────────────────────────
  const [page, setPage] = useState("home");
  const navigate = (pg) => { setPage(pg); window.scrollTo(0, 0); };

  // ── Toast ─────────────────────────────────────────────────────────────────
  const [toast, setToast] = useState("");
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  // ── Cart drawer ───────────────────────────────────────────────────────────
  const [cartOpen, setCartOpen] = useState(false);

  // ── Shop filter ───────────────────────────────────────────────────────────
  const [filter, setFilter] = useState("All");

  // ── Custom hooks ──────────────────────────────────────────────────────────
  const { cart, addToCart, updateQty, clearCart, cartTotal, cartCount } =
    useCart();

  const { products, events, saveProducts, saveEvents } = useStorage();

  const admin = useAdmin({ products, events, saveProducts, saveEvents, showToast });

  // Derived shop data
  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const filteredProducts =
    filter === "All" ? products : products.filter((p) => p.category === filter);

  // ── Cart addToCart wrapper (with toast) ───────────────────────────────────
  const handleAddToCart = (product) => {
    addToCart(product);
    showToast(`${product.name} added to cart`);
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="grain">
      {/* ── FIX: Pushes content below the fixed Navbar ── */}
      <style>{`
        .main-content-wrapper {
          padding-top: 0px; /* Matches Desktop Nav height */
        }
        @media (max-width: 768px) {
          .main-content-wrapper {
            padding-top: 0px; /* Matches Mobile Nav height */
          }
        }
      `}</style>

      {/* Global nav */}
      <Nav
        page={page}
        navigate={navigate}
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
        onCartClose={() => setCartOpen(false)}
      />

      {/* ── Pages wrapped in offset container ── */}
      <div className="main-content-wrapper">
        {page === "home" && (
          <HomePage events={events} navigate={navigate} />
        )}

        {page === "shop" && (
          <ShopPage
            products={filteredProducts}
            categories={categories}
            filter={filter}
            setFilter={setFilter}
            addToCart={handleAddToCart}
          />
        )}

        {page === "events" && (
          <EventsPage events={events} />
        )}

        {page === "admin" && (
          admin.adminAuth ? (
            <AdminPage
              products={products}
              events={events}
              adminTab={admin.adminTab}
              setAdminTab={admin.setAdminTab}
              openProductModal={admin.openProductModal}
              openEventModal={admin.openEventModal}
              deleteProduct={admin.deleteProduct}
              deleteEvent={admin.deleteEvent}
              setAdminAuth={admin.setAdminAuth}
            />
          ) : (
            <LoginPage
              loginPass={admin.loginPass}
              setLoginPass={admin.setLoginPass}
              handleLogin={admin.handleLogin}
              loginErr={admin.loginErr}
            />
          )
        )}
      </div>

      {/* Footer — hidden on admin page */}
      {page !== "admin" && <Footer navigate={navigate} />}

      {/* Cart drawer */}
      {cartOpen && (
        <CartDrawer
          cart={cart}
          cartTotal={cartTotal}
          onClose={() => setCartOpen(false)}
          onUpdateQty={updateQty}
          onClear={clearCart}
        />
      )}

      {/* Admin modal (product / event edit) */}
      <AdminModal
        modal={admin.modal}
        editForm={admin.editForm}
        setEditForm={admin.setEditForm}
        onSaveProduct={admin.saveProduct}
        onSaveEvent={admin.saveEvent}
        onClose={admin.closeModal}
      />

      {/* Toast notification */}
      <Toast message={toast} />
    </div>
  );
}