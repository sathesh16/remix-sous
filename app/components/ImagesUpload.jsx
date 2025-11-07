import useImageUpload from "../hooks/useImageUpload";

export default function ImagesUpload({ name = "default-name", maxSize }) {
    const {
        images,
        error,
        isDragging,
        handleInputChange,
        handleDrop,
        handleDragOver,
        handleDragLeave,
        removeImage,
    } = useImageUpload({ maxSize });

    return (
        <div className="p-4">
            {/* 🔹 Drop Zone */}
            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                style={{
                    padding: "40px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    border: isDragging ? "2px dashed red" : "1px solid #000",
                    margin: "10px auto",
                    maxWidth: "500px",
                }}
            >
                <p className="text-gray-600">
                    Drag & Drop your images here or{" "}
                    <label className="text-blue-600 cursor-pointer underline">
                        click to browse
                        <input
                            type="file"
                            name={name}              // 👈 dynamic name
                            multiple
                            accept=".jpg, .png"
                            onChange={handleInputChange}
                            className="hidden"
                        />
                    </label>
                </p>
            </div>

            {/* 🔹 Error Message */}
            {error && <p className="text-red-500 mt-2">{error}</p>}

            {/* 🔹 Image Previews */}
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="relative"
                        style={{ display: "flex", gap: "20px", flexDirection: "column" }}
                    >
                        <img
                            src={img.preview}
                            alt={`preview ${index}`}
                            style={{ width: "100px", height: "100px", objectFit: "cover" }}
                        />
                        <button
                            type="button"
                            onClick={() => removeImage(index)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
