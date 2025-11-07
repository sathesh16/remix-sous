import { useCallback, useState } from "react";

const DEFAULT_RESET_DELAY = 2000;

export function useClipboard({ resetDelay = DEFAULT_RESET_DELAY } = {}) {
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState(null);

    const reset = useCallback(() => {
        setStatus("idle");
        setError(null);
    }, []);

    const copy = useCallback(
        async (text) => {
            if (!text) return;

            try {
                await navigator.clipboard.writeText(text);
                setStatus("success");
                setError(null);
            } catch (err) {
                console.error("Failed to copy text:", err);
                setStatus("error");
                setError(err instanceof Error ? err.message : "Unknown error");
            } finally {
                if (resetDelay > 0) {
                    window.setTimeout(reset, resetDelay);
                }
            }
        },
        [reset, resetDelay]
    );

    return {
        copy,
        status,
        error,
        reset,
        isSuccess: status === "success",
        isError: status === "error",
    };
}

export default useClipboard;

