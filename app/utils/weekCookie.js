import { createCookie } from "@remix-run/node";


export const weekCookie = createCookie("selected_week", {
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
});
