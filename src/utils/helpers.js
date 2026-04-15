/**
 * Formats a number as Indonesian Rupiah.
 * @param {number} n
 * @returns {string} e.g. "Rp 1.850.000"
 */
export const formatIDR = (n) =>
  `Rp ${Number(n).toLocaleString("id-ID")}`;
