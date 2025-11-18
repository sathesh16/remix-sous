import React, { useState } from 'react'
import { Tv2 as ImageIcon, Smartphone as SmartphoneIcon } from "lucide-react";

export default function OrientationToggle({ value, onChange }) {
    const orientation = value; // controlled by parent

    const handleClick = (val) => {
        if (onChange) onChange(val);
    };

    return (
        <div className="flex items-center bg-gray-100 rounded-xl p-1 w-fit">
            {/* Portrait Button */}
            <button
                onClick={() => handleClick("portrait")}
                className={`flex items-center gap-2 px-4 py-2 rounded-bl rounded-tl transition-all ${orientation === "portrait"
                    ? "bg-gray-600  text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-200"
                    }`}
            >
                <SmartphoneIcon size={18} />
            </button>
            {/* Landscape Button */}
            <button
                onClick={() => handleClick("landscape")}
                className={`flex items-center gap-2 px-4 py-2 rounded-br rounded-tr transition-all ${orientation === "landscape"
                    ? "bg-gray-600 text-white"
                    : "bg-bg-gray-200 text-gray-700 hover:bg-gray-200"
                    }`}
            >
                <ImageIcon size={18} />
            </button>
        </div>
    );
}
