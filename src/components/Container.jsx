export default function Container({
  children,
  className = "",
}) {
  return (
    <div className={`container mx-auto px-6 py-6 ${className}`}>
      {children}
    </div>
  );
}