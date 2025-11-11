// app/components/Button.jsx
export default function Button({
    children,
    variant = "primary",
    className = "",
    type = "button",
    ...props
}) {
    // Define base styles
    const baseStyles =
        "px-7 py-2 rounded-lg font-medium focus:outline-none focus:ring transition";

    // Define color variants
    const variants = {
        primary: "bg-[#000022] text-white",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-300",
        outline:
            "border border-gray-400 text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
    };

    // Combine all styles
    const styles = `${baseStyles} ${variants[variant]} ${className}`;

    return (
        <button type={type} className={styles} {...props}>
            {children}
        </button>
    );
}
