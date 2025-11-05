import React, { useState } from 'react'

function Toggle({ apiOn = false, onToggle }) {
    const [on, setOn] = useState(apiOn);
    const handleClick = () => {
        setOn(!on);
        if (onToggle) onToggle(!on); // ✅ sends updated value to parent
    };

    return (
        <button
            onClick={handleClick}
            className={`w-20 h-8 rounded-full flex items-center px-1 relative transition-all duration-200 ${on ? "bg-[var(--primary-color)]" : "bg-gray-300"
                }`}
        >
            {/* Text Labels */}
            <span
                className={`absolute left-2 text-sm font-medium transition-all duration-200 ${on ? "text-white" : "text-gray-500"
                    }`}
            >
                On
            </span>
            <span
                className={`absolute right-2 text-sm font-medium transition-all duration-200 ${!on ? "text-gray-600" : "text-[transparent]"
                    }`}
            >
                Off
            </span>

            {/* Circle Toggle */}
            <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-200 ${on ? "translate-x-12" : "translate-x-0"
                    }`}
            ></div>
        </button>
    );
}


export default Toggle
