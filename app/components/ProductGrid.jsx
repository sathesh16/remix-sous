import { useMemo, useState } from "react";
import Toggle from "./Toggle";
import Button from "./Button";
import Toast from "./Toast";
import PreviewModal from "./PreviewModal";
import useProductsTable from "../hooks/useProductsTable";

export default function ProductsTable() {
    const {
        categories,
        getProductsForCategory,
        handleProductUpdate,
        saveAllUpdates,
        toast,
        dismissToast,
        loading,
        error,
        isSaving,
        previewDataForScreen,
    } = useProductsTable();

    const [showPreviewModal, setShowPreviewModal] = useState(false);
    const [previewScreen, setPreviewScreen] = useState("screen1"); //screen1 or screen2

    const previewData = useMemo(
        () => previewDataForScreen(previewScreen),
        [previewDataForScreen, previewScreen]
    );

    if (loading) {
        return <div className="p-6">Loading products…</div>;
    }

    if (error) {
        return <div className="p-6 text-red-600">{error}</div>;
    }

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="flex justify-end items-center mb-6 pos-top">
                <p className="mr-4">Remember to update before leaving</p>
                <Button onClick={saveAllUpdates} variant="primary" disabled={isSaving}>
                    {isSaving ? "Saving..." : "Update"}
                </Button>
            </div>

            <div className="flex justify-end items-center mb-6">
                <Button
                    variant="secondary"
                    onClick={() => {
                        setPreviewScreen("screen1");
                        setShowPreviewModal(true);
                    }}
                >
                    Preview
                </Button>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-300">
                <table className="min-w-full border-collapse text-sm">
                    {/* Table Head */}
                    <thead className="bg-gray-900 text-white font-semibold">
                        <tr>
                            <th
                                className="p-3 border border-gray-300 text-left"
                            >
                                Category{" "}
                            </th>
                            <th
                                className="p-3 border border-gray-300 text-left"

                            >
                                Product Name{" "}
                            </th>
                            <th className="p-3 border border-gray-300 text-left" >Description</th>
                            <th className="p-3 border border-gray-300 text-left">Price</th>
                            <th className="p-3 border border-gray-300 text-left">Display Screen 1</th>
                            <th className="p-3 border border-gray-300 text-left">Display Screen 2</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="divide-y divide-gray-200">
                        {categories.map((category) => {
                            const categoryProducts = getProductsForCategory(category);

                            return categoryProducts.map((product, index) => (
                                <tr key={product.id} className="border-b hover:bg-gray-50">

                                    {/* ✅ Category Cell (rowspan preserved) */}
                                    {index === 0 && (
                                        <td
                                            rowSpan={categoryProducts.length}
                                            className="font-semibold text-gray-900 border-r p-3 align-top"
                                        >
                                            {category.name}
                                        </td>
                                    )}

                                    {/* ✅ Product Name (Input) */}
                                    <td className="p-3 font-medium">
                                        <div className="flex flex-col gap-y-4 w-[300px] h-[150px] justify-between">
                                            <textarea
                                                value={product.name || ""}
                                                maxLength={250}
                                                onChange={(e) =>
                                                    handleProductUpdate(product.id, {
                                                        name: e.target.value
                                                    })
                                                }
                                                className="w-full border-none px-2 py-1 h-16 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 no-scrollbar h-[100px]"
                                            />
                                            <div className="text-gray-600">Upto {product.name?.length || 0} / 250 characters</div>
                                        </div>
                                    </td>

                                    {/* ✅ Description (Textarea) */}
                                    <td className="p-3" >
                                        <div className="flex flex-col gap-y-4 w-[300px] h-[150px] justify-between">
                                            <textarea
                                                value={product.description || ""}
                                                maxLength={250}
                                                onChange={(e) =>
                                                    handleProductUpdate(product.id, {
                                                        description: e.target.value
                                                    })
                                                }
                                                className="w-full border-none px-2 py-1 h-16 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 no-scrollbar h-[100px]"
                                            />
                                            <div className="text-gray-600">Upto {product.description?.length || 0} /     250 characters</div>
                                        </div>

                                    </td>

                                    {/* ✅ Price (Only Numbers , , and - allowed) */}
                                    <td className="p-3 font-medium">
                                        <div className="flex flex-col gap-y-4">
                                            <input
                                                type="text"
                                                value={product.price ?? ""}
                                                onChange={(e) => {
                                                    const cleaned = e.target.value.replace(/[^0-9,\-]/g, "");
                                                    handleProductUpdate(product.id, { price: cleaned });
                                                }}
                                                className="w-24 border-none px-2 py-1 text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                            <div className="text-gray-600">Only numbers, "," and "-" are allowed</div>
                                        </div>
                                    </td>

                                    {/* ✅ Display Screen 1 */}
                                    <td className="p-3">
                                        <Toggle
                                            apiOn={product.display_on_screen_1}
                                            onToggle={(newVal) =>
                                                handleProductUpdate(product.id, { display_on_screen_1: newVal })
                                            }
                                        />
                                    </td>

                                    {/* ✅ Display Screen 2 */}
                                    <td className="p-3">
                                        <Toggle
                                            apiOn={product.display_on_screen_2}
                                            onToggle={(newVal) =>
                                                handleProductUpdate(product.id, { display_on_screen_2: newVal })
                                            }
                                        />
                                    </td>
                                </tr>
                            ));
                        })}
                    </tbody>

                </table>
            </div>
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={dismissToast}
                />
            )}
            {/* <ConfirmDialog
                open={showExitDialog}
                title="Unsaved Changes"
                message="You have unsaved changes. Do you want to save before leaving?"
                cancelLabel="Discard Changes"
                confirmLabel="Save & Leave"
                // onCancel={handleDialogCancel}
                // onConfirm={handleDialogConfirm}
            /> */}
            <PreviewModal
                open={showPreviewModal}
                onClose={() => setShowPreviewModal(false)}
                data={previewData}               // ✅ sending data
                screen={previewScreen}           // ✅ sending screen name
                setScreen={setPreviewScreen}     // ✅ allow screen switching inside modal
                screenNumber={previewScreen === "screen1" ? 1 : 2}
            />
        </div>
    );
}

