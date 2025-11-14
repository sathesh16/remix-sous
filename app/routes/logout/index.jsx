import React from 'react'
import { redirect } from '@remix-run/node';
import { destroySession, getSession } from '../../sessionHandler.server';

// Runs when <Form method="post" action="/logout" /> is submitted
export async function action({ request }) {
    // ✅ Pass the full request object, not just the cookie string
    const session = await getSession(request);

    return redirect("/login", {
        headers: {
            "Set-Cookie": await destroySession(session),
        },
    });
}
export async function loader() {
    return redirect("/login");
}

function Logout() {
    return (
        <div>
            You have been logged out
        </div>
    )
}

export default Logout
