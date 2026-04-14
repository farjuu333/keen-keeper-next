"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";



const MyLink = ({ href, children,icon }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`font-medium flex items-center transition-all text-xs gap-1 py-[8px] px-[12px] md:text-sm md:gap-2 md:py-[12px] md:px-[16px] ${pathname === href ? "bg-[#244D3F] text-white rounded-[4px]" : "bg-white text-[#64748B] rounded-[4px]"}`}
    >
        {icon && <span>{icon}</span>}
      {children}
    </Link>
  );
};

export default MyLink;