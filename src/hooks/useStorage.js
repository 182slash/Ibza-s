import { useState, useEffect } from "react";
import { DEFAULT_PRODUCTS, DEFAULT_EVENTS } from "../constants/data";

/**
 * Loads products and events from window.storage on mount,
 * and provides save helpers that update both state and storage.
 */
export function useStorage() {
  const [products, setProducts] = useState(DEFAULT_PRODUCTS);
  const [events, setEvents] = useState(DEFAULT_EVENTS);

  // Hydrate from persisted storage on first render
  useEffect(() => {
    (async () => {
      try {
        const p = await window.storage.get("ibzas_products");
        if (p) setProducts(JSON.parse(p.value));

        const e = await window.storage.get("ibzas_events");
        if (e) setEvents(JSON.parse(e.value));
      } catch {
        // Storage unavailable — fall back to defaults silently
      }
    })();
  }, []);

  const saveProducts = async (updated) => {
    setProducts(updated);
    try {
      await window.storage.set("ibzas_products", JSON.stringify(updated));
    } catch {}
  };

  const saveEvents = async (updated) => {
    setEvents(updated);
    try {
      await window.storage.set("ibzas_events", JSON.stringify(updated));
    } catch {}
  };

  return { products, events, saveProducts, saveEvents };
}
