import React from 'react'
import { redirect } from '@remix-run/node';
import { destroySession, getSession } from '../../sessionHandler.server';

// Runs when <Form method="post" action="/logout" /> is submitted
export async function loader({ request }) {
    const session = await getSession(request);

    return redirect("/login", {
        headers: {
            "Set-Cookie": await destroySession(session),
        },
    });
}

export default function Logout() {
    return null; // never rendered
}


