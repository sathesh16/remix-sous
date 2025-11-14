import { json } from "@remix-run/node";
import { commitSession, getSession } from "../sessionHandler.server";

export async function action({ request }) {
    const body = await request.json();
    const { location } = body;

    const session = await getSession(request);
    const user = session.get("user");

    if (!user) {
        return json({ success: false, message: "No user in session" }, { status: 401 });
    }

    // Update only selected_location
    user.selected_location = location;
    session.set("user", user);

    return json(
        { success: true },
        {
            headers: {
                "Set-Cookie": await commitSession(session),
            }
        }
    );
}
