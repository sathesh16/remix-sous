import { useEffect, useState } from "react";
import { API_BASE_URL } from "../utils/constants";

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

                setCategories(catRes.data || []);
                setProducts(prodRes.data || []);
            } catch (error) {
                console.error("Error fetching:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Products Overview</h1>

            <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-300">
                <table className="min-w-full border-collapse text-sm">
                    {/* Table Head */}
                    <thead className="bg-gray-900 text-white font-semibold">
                        <tr>
                            <th className="p-3 border border-gray-300 text-left">Category</th>
                            <th className="p-3 border border-gray-300 text-left">Product Name</th>
                            <th className="p-3 border border-gray-300 text-left">Description</th>
                            <th className="p-3 border border-gray-300 text-left">Price</th>
                            <th className="p-3 border border-gray-300 text-left">Display Screen 1</th>
                            <th className="p-3 border border-gray-300 text-left">Display Screen 2</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="divide-y divide-gray-200">
                        {categories.map((category) => {
                            const categoryProducts = products.filter((p) =>
                                category.product_list.includes(p.id)
                            );

                            return categoryProducts.map((product, idx) => (
                                <tr
                                    key={product.id}
                                    className="hover:bg-gray-50 transition-colors"
                                >
                                    {/* Category cell (with rowspan) */}
                                    {idx === 0 && (
                                        <td
                                            rowSpan={categoryProducts.length}
                                            className="border border-gray-200 font-semibold text-gray-900 p-3 align-top bg-gray-50"
                                        >
                                            {category.name}
                                        </td>
                                    )}

                                    {/* Product Name */}
                                    <td className="border border-gray-200 p-3 font-medium text-gray-800">
                                        {product.name?.length > 100
                                            ? product.name.slice(0, 100) + "..."
                                            : product.name}
                                    </td>

                                    {/* Description (limit by characters) */}
                                    <td className="border border-gray-200 p-3 text-gray-700">
                                        {product.description?.length > 150
                                            ? product.description.slice(0, 100) + "..."
                                            : product.description}
                                    </td>

                                    {/* Price */}
                                    <td className="border border-gray-200 p-3 font-medium text-gray-900">
                                        {product.price || "—"}
                                    </td>

                                    {/* Display Screens */}
                                    <td className="border border-gray-200 p-3 text-center">
                                        <Toggle />
                                    </td>
                                    <td className="border border-gray-200 p-3 text-center">
                                        <Toggle />
                                    </td>
                                </tr>
                            ));
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function Toggle() {
    const [on, setOn] = useState(false);
    return (
        <button
            onClick={() => setOn(!on)}
            className={`w-12 h-6 rounded-full flex items-center transition-all duration-200 ${on ? "bg-blue-600" : "bg-gray-300"
                }`}
        >
            <div
                className={`w-5 h-5 bg-white rounded-full shadow transform transition-all duration-200 ${on ? "translate-x-6" : "translate-x-1"
                    }`}
            ></div>
        </button>
    );
}
