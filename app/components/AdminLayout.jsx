import { Link } from "@remix-run/react";
import { useState } from "react";
import Button from "./Button";
import AdminPanelLink from "./AdminPanelLink";

export default function AdminLayout({ children }) {
    const [open, setOpen] = useState(true);

    return (
        <div className="min-h-screen flex bg-gray-100 relative">
            <aside
                className={`bg-[var(--primary-color)] sticky p-4 top-0 h-[100vh] flex flex-col text-white transition-all duration-300 ${open ? "w-64" : "w-64"
                    }`}
            >

                <div className="flex justify-between">
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

                <nav className="p-2 space-y-2">
                    <Link to="/admin" className="block px-3 py-2 hover:bg-gray-700">

                    </Link>

                    <Link to="/admin/kitchen" className="block px-3 py-2 hover:bg-gray-700 sub-menu">
                        Kitchen
                    </Link>




                    <AdminPanelLink to="/admin/settings">
                        Settings {/* no icon → defaults to Settings icon automatically */}
                    </AdminPanelLink>
                </nav>
                <div className="flex mt-auto justify-between">
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
