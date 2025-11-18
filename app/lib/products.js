import { API_BASE_URL } from "../utils/constants";

export async function fetchCategoriesAndProducts() {
    const [categoriesResponse, productsResponse] = await Promise.all([
        fetch(`${API_BASE_URL}/items/Products`),
        fetch(`${API_BASE_URL}/items/Product_list`),
    ]);

    if (!categoriesResponse.ok || !productsResponse.ok) {
        throw new Error("Failed to fetch product data.");
    }

    const [categories, products] = await Promise.all([
        categoriesResponse.json(),
        productsResponse.json(),
    ]);

    const categoriesData = (categories.data || []).slice().sort(
        (a, b) => (a.sequence ?? 9999) - (b.sequence ?? 9999)
    );

    const productsData = (products.data || [])
        .filter(prod => !!prod.name && String(prod.name).trim().length > 0)
        .slice().sort(
            (a, b) => (a.sequence ?? 9999) - (b.sequence ?? 9999)
        );

    return {
        categories: categoriesData,
        products: productsData,
    };
}

export async function patchProducts(payload) {
    const response = await fetch(`${API_BASE_URL}/items/Product_list`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(error || "Failed to save products.");
    }

    return response.json();
}

export default {
    fetchCategoriesAndProducts,
    patchProducts,
};

