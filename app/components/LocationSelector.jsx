import React from 'react'
import { useState, useEffect } from 'react'
import fetchLocations from '../lib/locations';
import { getCurrentUser } from '../lib/users';

function LocationSelector() {
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        async function loadData() {
            try {
                // Fetch locations + current user together
                const [locs, user] = await Promise.all([
                    fetchLocations(),
                    getCurrentUser(token),
                ]);

                setLocations(locs);
                setUserId(user.id);

                // Match user's saved location with available locations
                const userSelectedLoc = locs.find(
                    (loc) => loc.id === user.selected_location
                );

                if (userSelectedLoc) {
                    setSelectedLocation(userSelectedLoc.id);
                } else {
                    setSelectedLocation(""); // fallback if not found
                }
            } catch (err) {
                console.error("Error loading locations/user:", err);
            }
        }

        if (token) loadData();
    }, [token]);

    function handleLocationChange(e) {
        const value = e.target.value;
        setSelectedLocation(value);
    }

    return (
        <div className="border border-gray-300 px-4 py-2 mt-[20px] mx-4 mb-16">
            <select
                className="w-full bg-transparent text-white outline-none"
                value={selectedLocation}
                onChange={handleLocationChange}
            >
                <option value="" disabled>
                    Select Location
                </option>
                {locations.map((loc) => (
                    <option key={loc.id} value={loc.id}>
                        {loc.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default LocationSelector
