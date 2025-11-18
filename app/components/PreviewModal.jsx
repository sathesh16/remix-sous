import { Link } from '@remix-run/react';
import React from 'react'
import CopyLinkButton from './CopyLinkButton';



export default function PreviewModal({ open, onClose, data, screen, setScreen, screenNumber }) {
    if (!open) return null;
    const hasError = data.some(item => item.error);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 regular-text"
            onClick={onClose} // ✅ Close when clicking outside
            onKeyDown={(e) => {
                if (e.key === "Escape") onClose(); // ✅ Close on ESC
            }}
            tabIndex={0}
        >
            <div className="w-[1080px] p-8 max-h-[80vh] min-h-[70vh] overflow-y-auto svg-bg bg-[var(--banner-bg-color)]"
                onClick={(e) => e.stopPropagation()} //stop close on click
            >
                {
                    hasError ? (<></>) : (<>
                        <div className="menu-wrapper p-6 pt-12 text-[var(--banner-text-color)] rounded-tr-[50px] rounded-br-[50px]">
                            <div className="flex gap-3 mt-6 justify-end">
                                <button onClick={() => setScreen("screen1")}></button>
                                <button onClick={() => setScreen("screen2")}>next</button>
                            </div>
                            <h2 className="text-4xl bold-text mb-2">
                                THE BRICK
                            </h2>

                            <h6 className="text-2xl regular-text mb-6">Lounge & Bar</h6>

                            <div className="columns-2 gap-x-10 w-full">
                                {data.map(({ category, products }) => (
                                    <div key={category} className="category mb-6 break-inside-avoid">
                                        <h3 className="bold-text text-lg">{category}</h3>

                                        {products.map(prod => (
                                            <div key={prod.id} className="flex gap-[20px] justify-between items-center py-1">
                                                <div className="flex flex-col">
                                                    <span>{prod.name}</span>
                                                    <span>{prod.description}</span>
                                                </div>

                                                <span>{prod.price}</span>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>)
                }
                <div className="menu-wrapper p-6 pt-32 text-[var(--banner-text-color)] rounded-tr-[50px] rounded-br-[50px]">
                    <div className="flex justify-start mt-6">
                        <CopyLinkButton screenNumber={screenNumber} />
                    </div>
                </div>
            </div>
        </div>
    );
}