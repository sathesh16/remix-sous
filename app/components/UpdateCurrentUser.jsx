import { useState } from "react";
import { updateCurrentUser } from "../lib/users";
// import { updateCurrentUser } from "../lib/users";

export default function UpdateLocation() {
    const [status, setStatus] = useState("");

    async function handleUpdate() {
        try {
            await updateCurrentUser({ first_name: "sa16" }, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0YzlkNDdjLWE2NmYtNDQ4ZC1hNWY5LTJiODExODRiZmViMyIsInJvbGUiOm51bGwsImFwcF9hY2Nlc3MiOm51bGwsImFkbWluX2FjY2VzcyI6bnVsbCwiaWF0IjoxNzYzMTIwOTc0LCJleHAiOjE3NjMxMjE4NzQsImlzcyI6ImRpcmVjdHVzIn0.7rbr-RuzIxVLNWrn_Q4Q1JxQBFrGC8QDieTfFEc8ve4');
            setStatus("Updated successfully!");
        } catch (err) {
            setStatus(err.message);
        }
    }

    return (
        <div>
            <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-black text-white rounded"
            >
                Update Selected Location
            </button>

            {status && <p className="mt-2">{status}</p>}
        </div>
    );
}
