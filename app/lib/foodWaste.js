import { API_BASE_URL } from "../utils/constants";

export async function fetchFoodWaste() {
  const response = await fetch(`${API_BASE_URL}/items/Food_waste_information`);

  if (!response.ok) throw new Error("Failed to fetch food waste data.");

  const result = await response.json();
  return result.data || result;
}

export async function patchFoodWaste(payload) {
  const response = await fetch(`${API_BASE_URL}/items/Food_waste_information`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) throw new Error("Failed to update food waste.");

  return response.json();
}

export async function createFoodWaste(items) {
  const response = await fetch(`${API_BASE_URL}/items/Food_waste_information`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(items), // Can be single object or array
  });

  if (!response.ok) throw new Error("Failed to create food waste.");

  return response.json();
}
