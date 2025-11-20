import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import React, { useEffect, useState } from 'react'
import fetchLocations from '../lib/locations';

function MultiselectLocation({ selectedLocations, setSelectedLocations, variant = "default", }) {
  const [locations, setLocations] = useState([]);

  // Toast state
  const [toast, setToast] = useState(null);
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
        setLocations(locs);
      } catch (err) {
        console.error("Error loading locations:", err);
      }
    }

    loadData();
  }, []);

  // Handle update
  async function handleLocationChange(value) {
    setSelectedLocations(value);
  }


  return (
    <>
      <Listbox multiple value={selectedLocations} onChange={handleLocationChange}>
        <div className="relative w-full">

          <ListboxButton
            className={`w-full border border-gray-300 px-4 py-2 rounded text-left flex justify-between ${textColor}`}
          >
            <span>
              {selectedLocations.length > 0
                ? selectedLocations
                  .map(id => locations.find(l => l.id === id)?.name)
                  .join(", ")
                : "Select Locations"}
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
                className={({ active, selected }) =>
                  `px-4 py-2 cursor-pointer flex justify-between ${active ? optionActiveBg : ""
                  } ${textColor}`
                }
              >
                {({ selected }) => (
                  <>
                    <span>{loc.name}</span>
                    {selected && <span>✓</span>}
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>

        </div>
      </Listbox>

    </>
  );
}

export default MultiselectLocation
