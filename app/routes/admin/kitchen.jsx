import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import ProductsGrid from '../../components/ProductGrid'
import FoodWaste from './kitchen.foodwaste'
import { useSearchParams } from '@remix-run/react'

// export function links() {
//     return [
//         { rel: 'stylesheet', href: 'https://unpkg.com/react-spreadsheet@0.9.7/dist/react-spreadsheet.css' },
//     ];
// }

function Kitchen() {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = searchParams.get('tab') || 'cafe';

    const setTab = (tab) => setSearchParams({ tab });

    const tabBase = "px-4 py-2 rounded-md font-medium transition-colors border";
    const tabActive = "bg-[var(--primary-color)] text-white border-[var(--primary-color)]";
    const tabInactive = "bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200";

    return (
        <AdminLayout>
            <div className="p-6">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-semibold mb-4 text-[--primary-color]">Kitchen</h1>
                </div>

                <div role="tablist" aria-label="Kitchen sections" className="flex gap-2 mb-6">
                    <button
                        role="tab"
                        aria-selected={activeTab === 'cafe'}
                        className={`${tabBase} ${activeTab === 'cafe' ? tabActive : tabInactive}`}
                        onClick={() => setTab('cafe')}
                        type="button"
                    >
                        Cafe
                    </button>

                    <button
                        role="tab"
                        aria-selected={activeTab === 'foodwaste'}
                        className={`${tabBase} ${activeTab === 'foodwaste' ? tabActive : tabInactive}`}
                        onClick={() => setTab('foodwaste')}
                        type="button"
                    >
                        Food Waste
                    </button>
                </div>

                <div role="tabpanel" hidden={activeTab !== 'cafe'}>
                    <ProductsGrid />
                </div>

                <div role="tabpanel" hidden={activeTab !== 'foodwaste'}>
                    <FoodWaste />
                </div>
            </div>
        </AdminLayout>
    )
}

export default Kitchen
