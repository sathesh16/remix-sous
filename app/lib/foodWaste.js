import { createDirectus, createItems, readItems, rest, updateItem, updateItems } from "@directus/sdk";
import { API_BASE_URL } from "../utils/constants";


const client = createDirectus(API_BASE_URL).with(rest());

export async function fetchFoodWaste(locationId) {
  try {
    const data = await client.request(
      readItems("Food_waste_information", {
        filter: locationId
          ? { location_id: { _eq: locationId } }
          : {},
      })
    );

    return data; // Directus returns array of items

  } catch (err) {
    console.error("Directus SDK fetch error:", err);
    throw new Error(
      err?.errors?.[0]?.message || "Failed to fetch food waste data."
    );
  }
}


export async function patchFoodWaste(payload) {
  try {
    const results = [];

    // Update each item individually
    for (const item of payload) {
      const { id, ...rest } = item;

      const result = await client.request(
        updateItem("Food_waste_information", id, rest)
      );

      results.push(result);
    }

    return results;

  } catch (err) {
    console.error("Directus SDK update error:", err);
    throw new Error(
      err?.errors?.[0]?.message || "Failed to update food waste."
    );
  }
}

export async function createFoodWaste(items) {
  try {

    return await client.request(
      createItems("Food_waste_information", items)
    );

  } catch (err) {
    console.error("Directus SDK create error:", err);
    throw new Error(
      err?.errors?.[0]?.message || "Failed to create food waste."
    );
  }

}
