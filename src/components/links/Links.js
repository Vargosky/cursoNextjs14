"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
    { path: '/about', text: 'About' },
    { path: '/price', text: 'Price' },
    { path: '/contact', text: 'Contact' },
]


const Links = () => {

    const address = usePathname();

    return (
        <div>
            {
                navItems.map(navItem => (
                    <Link key={navItem.path} className={`text-white mx-2 hover:underline transition-all hover:bg-blue-600 rounded-lg px-5 py-3 ${(address == navItem.path)? 'underline' :'' }`}  href={navItem.path}> {navItem.text}</Link>
                ))
            }


        </div>
    )
}

export default Links