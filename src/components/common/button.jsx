// Reusable Button Component for Hospital Website
// Usage examples:
// <Button text="Book Appointment" />
// <Button text="Learn More" variant="outline" />
// <Button text="Call Now" size="lg" icon="📞" />

export default function Button({
  text = "Click",
  onClick = () => {},
  variant = "primary",
  size = "md",
  fullWidth = false,
  icon = null,
  className = "",
}) {
  // Base button styles
  const baseStyles =
    "flex items-center justify-center font-semibold rounded-md transition-all duration-200";

  // Color variants
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    success: "bg-green-600 text-white hover:bg-green-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  // Button sizes
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-md",
    lg: "px-7 py-3 text-lg",
  };

  // Width
  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
}
