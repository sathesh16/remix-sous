import { createDirectus, readUser, rest, updateMe, updateUser } from "@directus/sdk";
import { getSession, requireAccessToken } from "../sessionHandler.server.js";
import { API_BASE_URL } from "../utils/constants";

const client = createDirectus(API_BASE_URL).with(rest());


export async function updateCurrentUser(payload, token, id) {
    // const response = await fetch(`${API_BASE_URL}/users/me`, {
    //     method: "PATCH",
    //     headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${token}`,
    //     },
    //     body: JSON.stringify({ data: payload }),
    // });

    // // Parse JSON
    // const json = await response.json();

    // // If API returned an error, throw it
    // if (!response.ok) {
    //     throw new Error(json?.errors?.[0]?.message || "Failed to update user");
    // }

    // console.log("Updated user data:", json);

    // return json.data; // return updated user

    try {
        const result = await client.request(updateUser(id, payload));
        return result;
    } catch (err) {
        console.error("Directus SDK update user error:", err, id, payload);
        return err;
    }

}

export async function getUserAllowedLocations(id) {

    try {
        // Fetch single user with nested relationships
        const user = await client.request(
            readUser(id, { fields: ["*.*"] })
        );

        const allowedLocationIds =
            user?.allowed_locations?.map((item) => item.Locations_id) || [];

        return allowedLocationIds;

    } catch (err) {
        console.error("Directus SDK user fetch error:", err);
        throw new Error("Failed to fetch user's allowed locations.");
    }
}
