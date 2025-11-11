// AdminPanelLink.jsx
import { Link, useLocation } from "@remix-run/react";
import { Settings } from "lucide-react";
import clsx from "clsx";

export default function AdminPanelLink({
    to,
    icon: Icon = Settings,
    children,
    className,
    ...props
}) {
    const { pathname } = useLocation();
    const isActive = pathname === to;

    // If user passes icon="none", treat as no icon
    const showIcon = Icon !== "none";

    return (
        <Link
            to={to}
            className={clsx(
                "flex items-center gap-3 px-6 py-4 transition-colors duration-200",
                isActive ? "border-l border-gray-300 text-white" : "text-gray-300 hover:bg-gray-700",
                className
            )}
            {...props}
        >
            {showIcon && <Icon className="w-5 h-5" />}
            <span>{children}</span>
        </Link>
    );
}

