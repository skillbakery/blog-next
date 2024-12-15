"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavMenu() {
    const pathname = usePathname();

     const menuItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

   return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-6">
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={clsx(
                "text-white py-2 px-4 rounded hover:bg-gray-700 transition-all",
                {
                  "bg-gray-700 font-bold text-blue-300": pathname === item.href,
                }
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}