import { useEffect, useState } from "react";
import { API_BASE_URL } from "../utils/constants";
import Toggle from "./Toggle";
import Button from "./Button";
import Toast from "./Toast";
import ConfirmDialog from "./ConfirmDialog";
import { useLocation, useNavigate, useTransition } from "@remix-run/react";

export default function ProductsTable() {
    const [showExitDialog, setShowExitDialog] = useState(false);  //for dialog
    const [nextLocation, setNextLocation] = useState(null);

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const [catRes, prodRes] = await Promise.all([
                    fetch(`${API_BASE_URL}/items/Products`).then((res) => res.json()),
                    fetch(`${API_BASE_URL}/items/Product_list`).then((res) => res.json()),
                ]);

                setCategories(catRes.data || []);
                setProducts(prodRes.data || []);
            } catch (error) {
                console.error("Error fetching:", error);
            }
        }

        fetchData();
    }, []);

    const [sortBy, setSortBy] = useState(null); // "category" | "name"
    const [sortDirection, setSortDirection] = useState("asc");

    function handleSort(field) {
        // toggling direction if field already selected
        const newDirection = sortBy === field && sortDirection === "asc" ? "desc" : "asc";

        setSortBy(field);
        setSortDirection(newDirection);

        // If sorting category → sort category state permanently
        if (field === "category") {
            setCategories((prev) =>
                [...prev].sort((a, b) => {
                    const res = a.name.localeCompare(b.name);
                    return newDirection === "asc" ? res : -res;
                })
            );
        }
    }

    // Sort categories
    const sortedCategories = categories;

    // Sort products (within each category)
    function sortedProducts(category) {
        const list = products.filter((p) => category.product_list.includes(p.id));

        return sortBy === "name"     //enter sorting when sortby is set to name
            ? [...list].sort((a, b) => {
                const res = a.name.localeCompare(b.name);
                return sortDirection === "asc" ? res : -res;
            })
            : list; // leave product order as-is when sorting category
    }

    const [updates, setUpdates] = useState({}); //tracking all the updates
    const [toast, setToast] = useState(null);
    const hasUnsavedChanges = Object.keys(updates).length > 0;
    const transition = useTransition();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!hasUnsavedChanges) return;

        // When Remix is trying to navigate
        if (transition.state === "loading") {
            const nextUrl = transition.location?.pathname;

            if (nextUrl && nextUrl !== location.pathname) {
                setShowExitDialog(true);
                setNextLocation(nextUrl);

                // Stop the navigation **by navigating back to current**
                navigate(location.pathname, { replace: true });
            }
        }
    }, [transition.state, hasUnsavedChanges]);
    // useEffect(() => {
    //     const handler = (e) => {
    //         if (!hasUnsavedChanges) return;
    //         e.preventDefault();
    //         e.returnValue = "";
    //     };

    //     window.addEventListener("beforeunload", handler);
    //     return () => window.removeEventListener("beforeunload", handler);
    // }, [hasUnsavedChanges]);

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

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="flex justify-between mb-6">
                <h1 className="text-2xl font-bold ">Products Overview</h1>
                <Button onClick={saveAllUpdates} variant="primary">Update</Button>
            </div>

            <div className="flex justify-end items-center mb-6">
                <Button variant="secondary">Preview</Button>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-300">
                <table className="min-w-full border-collapse text-sm">
                    {/* Table Head */}
                    <thead className="bg-gray-900 text-white font-semibold">
                        <tr>
                            <th
                                className="p-3 border border-gray-300 text-left"
                                onClick={() => handleSort('category')}
                            >
                                Category{" "}
                                {sortBy === "category" && (sortDirection === "asc" ? "↑" : "↓")}
                            </th>
                            <th
                                onClick={() => handleSort('name')}
                                className="p-3 border border-gray-300 text-left"
                            >
                                Product Name{" "}
                                {sortBy === "name" && (sortDirection === "asc" ? "↑" : "↓")}
                            </th>
                            <th className="p-3 border border-gray-300 text-left">Description</th>
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
                                        <div className="flex flex-col gap-y-4">
                                            <input
                                                type="text"
                                                value={product.name}
                                                maxLength={250}
                                                onChange={(e) =>
                                                    handleProductUpdate(product.id, { name: e.target.value })
                                                }
                                                className="w-full border-none px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                            <div className="text-gray-600">Upto 250 characters</div>
                                        </div>
                                    </td>

                                    {/* ✅ Description (Textarea) */}
                                    <td className="p-3">
                                        <div className="flex flex-col gap-y-4">
                                            <textarea
                                                value={product.description || ""}
                                                maxLength={250}
                                                onChange={(e) =>
                                                    handleProductUpdate(product.id, {
                                                        description: e.target.value
                                                    })
                                                }
                                                className="w-full border-none px-2 py-1 h-16 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                            <div className="text-gray-600">Upto 250 characters</div>
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
            <ConfirmDialog
                open={showExitDialog}
                title="Unsaved Changes"
                message="You have unsaved changes. Do you want to save before leaving?"
                cancelLabel="Discard Changes"
                confirmLabel="Save & Leave"
                onCancel={() => {
                    setUpdates({});
                    window.location.href = nextLocation;
                }}
                onConfirm={async () => {
                    await saveAllUpdates();
                    window.location.href = nextLocation;
                }}
            />
        </div>
    );
}

