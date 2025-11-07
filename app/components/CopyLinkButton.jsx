import React, { useCallback, useState } from 'react'

import { useLocation } from '@remix-run/react';

const getFullUrlToCopy = (baseUrl, relativePath) => {
    // Correctly constructs the absolute URL
    return new URL(relativePath, baseUrl).href;
};

function CopyLinkButton({ screenNumber }) {
    // Get the base URL from the current window location
    const baseUrl = window.location.origin;

    // The relative path you were using in your <Link>
    const relativePath = `/banner/product/1/${screenNumber}`;

    const [copyStatus, setCopyStatus] = useState('Copy Link');

    const handleCopy = useCallback(async () => {
        const fullUrl = getFullUrlToCopy(baseUrl, relativePath);

        try {
            await navigator.clipboard.writeText(fullUrl);
            setCopyStatus('Copied!');

            setTimeout(() => {
                setCopyStatus('Copy Link');
            }, 2000);

        } catch (err) {
            console.error('Failed to copy text: ', err);
            setCopyStatus('Failed to copy, check console');

            setTimeout(() => {
                setCopyStatus('Copy Link');
            }, 2000);
        }
    }, [baseUrl, relativePath]);
    return (
        <button
            onClick={handleCopy}
            className="bg-[var(--banner-text-color)] text-[var(--banner-bg-color)] text-sm p-2" // Keep the same Tailwind classes for styling
            disabled={copyStatus.includes('Copied')}
        >
            {copyStatus}
        </button>
    )
}

export default CopyLinkButton
