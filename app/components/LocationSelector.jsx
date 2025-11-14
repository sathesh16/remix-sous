import React from 'react'
import { useState, useEffect } from 'react'
import fetchLocations from '../lib/locations';
import { updateCurrentUser } from '../lib/users';
import Toast from './Toast';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';

function LocationSelector({ user, token }) {
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [userId] = useState(user?.id || null);

    // Toast state
    const [toast, setToast] = useState(null);

    const dismissToast = () => setToast(null);

    // Load locations
    useEffect(() => {
        async function loadData() {
            try {
                const locs = await fetchLocations();
                setLocations(locs);

                if (user?.selected_location) {
                    const exists = locs.some(
                        (loc) => loc.id === user.selected_location
                    );
                    setSelectedLocation(exists ? user.selected_location : "");
                } else {
                    setSelectedLocation("");
                }
            } catch (err) {
                console.error("Error loading locations:", err);
            }
        }

        loadData();
    }, []);

    // Handle update
    async function handleLocationChange(e) {
        const value = e.target.value;
        setSelectedLocation(value);

        try {
            await updateCurrentUser({ selected_locations: value }, token);

            setToast({
                message: "Location updated successfully!",
                type: "success",
            });
        } catch (err) {
            console.error(err);

            setToast({
                message: err.message || "Failed to update location.",
                type: "error",
            });
        }
    }

    return (
        <>
            <div className="border border-gray-300 px-4 py-2 mt-5 mx-4 mb-16">
                <select
                    className="w-full bg-transparent text-white outline-none"
                    value={selectedLocation}
                    onChange={handleLocationChange}
                >
                    <option value="" disabled>Select Location</option>
                    {locations.map((loc) => (
                        <option key={loc.id} value={loc.id}>
                            {loc.name}
                        </option>
                    ))}
                </select>
                {/* <Listbox value={selectedLocation} onChange={setSelectedLocation}>
                    <ListboxButton className="w-full bg-gray-800 text-white px-4 py-2 rounded">
                        {selectedLocation ? locations.find(l => l.id === selectedLocation).name : "Select Location"}
                    </ListboxButton>
                    <ListboxOptions className="bg-gray-700 mt-1 rounded shadow-lg">
                        {locations.map((loc) => (
                            <ListboxOption
                                key={loc.id}
                                value={loc.id}
                                className={({ active }) => `px-4 py-2 cursor-pointer ${active ? 'bg-gray-600' : ''}`}
                            >
                                {loc.name}
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </Listbox> */}
            </div>



            {/* Toast Component */}
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={dismissToast}
                />
            )}
        </>
    );
}


export default LocationSelector

