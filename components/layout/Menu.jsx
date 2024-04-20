"use client"
import { sidebarLinks } from "@constants"
import { usePathname } from "next/navigation"
import Link from "next/link";

function Menu() {
  const pathname = usePathname()
  return (
    <div className="flex flex-col gap-2">
      {sidebarLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <Link key={link.label} href={link.route} className={'flex gap-4 justify-start rounded-lg py-2 px-4 ${isActive && "bg-purple-1"}'}>
            {link.icon} <p className="text-light-1">{link.label}</p>
          </Link>
        )
      })}
    </div>


  )
}

export default Menu