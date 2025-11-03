import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useTransition, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { getSession, commitSession } from "../../sessions.server.js";
import Button from "../../components/Button.jsx";
import { Eye, EyeOff } from "lucide-react";
import Input from "../../components/Input.jsx";
// import { Eye, EyeOff } from "lucide-react";

// 🧠 Loader — kick out logged-in users
export async function loader({ request }) {
    const session = await getSession(request);
    const user = session.get("user");
    if (user) return redirect("/dashboard");
    return null;
}

// 🔹 Function to hit your external login API
async function loginToExternalApi({ email, password }) {
    const response = await fetch("http://192.168.1.51:8056/auth/login", {
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
    const [showPassword, setShowPassword] = useState(false);

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

                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        className="w-full pr-10 pl-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>

                <div className="text-right"><a href="#">Forgot Password?</a></div>

                <Button type="submit" disabled={transition.state === "submitting"}>
                    {transition.state === "submitting" ? "Logging in..." : "Login"}
                </Button>

            </Form>
        </div>
    );
}
