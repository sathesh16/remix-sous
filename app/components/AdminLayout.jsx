import { Link } from "@remix-run/react";
import { useState } from "react";
import Button from "./Button";
import AdminPanelLink from "./AdminPanelLink";
import { HandPlatter } from "lucide-react";

export default function AdminLayout({ children }) {
    const [open, setOpen] = useState(true);

    return (
        <div className="min-h-screen flex relative">
            <aside
                className={`bg-[var(--primary-color)] sticky top-0 h-[100vh] flex flex-col text-white transition-all duration-300 ${open ? "w-64" : "w-64"
                    }`}
            >

                <div className="flex justify-between p-4">
                    <img src="/images/iss_logo.webp" alt="iss logo" width="50px" className="logo" />
                    {/* <Button type="submit" variant="danger" onClick={()=>}>Logout</Button> */}
                    <Link to="/logout" className="block px-3 py-2 hover:bg-gray-700">
                        Logout
                    </Link>
                </div>

                {/* <button
                    onClick={() => setOpen(!open)}
                    className="p-4 text-white focus:outline-none"
                >
                    {/* {open ? "←" : "→"} */}
                {/* ←    */}
                {/*</button> */}

                <div className="selectOption border border-gray-300 px-4 py-2 mt-[20px] mx-4 mb-16">
                    Location Name
                </div>

                <nav className="space-y-4">

                    <AdminPanelLink to="/admin" className="mb-2">
                        Live Stage
                    </AdminPanelLink>

                    <AdminPanelLink to="/admin/#" icon={HandPlatter}>
                        Kitchen
                    </AdminPanelLink>

                    <div className="sub-menu">
                        <AdminPanelLink to="/admin/kitchen/" icon="none" className="pl-16">
                            Cafe & Food Waste
                        </AdminPanelLink>

                        <AdminPanelLink to="#" icon="none" className="pl-16">
                            Signs
                        </AdminPanelLink>
                    </div>

                    <AdminPanelLink to="/admin/settings">
                        Settings
                    </AdminPanelLink>

                </nav>
                <div className="flex mt-auto justify-between pt-4 p-4">
                    <img src="/images/sous-chef-white.svg" alt="sous-chef logo" width="70px" className="logo" />
                    <div className="flex flex-col gap-y-2">
                        <div>Need support?</div>
                        <a href="#" className="font-bold">Click here</a>
                    </div>
                </div>
            </aside>

            <main className="flex-1 p-6 overflow-y-auto max-w-none mt-[0]">{children}</main>
        </div>
    );
}
