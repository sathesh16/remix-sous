import { Link } from "@remix-run/react";
import { createContext, useEffect, useState } from "react";
import Button from "./Button";
import AdminPanelLink from "./AdminPanelLink";
import { HandPlatter } from "lucide-react";
import fetchLocations from "../lib/locations";
import LocationSelector from "./LocationSelector";
import { API_BASE_URL } from "../utils/constants";

export const SelectedLocationContext = createContext(null);

export default function AdminLayout({ children, user, token }) {
    const [logoUrl, setLogoUrl] = useState(null)
    const [open, setOpen] = useState(true);
    const [selectedLocation, setSelectedLocation] = useState(user?.selected_locations || "");

    useEffect(() => {
        function updateLogo(e) {
            const loc = e.detail;
            if (!loc?.logo) {
                setLogoUrl(null);
                return;
            }
            setLogoUrl(`${API_BASE_URL}/assets/${loc.logo}`);
        }

        window.addEventListener("locationChanged", updateLogo);

        return () => window.removeEventListener("locationChanged", updateLogo);
    }, []);


    return (
        <SelectedLocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
            <div className="min-h-screen flex relative">
                <aside
                    className={`bg-[var(--primary-color)] sticky top-0 h-[100vh] flex flex-col text-white transition-all duration-300 ${open ? "w-64" : "w-64"
                        }`}
                >

                    <div className="flex justify-between p-4">
                        <img src={logoUrl || "/images/iss_logo.webp"} alt="iss logo" width="50px" className="logo" />
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

                    {/* 🔽 Location Dropdown */}
                    <div className="mt-5 mx-4 mb-16">
                        <LocationSelector
                            user={user}
                            token={token}
                            selectedLocation={selectedLocation}
                            setSelectedLocation={setSelectedLocation}
                        />
                    </div>


                    <nav className="space-y-4">

                        <AdminPanelLink to="/admin" className="mb-2">
                            Live Stage
                        </AdminPanelLink>

                        <AdminPanelLink to="/admin/#" icon={HandPlatter}>
                            Kitchen
                        </AdminPanelLink>

                        <div className="sub-menu">
                            <AdminPanelLink to="/admin/kitchen/cafe" icon="none" className="pl-16">
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
        </SelectedLocationContext.Provider>
    );
}
