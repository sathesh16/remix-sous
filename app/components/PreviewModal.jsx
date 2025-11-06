import { Link } from '@remix-run/react';
import React from 'react'



export default function PreviewModal({ open, onClose, data, screen, setScreen, screenNumber }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 regular-text"
            onClick={onClose} // ✅ Close when clicking outside
            onKeyDown={(e) => {
                if (e.key === "Escape") onClose(); // ✅ Close on ESC
            }}
            tabIndex={0}
        >
            <div className="w-[1080px] p-8 max-h-[80vh] overflow-y-auto svg-bg bg-[var(--banner-bg-color)]"
                onClick={(e) => e.stopPropagation()} //stop close on click
            >
                <div className="menu-wrapper p-6 pt-12 text-[var(--banner-text-color)] rounded-tr-[50px] rounded-br-[50px]">
                    <div className="flex gap-3 mt-6 justify-end">
                        <button onClick={() => setScreen("screen1")}>Screen 1</button>
                        <button onClick={() => setScreen("screen2")}>Screen 2</button>
                    </div>
                    <h2 className="text-4xl bold-text mb-2">
                        THE BRICK
                    </h2>

                    <h6 className="text-2xl regular-text mb-6">Lounge & Bar</h6>

                    <div className="columns-2 gap-x-10 w-full">
                        {data.map(({ category, products }) => (
                            <div key={category} className="category mb-6 break-inside-avoid">
                                <h3 className="bold-text text-lg pb-1 mb-2">{category}</h3>

                                {products.map(prod => (
                                    <div key={prod.id} className="flex justify-between items-center py-1">
                                        <span>{prod.name}</span>
                                        <span>{prod.price}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end mb-4">
                        <Link
                            to={`/banner/product/1/${screenNumber}`}
                            className="text-blue-600 underline text-sm"
                        >
                            Open in full preview page →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}