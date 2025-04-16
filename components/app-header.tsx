import Link from "next/link";
import React from "react";

export default function AppHeader() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-
2xl font-bold">My App</h1>
                <nav className="space-x-4">
                    <Link href="/settings" className="hover:text-gray-400">
                        Settings
                    </Link>
                    <Link href="/tools" className="hover:text-gray-400">
                        Tools
                    </Link>
                    <Link href="/generation" className="hover:text-gray-400">
                        Generations
                    </Link>
                </nav>
            </div>
        </header>
    );
}
