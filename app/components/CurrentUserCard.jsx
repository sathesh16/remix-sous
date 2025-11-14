import React, { useEffect, useState } from 'react'
import { getCurrentUser } from '../sessionHandler.server';


export default function CurrentUserCard({ user }) {
    return (
        <div className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">Current User</h2>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Status:</strong> {user.status}</p>
            <p><strong>Last Access:</strong> {user.last_access}</p>
            <p>Needed one: {user.selected_locations}</p>
        </div>
    );
}
