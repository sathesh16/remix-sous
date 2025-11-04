import { Link } from '@remix-run/react';
import { Settings } from 'lucide-react';
import React from 'react'

export default function AdminPanelLink({
    to,
    icon: Icon = Settings, // 👈 Default icon (Settings)
    children,
    ...props
}) {
    return (
        <Link
            to={to}
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 transition-colors duration-200"
            {...props}
        >
            <Icon className="w-5 h-5 text-gray-300" /> {/* dynamic or default */}
            <span className="text-white">{children}</span>
        </Link>
    );
}
