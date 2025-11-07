import { useCallback, useEffect, useMemo, useState } from "react";

import { fetchCategoriesAndProducts, patchProducts } from "../lib/products";
import { buildPreviewData } from "../utils/preview";

export function useProductsTable() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [updates, setUpdates] = useState({});
    const [toast, setToast] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        let isMounted = true;

        async function loadData() {
            setLoading(true);
            try {
                const data = await fetchCategoriesAndProducts();
                if (!isMounted) return;
                setCategories(data.categories);
                setProducts(data.products);
            } catch (err) {
                console.error("Error fetching products:", err);
                if (isMounted) {
                    setError(err instanceof Error ? err.message : "Unknown error");
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        loadData();

        return () => {
            isMounted = false;
        };
    }, []);

    const showToast = useCallback((message, type = "success") => {
        setToast({ message, type });
    }, []);

    const dismissToast = useCallback(() => setToast(null), []);

    const handleProductUpdate = useCallback((productId, updatedFields) => {
        setProducts((prev) =>
            prev.map((product) =>
                product.id === productId ? { ...product, ...updatedFields } : product
            )
        );

        setUpdates((prev) => ({
            ...prev,
            [productId]: {
                ...(prev[productId] || {}),
                ...updatedFields,
            },
        }));
    }, []);

    const saveAllUpdates = useCallback(async () => {
        const payload = Object.entries(updates).map(([id, data]) => ({
            id,
            ...data,
        }));

        if (payload.length === 0) {
            showToast("Kindly change any value to update", "warning");
            return;
        }

        setIsSaving(true);

        try {
            await patchProducts(payload);
            showToast("✅ Changes saved successfully!");
            setUpdates({});
        } catch (err) {
            console.error("Failed to save products:", err);
            showToast("❌ Failed to save changes.", "error");
        } finally {
            setIsSaving(false);
        }
    }, [showToast, updates]);

    const getProductsForCategory = useCallback(
        (category) => {
            if (!category) return [];
            const productIds = new Set(category.product_list || []);
            return products.filter((product) => productIds.has(product.id));
        },
        [products]
    );

    const previewDataForScreen = useCallback(
        (screen) => buildPreviewData(categories, products, screen),
        [categories, products]
    );

    const hasPendingUpdates = useMemo(() => Object.keys(updates).length > 0, [updates]);

    return {
        categories,
        products,
        getProductsForCategory,
        handleProductUpdate,
        saveAllUpdates,
        toast,
        showToast,
        dismissToast,
        loading,
        error,
        isSaving,
        hasPendingUpdates,
        previewDataForScreen,
    };
}

export default useProductsTable;

