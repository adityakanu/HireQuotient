import { useEffect, useRef, useState } from 'react';

const Dropdown = () => {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef(null);
    const panelRef = useRef(null);

    const toggle = () => {
        setOpen(!open);
    };

    const close = (focusAfter) => {
        setOpen(false);
        focusAfter && focusAfter.focus();
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
        close(buttonRef.current);
        }
    };

    const handleFocusIn = (event) => {
        if (!panelRef.current.contains(event.target)) {
        close();
        }
    };

    useEffect(() => {
        window.addEventListener('focusin', handleFocusIn);
        return () => {
        window.removeEventListener('focusin', handleFocusIn);
        };
    }, );

    return (
        <div className="relative" onKeyDown={handleKeyDown}>
        <button
            ref={buttonRef}
            onClick={toggle}
            aria-expanded={open}
            aria-controls="dropdown-button"
            type="button"
            className="flex items-center justify-between rounded-full border p-1.5"
        >
            <div className="w-3 h-3 ml-2 mr-1 bg-green-700 rounded-full"></div>
            <div className="pl-1 pr-2 text-sm text-gray-700">Active</div>
            <div className="mr-1">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
                ></path>
            </svg>
            </div>
        </button>
        <div
            ref={panelRef}
            style={{ display: open ? 'block' : 'none' }}
            className="absolute z-10 mt-2 bg-white border rounded w-max"
            id="dropdown-button"
            onClick={() => close(buttonRef.current)}
        >
                <div className="flex items-center p-2 cursor-pointer hover:bg-gray-200">
            <div className="w-3 h-3 ml-2 mr-3 bg-green-700 rounded-full"></div>
            <div className="pl-1 pr-2 mr-10 text-sm text-gray-700">
                Active
                <div className="text-xs text-gray-500">Based on activity</div>
            </div>
            <div className="text-gray-500">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
            </div>
            </div>
            <div className="flex items-center p-2 cursor-pointer hover:bg-gray-200">
            <div className="w-3 h-3 ml-2 mr-3 bg-red-600 rounded-full"></div>
            <div className="pl-1 pr-2 mr-10 text-sm text-gray-700">
                Do not Disturb
                <div className="text-xs text-gray-500">Mute notifications</div>
            </div>
            </div>
            <div className="flex items-center p-2 cursor-pointer hover:bg-gray-200">
            <div className="w-3 h-3 ml-2 mr-3 bg-yellow-500 rounded-full"></div>
            <div className="pl-1 pr-2 mr-10 text-sm text-gray-700">Set as away</div>
            </div>
            <div className="py-2 border-t">
            <div className="flex items-center p-2 cursor-pointer hover:bg-gray-200">
                <div className="ml-2 mr-3">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    ></path>
                </svg>
                </div>
                <div className="pl-1 pr-2 mr-10 text-sm text-gray-700">Add a Status</div>
            </div>
            </div>
            <div className="py-2 border-t">
            <div className="flex items-center p-2 cursor-pointer hover:bg-gray-200">
                <div className="ml-2 mr-3"></div>
                <div className="pl-1 pr-2 mr-10 text-sm text-gray-700">
                Chat Notification settings
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Dropdown;
