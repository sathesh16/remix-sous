import { json } from "@remix-run/node";
import { useLoaderData, Form, useActionData } from "@remix-run/react";
import { getSession, requireUserSession } from "../../sessions.server";
import Button from "../../components/Button";
// import { requireUserSession } from "../sessions.server";


export async function loader({ request }) {
    const user = await requireUserSession(request);
    return json({ user });
}

export default function Dashboard() {
    const { user } = useLoaderData();
    const action = useActionData();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Welcome, {user.email || "User"} 👋</h1>

            <Form method="post" action="/logout" reloadDocument>
                <Button type="submit" variant="danger">Logout</Button>
            </Form>
        </div>
    );
}
