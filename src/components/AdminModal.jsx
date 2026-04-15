/**
 * Shared modal used by the admin panel for both product and event editing.
 * Clicking the backdrop closes the modal.
 */
export default function AdminModal({
  modal,
  editForm,
  setEditForm,
  onSaveProduct,
  onSaveEvent,
  onClose,
}) {
  if (!modal) return null;

  const field = (key, value) =>
    setEditForm((f) => ({ ...f, [key]: value }));

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal">
        {modal.type === "product" ? (
          <>
            <div className="modal-title">
              {modal.data ? "Edit Product" : "Add Product"}
            </div>

            {/* Text fields */}
            {[
              ["name",     "Product Name"],
              ["category", "Category"],
              ["price",    "Price (IDR)"],
              ["badge",    "Badge (optional)"],
            ].map(([key, label]) => (
              <div key={key} className="form-group">
                <label className="form-label">{label}</label>
                <input
                  className="form-input"
                  value={editForm[key] || ""}
                  onChange={(e) => field(key, e.target.value)}
                />
              </div>
            ))}

            {/* Description */}
            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea
                className="form-input"
                value={editForm.desc || ""}
                onChange={(e) => field("desc", e.target.value)}
              />
            </div>

            {/* Image URL with live preview */}
            <div className="form-group">
              <label className="form-label">Image URL (optional)</label>
              <input
                className="form-input"
                placeholder="https://..."
                value={editForm.image || ""}
                onChange={(e) => field("image", e.target.value)}
              />
              {editForm.image && (
                <div style={{
                  marginTop: 12,
                  position: "relative",
                  height: 140,
                  overflow: "hidden",
                  border: "0.5px solid var(--border)",
                }}>
                  <img
                    src={editForm.image}
                    alt="Preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "brightness(0.85)",
                    }}
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                  <div style={{
                    position: "absolute",
                    bottom: 8,
                    left: 10,
                    fontSize: 9,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    color: "var(--gold)",
                  }}>
                    Preview
                  </div>
                </div>
              )}
            </div>

            <div className="form-actions">
              <button className="btn-primary" onClick={onSaveProduct}>
                Save Product
              </button>
              <button className="btn-ghost" onClick={onClose}>
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="modal-title">
              {modal.data ? "Edit Event" : "Add Event"}
            </div>

            {[
              ["title", "Event Title"],
              ["tag",   "Tag (e.g. DJ NIGHT)"],
              ["image", "Image URL"],
            ].map(([key, label]) => (
              <div key={key} className="form-group">
                <label className="form-label">{label}</label>
                <input
                  className="form-input"
                  value={editForm[key] || ""}
                  onChange={(e) => field(key, e.target.value)}
                />
              </div>
            ))}

            <div className="form-row">
              {[
                ["date", "Date"],
                ["time", "Time"],
              ].map(([key, label]) => (
                <div key={key} className="form-group">
                  <label className="form-label">{label}</label>
                  <input
                    className="form-input"
                    value={editForm[key] || ""}
                    onChange={(e) => field(key, e.target.value)}
                  />
                </div>
              ))}
            </div>

            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea
                className="form-input"
                value={editForm.desc || ""}
                onChange={(e) => field("desc", e.target.value)}
              />
            </div>

            <div className="form-actions">
              <button className="btn-primary" onClick={onSaveEvent}>
                Save Event
              </button>
              <button className="btn-ghost" onClick={onClose}>
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
