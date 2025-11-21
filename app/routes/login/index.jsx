import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useTransition, useLoaderData, useSearchParams } from "@remix-run/react";
// import { useEffect, useState } from "react";
import Button from "../../components/Button.jsx";
import { Eye, EyeOff } from "lucide-react";
import Input from "../../components/Input.jsx";
import PasswordInput from "../../components/PasswordInput.jsx";
import { API_BASE_URL } from "../../utils/constants.js";
import { commitSession, getSession } from "../../sessionHandler.server.js";
import { authentication, createDirectus, rest, login } from '@directus/sdk';
import { client } from "../../utils/directus.server.js";
import fetchLocations from "../../lib/locations.js";

// 🧠 Loader — kick out logged-in users
export async function loader({ request }) {
    const session = await getSession(request);
    const user = session.get("user");
    if (user) return redirect("/admin/kitchen/cafe");

    const locs = await fetchLocations();
    console.log("API data " + locs[0].logo)
    const logoUrl = `${API_BASE_URL}/assets/${locs[0].logo}`
    return logoUrl;
}





// 🔹 Remix action for login
export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const redirectTo = "/admin/kitchen/cafe";

    try {
        // 1️⃣ Login to Directus
        const data = await client.login({ email, password });

        // Directus login returns:
        // data.access_token
        // data.refresh_token
        // data.expires
        // data.user (optional, depends on settings)

        const session = await getSession(request);

        // 2️⃣ Store tokens properly
        session.set("token", data.access_token);
        session.set("refresh_token", data.refresh_token);
        session.set("expires_in", data.expires);

        // 3️⃣ Store user fallback
        session.set("user", data.user || { email });

        // 4️⃣ Redirect with cookie
        return redirect(redirectTo, {
            headers: { "Set-Cookie": await commitSession(session) },
        });

    } catch (error) {
        console.error("❌ Login error:", error);
        return json({ error: "Invalid email or password" }, { status: 401 });
    }
}


export default function LoginPage() {
    const actionData = useActionData();
    const logoURL = useLoaderData();
    const transition = useTransition();
    const [searchParams] = useSearchParams();

    // // Show error toast
    // useEffect(() => {
    //     if (actionData?.error) {
    //         setToast({ type: "error", message: actionData.error });
    //         setTimeout(() => setToast(null), 3000);
    //     }
    // }, [actionData]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4 relative p-4">

            <div className="flex items-center justify-between w-full max-w-[400px]">
                Login
                <img src={logoURL || "/images/iss_logo.webp"} alt="location_logo" width="50px" />
            </div>

            <Form method="post" className="flex flex-col gap-6 max-w-[400px] w-full">
                <input type="hidden" name="redirectTo" value={searchParams.get("redirectTo") || "/admin/kitchen/cafe"} />

                <Input type="email" required name="email" placeholder="Email" />

                <PasswordInput placeholder="Enter password" name="password" />

                <div className="text-right"><a href="#">Forgot Password?</a></div>

                <Button type="submit" disabled={transition.state === "submitting"}>
                    {transition.state === "submitting" ? "Logging in..." : "Login"}
                </Button>
            </Form>
            <Form method="post" action="/signup" reloadDocument className="flex max-w-[400px] justify-between w-full items-center">
                <div>Don't have an account,</div>
                <Button type="submit">Sign Up</Button>
            </Form>
        </div>
    );
}
