import { useState } from "react";
import { ADMIN_PASS } from "../constants/data";

/**
 * Encapsulates all admin-related state:
 * authentication, modal open/close, form editing,
 * and CRUD operations for products and events.
 */
export function useAdmin({ products, events, saveProducts, saveEvents, showToast }) {
  const [adminAuth, setAdminAuth] = useState(false);
  const [loginPass, setLoginPass] = useState("");
  const [loginErr, setLoginErr] = useState("");
  const [modal, setModal] = useState(null); // { type: "product" | "event", data: obj | null }
  const [editForm, setEditForm] = useState({});
  const [adminTab, setAdminTab] = useState("products");

  // ── Auth ──────────────────────────────────────────────────────────────────
  const handleLogin = () => {
    if (loginPass === ADMIN_PASS) {
      setAdminAuth(true);
      setLoginErr("");
    } else {
      setLoginErr("Invalid password. Try ibzas2025");
    }
  };

  // ── Modal helpers ─────────────────────────────────────────────────────────
  const openProductModal = (data = null) => {
    setEditForm(
      data
        ? { ...data }
        : { name: "", category: "", price: "", desc: "", badge: "" }
    );
    setModal({ type: "product", data });
  };

  const openEventModal = (data = null) => {
    setEditForm(
      data
        ? { ...data }
        : { title: "", date: "", time: "", desc: "", image: "", tag: "" }
    );
    setModal({ type: "event", data });
  };

  const closeModal = () => setModal(null);

  // ── Product CRUD ──────────────────────────────────────────────────────────
  const saveProduct = () => {
    if (modal.data) {
      saveProducts(
        products.map((p) =>
          p.id === modal.data.id
            ? { ...p, ...editForm, price: Number(editForm.price) }
            : p
        )
      );
    } else {
      saveProducts([
        ...products,
        { ...editForm, id: Date.now(), price: Number(editForm.price) },
      ]);
    }
    closeModal();
    showToast("Product saved!");
  };

  const deleteProduct = (id) => {
    saveProducts(products.filter((p) => p.id !== id));
    showToast("Deleted.");
  };

  // ── Event CRUD ────────────────────────────────────────────────────────────
  const saveEvent = () => {
    if (modal.data) {
      saveEvents(
        events.map((e) =>
          e.id === modal.data.id ? { ...e, ...editForm } : e
        )
      );
    } else {
      saveEvents([...events, { ...editForm, id: Date.now() }]);
    }
    closeModal();
    showToast("Event saved!");
  };

  const deleteEvent = (id) => {
    saveEvents(events.filter((e) => e.id !== id));
    showToast("Deleted.");
  };

  return {
    // auth
    adminAuth,
    setAdminAuth,
    loginPass,
    setLoginPass,
    loginErr,
    handleLogin,
    // tab
    adminTab,
    setAdminTab,
    // modal
    modal,
    openProductModal,
    openEventModal,
    closeModal,
    // form
    editForm,
    setEditForm,
    // CRUD
    saveProduct,
    deleteProduct,
    saveEvent,
    deleteEvent,
  };
}
