import { useEffect } from "react";

export default function Toast({ message, type = "success", onClose }) {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000); // auto close in 3s
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`
      fixed top-4 right-4 px-4 py-3 rounded shadow-lg z-[10] text-white text-sm animate-fade-in
      ${type === "success" ? "bg-green-600" : type === "warning" ? "bg-orange-500" : "bg-red-600"}

    `}>
            {message}
        </div>
    );
}