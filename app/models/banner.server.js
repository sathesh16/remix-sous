import { API_BASE_URL } from "../utils/constants";


async function fetchCategoriesAndProducts() {
    const [catRes, prodRes] = await Promise.all([
        fetch(`${API_BASE_URL}/items/Products`).then(res => res.json()),
        fetch(`${API_BASE_URL}/items/Product_list`).then(res => res.json()),
    ]);

    return {
        categories: catRes.data || [],
        products: prodRes.data || [],
    };
}

// ✅ The function we will reuse anywhere (Modal Preview / Full Page Preview)
export async function getPreviewData(screen) {
    const { categories, products } = await fetchCategoriesAndProducts();

    // Filter categories to only those that actually contain products for this screen
    const filtered = categories
        .map((cat) => {
            const filteredProducts = products.filter(
                (p) =>
                    cat.product_list.includes(p.id) &&
                    (screen === "1" ? p.display_on_screen_1 : p.display_on_screen_2)
            );

            if (filteredProducts.length === 0) return null;

            return {
                category: cat.name,
                products: filteredProducts
            };
        })
        .filter(Boolean); // remove nulls

    // ✅ Always return an array
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

