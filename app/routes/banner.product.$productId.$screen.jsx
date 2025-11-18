import { useLoaderData, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { getPreviewData } from "../models/banner.server";

export async function loader({ params }) {
    const previewData = await getPreviewData(params.screen);
    const { productId, screen } = params;

    // Check productId
    if (productId !== "1") {
        throw new Response("Not Found", { status: 404 });
    }

    // Check screen is 1 or 2
    const allowedScreens = ["1", "2"];
    if (!allowedScreens.includes(screen)) {
        throw new Response("Not Found", { status: 404 });
    }

    // Your data fetch or return data
    return {
        productId,
        screen,
        previewData,
    };
}


export default function BannerProductPreviewRoute() {
    const { productId, screen, previewData } = useLoaderData(); // or props
    // ✅ we still get product/banner data
    const hasError = previewData.some(item => item.error);

    return (
        <div
            className="w-[1080px] h-[1920px] mx-auto bg-[var(--banner-bg-color)] svg-bg p-8 overflow-hidden"
        >
            <div className="p-8">
                <div className="menu-wrapper p-6 pt-12 text-[var(--banner-text-color)] rounded-tr-[50px] rounded-br-[50px]">
                    {hasError ? (<></>)

                        : (<>
                            <h2 className="text-4xl bold-text mb-2">
                                THE BRICK
                            </h2>

                            <h6 className="text-2xl regular-text mb-6">Lounge & Bar</h6>

                            <div className="columns-2 gap-x-10 w-full">
                                {previewData.map(({ category, products, error, message }) => (
                                    error ? (
                                        <div className="text-center text-red-400 py-10">{message}</div>
                                    ) : (
                                        <div key={category} className="category mb-6 break-inside-avoid">
                                            <h3 className="bold-text text-lg">{category}</h3>
                                            {products.map(prod => (
                                                <div key={prod.id} className="flex gap-[20px] justify-between items-center py-1">
                                                    <div className="flex flex-col">
                                                        <span>{prod.name}</span>
                                                        <span>{prod.description}</span>
                                                    </div>

                                                    <span>{prod.price}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )
                                ))}
                            </div>
                        </>)
                    }

                </div>
            </div>
        </div>
    );
}