export default function Button({
  children,
  variant = "primary",
  className = "",
}) {
  const base =
    "px-7 py-3 rounded-2xl font-medium transition";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-white/40 text-white",
    dark: "bg-neutral-900 text-white",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}