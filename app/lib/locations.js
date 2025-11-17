import { API_BASE_URL } from "../utils/constants";

export default async function fetchLocations() {
    const response = await fetch(`${API_BASE_URL}/items/Locations/`);
    if (!response.ok) throw new Error("Failed to fetch locations.");

    const result = await response.json();
    return result.data || result;
}

export async function updateLocationIsVertical(id, isVertical) {
    const payload = {
        is_vertical_foodwaste: isVertical
    };

    const response = await fetch(`${API_BASE_URL}/items/Locations/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error("Failed to update location.");

    return response.json();

}