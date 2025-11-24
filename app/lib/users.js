import { getSession, requireAccessToken } from "../sessionHandler.server.js";
import { API_BASE_URL } from "../utils/constants";




export async function updateCurrentUser(payload, token) {
    const response = await fetch(`${API_BASE_URL}/users/me`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ data: payload }),
    });

    // Parse JSON
    const json = await response.json();

    // If API returned an error, throw it
    if (!response.ok) {
        throw new Error(json?.errors?.[0]?.message || "Failed to update user");
    }

    console.log("Updated user data:", json);

    return json.data; // return updated user
}

export async function getUserAllowedLocations(id) {

    const response = await fetch(`${API_BASE_URL}/users/${id}?fields[]=*.*`);

    const user = await response.json()

    const allowedLocationIds = user.data?.allowed_locations?.map(
        (item) => item.Locations_id
    ) || [];
    return allowedLocationIds;
}
