import { useCallback, useEffect, useState } from "react";

const DEFAULT_MAX_SIZE = 2 * 1024 * 1024; // 2 MB

export function useImageUpload({ maxSize = DEFAULT_MAX_SIZE } = {}) {
    const [images, setImages] = useState([]);
    const [error, setError] = useState("");
    const [isDragging, setIsDragging] = useState(false);

    const resetError = useCallback(() => setError(""), []);

    const addFiles = useCallback(
        (fileList) => {
            if (!fileList || fileList.length === 0) return;

            const files = Array.from(fileList);
            const validFiles = [];
            const rejectedMessages = [];

            files.forEach((file) => {
                if (file.size > maxSize) {
                    rejectedMessages.push(`${file.name} is larger than ${Math.round(maxSize / (1024 * 1024))} MB`);
                    return;
                }
                validFiles.push({
                    file,
                    preview: URL.createObjectURL(file),
                });
            });

            if (rejectedMessages.length > 0) {
                setError(rejectedMessages.join("\n"));
            } else {
                resetError();
            }

            if (validFiles.length > 0) {
                setImages((prev) => [...prev, ...validFiles]);
            }
        },
        [maxSize, resetError]
    );

    const handleInputChange = useCallback(
        (event) => {
            addFiles(event.target.files);
            event.target.value = "";
        },
        [addFiles]
    );

    const handleDrop = useCallback(
        (event) => {
            event.preventDefault();
            event.stopPropagation();
            setIsDragging(false);
            addFiles(event.dataTransfer.files);
        },
        [addFiles]
    );

    const handleDragOver = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsDragging(false);
    }, []);

    const removeImage = useCallback((index) => {
        setImages((prev) => {
            const next = [...prev];
            const [removed] = next.splice(index, 1);
            if (removed) {
                URL.revokeObjectURL(removed.preview);
            }
            return next;
        });
    }, []);

    useEffect(() => {
        return () => {
            images.forEach((img) => URL.revokeObjectURL(img.preview));
        };
    }, [images]);

    return {
        images,
        error,
        isDragging,
        addFiles,
        handleInputChange,
        handleDrop,
        handleDragOver,
        handleDragLeave,
        removeImage,
        resetError,
    };
}

export default useImageUpload;

