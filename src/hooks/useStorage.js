import { useState, useEffect } from "react";
import { DEFAULT_PRODUCTS, DEFAULT_EVENTS } from "../constants/data";

export function useStorage() {
  const [products, setProducts] = useState(() => {
    try {
      const p = localStorage.getItem("ibzas_products");
      return p ? JSON.parse(p) : DEFAULT_PRODUCTS;
    } catch { return DEFAULT_PRODUCTS; }
  });

  const [events, setEvents] = useState(() => {
    try {
      const e = localStorage.getItem("ibzas_events");
      return e ? JSON.parse(e) : DEFAULT_EVENTS;
    } catch { return DEFAULT_EVENTS; }
  });

  const saveProducts = (updated) => {
    setProducts(updated);
    try { localStorage.setItem("ibzas_products", JSON.stringify(updated)); } catch {}
  };

  const saveEvents = (updated) => {
    setEvents(updated);
    try { localStorage.setItem("ibzas_events", JSON.stringify(updated)); } catch {}
  };

  return { products, events, saveProducts, saveEvents };
}