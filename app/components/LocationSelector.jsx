import React from 'react'
import { useState, useEffect } from 'react'
import fetchLocations from '../lib/locations';
import { updateCurrentUser } from '../lib/users';
import Toast from './Toast';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';

function LocationSelector({ user, token, selectedLocation, setSelectedLocation }) {
    const [locations, setLocations] = useState([]);
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

                if (user?.selected_locations) {
                    const exists = locs.some(
                        (loc) => loc.id === user.selected_locations
                    );
                    setSelectedLocation(exists ? user.selected_locations : "");
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
    async function handleLocationChange(value) {
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
            <div className="mt-5 mx-4 mb-16">
                <Listbox value={selectedLocation} onChange={handleLocationChange}>
                    <div className="relative w-full">
                        <ListboxButton className="w-full border border-gray-300 text-white px-4 py-2 rounded text-left flex justify-between">
                            <span>
                                {selectedLocation
                                    ? locations.find(l => l.id === selectedLocation)?.name
                                    : "Select Location"}
                            </span>
                            {/* ▼ Dropdown Arrow */}
                            <span className="ml-2 text-white">▼</span>

                        </ListboxButton>

                        <ListboxOptions className="bg-gray-700 mt-1 rounded shadow-lg text-left absolute w-full">
                            {locations.map((loc) => (
                                <ListboxOption
                                    key={loc.id}
                                    value={loc.id}
                                    className={({ active }) =>
                                        `px-4 py-2 cursor-pointer ${active ? "bg-gray-600" : ""}`
                                    }
                                >
                                    {loc.name}
                                </ListboxOption>
                            ))}
                        </ListboxOptions>
                    </div>
                </Listbox>

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

