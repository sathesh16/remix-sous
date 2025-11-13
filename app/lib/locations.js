import { API_BASE_URL } from "../utils/constants";

export default async function fetchLocations() {
    const response = await fetch(`${API_BASE_URL}/items/Locations/`);
    if (!response.ok) throw new Error("Failed to fetch locations.");

    const result = await response.json();
    return result.data || result;
}