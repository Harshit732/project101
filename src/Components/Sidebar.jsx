import React, { useState } from 'react';

const Sidebar = () => {
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const toggleSubMenu = (menuId) => {
        setOpenSubMenu(openSubMenu === menuId ? null : menuId);
    };

    return (
        <div className="w-64 bg-[#e05308] text-white h-screen flex flex-col">
            <div className="p-4">
                <h2 className="text-2xl font-bold">Sidebar</h2>
            </div>
            <ul className="flex-1 overflow-y-auto space-y-2">
                <li>
                    <a href="/" className="block p-4 hover:bg-gray-700">Home</a>
                </li>
                <li>
                    <button
                        onClick={() => toggleSubMenu(1)}
                        className="block w-full text-left p-4 hover:bg-gray-700 focus:outline-none"
                    >
                        Menu Item 1
                    </button>
                    {openSubMenu === 1 && (
                        <ul className="space-y-2 pl-4 bg-gray-700">
                            <li>
                                <a href="" className="block p-4 hover:bg-gray-600">Sub Item 1</a>
                            </li>
                            <li>
                                <a href="" className="block p-4 hover:bg-gray-600">Sub Item 2</a>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <button
                        onClick={() => toggleSubMenu(2)}
                        className="block w-full text-left p-4 hover:bg-gray-700 focus:outline-none"
                    >
                        Menu Item 2
                    </button>
                    {openSubMenu === 2 && (
                        <ul className="space-y-2 pl-4 bg-gray-700">
                            <li>
                                <a href="" className="block p-4 hover:bg-gray-600">Sub Item 3</a>
                            </li>
                            <li>
                                <a href="" className="block p-4 hover:bg-gray-600">Sub Item 4</a>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <a href="" className="block p-4 hover:bg-gray-700">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
