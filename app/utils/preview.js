export function buildPreviewData(categories = [], products = [], screen = "screen1") {
    if (!Array.isArray(categories) || !Array.isArray(products)) {
        return [
            {
                error: true,
                message: "Invalid data supplied.",
                category: null,
                products: [],
            },
        ];
    }

    const screenKey = screen === "screen2" ? "display_on_screen_2" : "display_on_screen_1";

    const filtered = categories
        .map((category) => {
            const categoryProductIds = new Set(category?.product_list || []);

            const filteredProducts = products.filter((product) => {
                const hasId = categoryProductIds.has(product.id);
                const hasScreenKey = Boolean(product?.[screenKey]);

                // VALID NAME CHECK
                const hasValidName =
                    product?.name &&
                    typeof product.name === "string" &&
                    product.name.trim().length > 0;

                return hasId && hasScreenKey && hasValidName;
            });

            if (filteredProducts.length === 0) {
                return null;
            }

            return {
                category: category.name,
                products: filteredProducts,
            };
        })
        .filter(Boolean);


    if (filtered.length === 0) {
        return [
            {
                error: true,
                message: "No products found for this screen.",
                category: null,
                products: [],
            },
        ];
    }

    return filtered;
}

export default buildPreviewData;

