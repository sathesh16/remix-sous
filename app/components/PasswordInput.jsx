import React, { useState } from 'react'
import Input from './Input'
import { Eye, EyeOff } from 'lucide-react';

function PasswordInput({...props}) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="relative">
            <Input type={showPassword ? "text" : "password"}
                {...props}
                />

            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-2 flex items-center text-gray-500"
            >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
        </div>
    )
}

export default PasswordInput
