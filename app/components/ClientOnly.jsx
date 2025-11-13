import { useEffect, useState } from "react";

export default function ClientOnly({ children }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null; // Don't render on server
    return children;
}