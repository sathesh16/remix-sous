import { useEffect, useRef, useState } from "react";
import { API_BASE_URL } from "../utils/constants";
import Toggle from "./Toggle";
import Button from "./Button";
import Toast from "./Toast";
import ConfirmDialog from "./ConfirmDialog";
import { useLocation, useNavigate, useTransition } from "@remix-run/react";
import PreviewModal from "./PreviewModal";

export default function ProductsTable() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const [catRes, prodRes] = await Promise.all([
                    fetch(`${API_BASE_URL}/items/Products`).then((res) => res.json()),
                    fetch(`${API_BASE_URL}/items/Product_list`).then((res) => res.json()),
                ]);

                const categoriesData = (catRes.data || []).sort(
                    (a, b) => (a.sequence ?? 9999) - (b.sequence ?? 9999)
                );

                const productsData = (prodRes.data || []).sort(
                    (a, b) => (a.sequence ?? 9999) - (b.sequence ?? 9999)
                );

                setCategories(categoriesData);
                setProducts(productsData);

            } catch (error) {
                console.error("Error fetching:", error);
            }
        }

        fetchData();
    }, []);

    // Sort categories
    const sortedCategories = categories;

    // Sort products (within each category)
    function sortedProducts(category) {
        return products.filter((p) => category.product_list.includes(p.id));
    }

    const [updates, setUpdates] = useState({}); //tracking all the updates
    const [toast, setToast] = useState(null);





    function showToast(message, type = "success") {
        setToast({ message, type });
    }


    function handleProductUpdate(productId, updatedFields) {
        // Update products in UI
        setProducts(prev =>
            prev.map(p => (p.id === productId ? { ...p, ...updatedFields } : p))
        );

        // Track changes for save later
        setUpdates(prev => ({
            ...prev,
            [productId]: {
                ...(prev[productId] || {}),
                ...updatedFields
            }
        }));
    }


    async function saveAllUpdates() {
        const payload = Object.entries(updates).map(([id, data]) => ({
            id,
            ...data
        }));

        if (payload.length === 0) {
            console.log("No changes to save");
            showToast("Kindly change any value to update", "warning")
            return;
        }

        console.log("Sending batch update:", payload);

        try {
            const res = await fetch(`${API_BASE_URL}/items/Product_list`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            const result = await res.json();
            console.log("✅ Saved Successfully:", result);

            showToast("✅ Changes saved successfully!");


            // Reset updates since everything is saved
            setUpdates({});
        } catch (error) {
            showToast("❌ Failed to save changes.", "error");
            console.error("❌ Save failed:", error);
        }
    }

    //for preview modal. Getting data from toggle and filtering out the products
    const [showPreviewModal, setShowPreviewModal] = useState(false);
    const [previewScreen, setPreviewScreen] = useState("screen1"); //screen1 or screen2

    function getPreviewData(screen) {
        const filtered = categories
            .map(cat => {
                const filteredProducts = products.filter(p =>
                    cat.product_list.includes(p.id) &&
                    (screen === "screen1" ? p.display_on_screen_1 : p.display_on_screen_2)
                );

                if (filteredProducts.length === 0) return null;

                return {
                    category: cat.name,
                    products: filteredProducts
                };
            })
            .filter(Boolean); // remove nulls

        // ✅ If no categories found, return error array
        if (filtered.length === 0) {
            return [
                {
                    error: true,
                    message: "No products found for this screen.",
                    category: null,
                    products: []
                }
            ];
        }

        return filtered;
    }

    const previewData = getPreviewData(previewScreen); //pass it to component

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="flex justify-end items-center mb-6 pos-top">
                <p className="mr-4">Remember to update before leaving</p>
                <Button onClick={saveAllUpdates} variant="primary">Update</Button>
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
                        {sortedCategories.map((category) => {
                            const categoryProducts = sortedProducts(category);

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
                    onClose={() => setToast(null)}
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

