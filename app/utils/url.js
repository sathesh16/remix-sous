export function buildAbsoluteUrl(relativePath, baseUrl) {
    if (!relativePath) {
        throw new Error("relativePath is required to build an absolute URL");
    }

    if (!baseUrl) {
        throw new Error("baseUrl is required to build an absolute URL");
    }

    return new URL(relativePath, baseUrl).href;
}

export default buildAbsoluteUrl;

