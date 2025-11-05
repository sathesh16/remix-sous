import React from "react";

export default function ConfirmDialog({ open, title, message, onCancel, onConfirm, confirmLabel = "Confirm", cancelLabel = "Cancel" }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-[350px] space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                <p className="text-gray-700">{message}</p>

                <div className="flex justify-end gap-3">
                    <button
                        className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                        onClick={onCancel}
                    >
                        {cancelLabel}
                    </button>

                    <button
                        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                        onClick={onConfirm}
                    >
                        {confirmLabel}
                    </button>
                </div>
            </div>
        </div>
    );
}
    