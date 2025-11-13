import { getSession } from "../sessions.server";
import { API_BASE_URL } from "../utils/constants";

// import { getSession } from "~/sessions";


export default async function getToken(request) {
    const session = await getSession(request);
    return session?.get("token") || null;
}

export async function getCurrentUser(token) {
    const response = await fetch(`${API_BASE_URL}/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) throw new Error("Failed to fetch current user.");
    const result = await response.json();
    return result.data;
}

// Update user's selected location
export async function updateUserLocation(userId, locationId) {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include", // ✅ include cookies again
        body: JSON.stringify({
            selected_locations: locationId, // adjust this field name if different
        }),
    });

    if (!response.ok) throw new Error("Failed to update user location.");

    const result = await response.json();
    return result.data || result;
}