import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import { TabItem, Tabs } from 'flowbite-react'
import { API_BASE_URL } from '../../utils/constants'
import ProductsGrid from '../../components/ProductGrid'
// import { HiUserCircle } from "react-icons/hi";
// import { MdDashboard } from "react-icons/md";

function Kitchen() {
    return (
        <AdminLayout>
            <div className="p-6">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-semibold mb-4 text-[--primary-color]">Kitchen</h1>
                </div>


                {/* Use `variant` instead of `style` */}
                <Tabs aria-label="Pills" variant="pills" color="purple" >
                    <TabItem active title="Cafe" className='!bg-[var(--primary-color)] !text-white'>
                        <ProductsGrid />
                    </TabItem>

                    <TabItem title="Food Waste" className='bg-[var(--primary-color)] !text-white'>
                        <p>Dashboard tab content</p>
                    </TabItem>
                </Tabs>
            </div>
            <h1 class="bold-text text-3xl">Bold LEGO Heading</h1>
            <p class="regular-text ">Regular LEGO Text</p>
            <span class="light-text">Light LEGO Caption</span>
        </AdminLayout>
    )
}

export default Kitchen
