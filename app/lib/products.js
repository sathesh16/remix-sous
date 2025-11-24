import { createDirectus, readItems, rest } from "@directus/sdk";
import { API_BASE_URL } from "../utils/constants";


export async function fetchCategoriesAndProducts() {
    let categories = [];
    let products = [];
    const client = createDirectus(API_BASE_URL).with(rest());
    try {
        [categories, products] = await Promise.all([
            client.request(readItems("Products")),
            client.request(readItems("Product_list")),
        ]);

    } catch (err) {
        console.error("Directus SDK fetch error:", err);

        throw new Error(
            err?.errors?.[0]?.message || "Failed to fetch product data."
        );
    }
    // const [categories, products] = await Promise.all([
    //     categoriesResponse.json(),
    //     productsResponse.json(),
    // ]);

    const categoriesData = (categories || []).slice().sort(
        (a, b) => (a.sequence ?? 9999) - (b.sequence ?? 9999)
    );

    const productsData = (products || [])
        .filter(prod => !!prod.name && String(prod.name).trim().length > 0)
        .slice().sort(
            (a, b) => (a.sequence ?? 9999) - (b.sequence ?? 9999)
        );

    return {
        categories: categoriesData,
        products: productsData,
    };
}

// export async function patchProducts(payload) {
//     const response = await fetch(`${API_BASE_URL}/items/Product_list`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//     });

//     if (!response.ok) {
//         const error = await response.text();
//         throw new Error(error || "Failed to save products.");
//     }

//     return response.json();
// }

export async function patchProducts(payload) {
    try {
        const item_id_array = payload.map(item => item.id);
        const partial_item_object = payload.map(({ id, ...rest }) => rest);


        const client = createDirectus(API_BASE_URL).with(rest());
        const result = await client.request(
            updateItems("Product_list", item_id_array, partial_item_object)
        );

        console.log("SDK Update Result:", result);

        return result

    } catch (error) {
        console.error("Update failed:", error);

        return error
    }

}

export default {
    fetchCategoriesAndProducts,
    patchProducts,
};

