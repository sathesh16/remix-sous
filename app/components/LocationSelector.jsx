import React from 'react'
import { useState, useEffect } from 'react'
import fetchLocations from '../lib/locations';
import { getUserAllowedLocations, updateCurrentUser } from '../lib/users';
import Toast from './Toast';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';

function LocationSelector({ user, token, selectedLocation, setSelectedLocation, variant = "default", }) {
    const [locations, setLocations] = useState([]);
    const [userId] = useState(user?.id || null);

    // Toast state
    const [toast, setToast] = useState(null);

    const dismissToast = () => setToast(null);

    const isBlack = variant === "black";

    const textColor = isBlack ? "text-[#777]" : "text-white";
    const bgColor = isBlack ? "bg-white" : "bg-gray-700";
    const optionActiveBg = isBlack ? "bg-gray-200" : "bg-gray-600";
    const dropdownPosition = isBlack ? "" : "absolute";

    // Load locations
    useEffect(() => {
        async function loadData() {
            try {
                const locs = await fetchLocations();
                const allowedLocs1 = await getUserAllowedLocations(user.id)
                // console.log(allowedLocs1)


                // 🔥 Filter locations based on user.allowed_locations
                const allowedLocs = allowedLocs1.length
                    ? locs.filter((loc) =>
                        allowedLocs1.includes(loc.id)
                    )
                    : [];
                setLocations(allowedLocs);  // <- uncomment if needed

                // 🔥 Auto-select default value
                if (user?.selected_locations) {
                    const exists = allowedLocs.some(
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
        const selectedLocObject = locations.find(l => l.id === value);

        // ➤ Pass the full object to Context (optional)
        if (selectedLocObject) {
            window.dispatchEvent(new CustomEvent("locationChanged", { detail: selectedLocObject }));
        }

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
            <Listbox value={selectedLocation} onChange={(value) => handleLocationChange(value)}>
                <div className="relative w-full">
                    <ListboxButton
                        className={`w-full border border-gray-300 px-4 py-2 rounded text-left flex justify-between ${textColor}`}
                    >
                        <span>
                            {selectedLocation
                                ? locations.find(l => l.id === selectedLocation)?.name
                                : "Allowed Locations"}
                        </span>
                        <span className={textColor}>▼</span>
                    </ListboxButton>

                    <ListboxOptions
                        className={`${bgColor} mt-1 rounded shadow-lg text-left w-full ${dropdownPosition}`}
                    >
                        {locations.map((loc) => (
                            <ListboxOption
                                key={loc.id}
                                value={loc.id}
                                className={({ active }) =>
                                    `px-4 py-2 cursor-pointer ${active ? optionActiveBg : ""} ${textColor}`
                                }
                            >
                                {loc.name}
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </div>
            </Listbox>
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

