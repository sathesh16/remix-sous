import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useTransition, useLoaderData } from "@remix-run/react";
// import { useEffect, useState } from "react";
import { getSession, commitSession } from "../../sessions.server.js";
import Button from "../../components/Button.jsx";
import { Eye, EyeOff } from "lucide-react";
import Input from "../../components/Input.jsx";
import PasswordInput from "../../components/PasswordInput.jsx";
import { API_BASE_URL } from "../../utils/constants.js";

// 🧠 Loader — kick out logged-in users
export async function loader({ request }) {
    const session = await getSession(request);
    const user = session.get("user");
    if (user) return redirect("/dashboard");
    return null;
}

// 🔹 Function to hit your external login API
async function loginToExternalApi({ email, password }) {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        const err = await response.text();
        throw new Error(`Login failed: ${err}`);
    }

    return await response.json();
}

// 🔹 Remix action for login
export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
        return json({ error: "Email and password required" }, { status: 400 });
    }

    try {
        const result = await loginToExternalApi({ email, password });

        // Create and save session
        const session = await getSession(request);
        session.set("user", result.user || { email });

        return redirect("/dashboard?login=success", {
            headers: {
                "Set-Cookie": await commitSession(session),
            },
        });
    } catch (error) {
        console.error("❌ Login error:", error);
        return json({ error: "Invalid email or password" }, { status: 401 });
    }
}

export default function LoginPage() {
    const actionData = useActionData();
    const transition = useTransition();

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
                <img src="/images/iss_logo.webp" width="50px" />
            </div>

            <Form method="post" className="flex flex-col gap-6 max-w-[400px] w-full">

                <Input type="email" required name="email" placeholder="Email" />

                <PasswordInput placeholder="Enter password" name="password" />

                <div className="text-right"><a href="#">Forgot Password?</a></div>

                <Button type="submit" disabled={transition.state === "submitting"}>
                    {transition.state === "submitting" ? "Logging in..." : "Login"}
                </Button>

            </Form>
        </div>
    );
}
