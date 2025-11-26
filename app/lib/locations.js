import { createDirectus, readItem, readItems, rest, updateItem } from "@directus/sdk";
import { API_BASE_URL } from "../utils/constants";

const client = createDirectus(API_BASE_URL).with(rest());

export default async function fetchLocations() {


    try {
        const result = await client.request(readItems("Locations"))
        return result;
    } catch (err) {
        console.error("Directus SDK fetch error:", err);

        return err
    }

}

// export async function fetchAllowedLocations(id) {
//     const response = await fetch(`${API_BASE_URL}/items/Locations/`);
//     if (!response.ok) throw new Error("Failed to fetch locations.");

//     const result = await response.json();
//     return result.data || result;
// }

export async function getLocationIsVertical(id) {

    try {
        const result = await client.request(readItem("Locations", id))
        return result.is_vertical_foodwaste;
    } catch (err) {
        console.error("Directus SDK fetch error:", err);

        return err
    }
}

export async function updateLocationIsVertical(id, isVertical) {
    try {
        const result = await client.request(
            updateItem("Locations", id, {
                is_vertical_foodwaste: isVertical
            })
        );

        return result; // Directus returns updated record

    } catch (err) {
        console.error("Directus update error:", err);
        throw new Error(
            err?.errors?.[0]?.message || "Failed to update location."
        );
    }

}