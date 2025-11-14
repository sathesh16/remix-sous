import { json, redirect } from "@remix-run/node";
import { useLoaderData, Form, useActionData } from "@remix-run/react";
// import { getCurrentUser, getSession, requireUserSession } from "../../sessionHandler.server";
import Button from "../../components/Button";
import CurrentUserCard from "../../components/CurrentUserCard";
import UpdateLocation from "../../components/UpdateCurrentUser";
import { getCurrentUser } from "../../sessionHandler.server";
// import { requireUserSession } from "../sessions.server";


export async function loader({ request }) {
    const user = await getCurrentUser(request);
    return json({ user });
}


export default function Dashboard() {
    const { user, token, refresh_token, expires_in } = useLoaderData();

    console.log("🔐 CLIENT — USER:", user);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Welcome, {user.email || "User"} 👋</h1>

            <div className="mb-4 p-3 rounded bg-gray-100">
                <p><strong>Access Token:</strong> {token}</p>
                <p><strong>Refresh Token:</strong> {refresh_token}</p>
                <p><strong>Expires In:</strong> {expires_in}</p>
            </div>

            <CurrentUserCard user={user} />
            <UpdateLocation user={user} />

            <Form method="post" action="/logout" reloadDocument>
                <Button type="submit" variant="danger">Logout</Button>
            </Form>
        </div>
    );
}
