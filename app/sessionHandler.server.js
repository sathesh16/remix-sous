import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { API_BASE_URL } from "./utils/constants";

// Fallback for dev environments
const sessionSecret = process.env.SESSION_SECRET || "supersecret";

if (!sessionSecret) {
    throw new Error("SESSION_SECRET must be set");
}

// Create cookie-based session storage
const storage = createCookieSessionStorage({
    cookie: {
        name: "__session",
        secure: process.env.NODE_ENV === "production", // HTTPS only in prod
        secrets: [sessionSecret],
        sameSite: "lax",
        path: "/",
        httpOnly: true,
        maxAge: 60 * 60 * 24, // 1 day
    },
});

// 🔹 Get session from request cookies
export async function getSession(request) {
    return storage.getSession(request.headers.get("Cookie"));
}

// 🔹 Commit session back to browser
export async function commitSession(session) {
    return storage.commitSession(session);
}

// 🔹 Destroy session on logout
export async function destroySession(session) {
    return storage.destroySession(session);
}

// 🔹 Protect private routes
export async function requireUserSession(request) {
    const session = await getSession(request);
    const user = session.get("user");

    if (!user) {
        // Build redirectTo param dynamically
        const url = new URL(request.url);
        const redirectTo = url.pathname + url.search;

        throw redirect(`/login?redirectTo=${encodeURIComponent(redirectTo)}`);
    }

    return user;
}
console.log("SESSION FILE LOADED");
console.log({ getSession });
console.log("SESSIONS FILE PATH:", import.meta.url);

export async function requireAccessToken(request) {
    const session = await getSession(request);
    const token = session.get("token");

    if (!token) throw redirect("/login");
    return token;
}

export async function getCurrentUser(request) {
    const token = await requireAccessToken(request);

    const response = await fetch(`${API_BASE_URL}/users/me`, {
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch current user.");
    }

    const result = await response.json();
    return {
        user: result.data,
        token,        // <-- ADD THIS
    };
}


// export async function updateCurrentUser(id, payload, token) {
//     return api.patch(`/users/${id}`, payload, {
//         headers: { Authorization: `Bearer ${token}` },
//     });
// }
