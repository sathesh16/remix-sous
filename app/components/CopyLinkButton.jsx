import React, { useMemo } from "react";

import useClipboard from "../hooks/useClipboard";
import { buildAbsoluteUrl } from "../utils/url";

function CopyLinkButton({ screenNumber }) {
    const clipboard = useClipboard({ resetDelay: 2000 });

    const linkToCopy = useMemo(() => {
        const { origin } = window.location;
        return buildAbsoluteUrl(`/banner/product/1/${screenNumber}`, origin);
    }, [screenNumber]);

    const label = clipboard.status === "success"
        ? "Copied!"
        : clipboard.status === "error"
            ? "Failed to copy"
            : "Copy Link";

    return (
        <button
            onClick={() => clipboard.copy(linkToCopy)}
            className="bg-[var(--banner-text-color)] text-[var(--banner-bg-color)] text-sm p-2"
            disabled={clipboard.status === "success"}
        >
            {label}
        </button>
    );
}

export default CopyLinkButton;
