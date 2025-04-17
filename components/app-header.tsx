"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { appRoutes } from "@/config";

export default function AppHeader() {
    // access current pathname
    const pathname = usePathname();

    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">My App</h1>
                <nav className="space-x-4">
                    {Object.entries(appRoutes.routes).map(([key, route]) =>{
                        return (
                            <Link
                                key={key}
                                href={route}
                                className="text-gray-300 hover:text-white"
                                style={{
                                    textDecoration: pathname === route ? "underline" : "none",
                                } }
                                >
                                {key}
                            </Link>
                        );
                    })
                    }
                </nav>
            </div>
        </header>
    );
}
