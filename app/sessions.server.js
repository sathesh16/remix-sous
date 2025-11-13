import { createCookieSessionStorage, redirect } from "@remix-run/node";

const sessionSecret = process.env.SESSION_SECRET || "supersecret";

const storage = createCookieSessionStorage({
    cookie: {
        name: "__session",
        secure: process.env.NODE_ENV === "production",
        secrets: [sessionSecret],
        sameSite: "lax",
        path: "/",
        httpOnly: true,
        maxAge: 60 * 60 * 24, // 1 day
    },
});

export async function getSession(request) {
    return storage.getSession(request.headers.get("Cookie"));
}

export async function commitSession(session) {   //creating session
    return storage.commitSession(session);
}

export async function destroySession(session) {     //delete session called in logout
    return storage.destroySession(session);
}

export async function requireUserSession(request) {    //validation for pages
    const session = await getSession(request);
    const user = session.get("user");
    if (!user) {
        const url = new URL(request.url);
        const redirectTo = url.pathname + url.search;
        throw redirect(`/login?redirectTo=${encodeURIComponent(redirectTo)}`);  //to redirect to current page
    }
    return user;
}