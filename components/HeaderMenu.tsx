'use client';
import { headerData } from '@/constants';
import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';


function HeaderMenu() {
    const pathname = usePathname();
    console.log(pathname);

  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-5 text-sm capitalize font-semibold">
     {headerData?.map((item)=> 
    
    <Link key={item?.title} href={item?.href} className={`hover:text-orange-500 hoverEffect  relative group ${pathname === item?.href && "text-orange-500"}`}>
        {item?.title}
        <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-orange-500 hoverEffect group-hover:w-1/2 group-hover:left-0 ${pathname === item?.href && 'w-1/2'}`}/>
       
        <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-orange-500 hoverEffect group-hover:w-1/2 group-hover:right-0 ${pathname === item?.href && 'w-1/2'}`}/>
     
        </Link>
    
    )}
    </div>
  )
}

export default HeaderMenu;
