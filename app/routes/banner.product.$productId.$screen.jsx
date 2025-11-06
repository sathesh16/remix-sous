import { useLoaderData, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { getPreviewData } from "../models/banner.server";

export async function loader({ params }) {
    const previewData = await getPreviewData(params.screen);
    return previewData;
}


export default function BannerProductPreviewRoute() {
    const data = useLoaderData(); // or props
    // ✅ we still get product/banner data

    return (
        <div
            className="w-[1080px] h-[1920px] mx-auto bg-[var(--banner-bg-color)] svg-bg p-8 overflow-hidden"
        >
            <div className="p-8"
                onClick={(e) => e.stopPropagation()} //stop close on click
            >
                <div className="menu-wrapper p-6 pt-12 text-[var(--banner-text-color)] rounded-tr-[50px] rounded-br-[50px]">
                    <h2 className="text-4xl bold-text mb-2">
                        THE BRICK
                    </h2>

                    <h6 className="text-2xl regular-text mb-6">Lounge & Bar</h6>

                    <div className="columns-2 gap-x-10 w-full">
                        {data.map(({ category, products, error, message }) => (
                            error ? (
                                <div className="text-center text-red-400 py-10">{message}</div>
                            ) : (
                                <div key={category} className="category mb-6 break-inside-avoid">
                                    <h3 className="bold-text text-lg pb-1 mb-2">{category}</h3>
                                    {products.map(prod => (
                                        <div key={prod.id} className="flex justify-between items-center py-1">
                                            <span>{prod.name}</span>
                                            <span>{prod.price}</span>
                                        </div>
                                    ))}
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}