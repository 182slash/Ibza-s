/**
 * Displays a temporary notification banner.
 * Renders nothing when `message` is falsy.
 *
 * @param {{ message: string }} props
 */
export default function Toast({ message }) {
  if (!message) return null;
  return <div className="toast">{message}</div>;
}
