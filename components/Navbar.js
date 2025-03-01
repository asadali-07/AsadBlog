"use client";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./themeButton";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React, { useState,useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { usePathname } from "next/navigation";


const Navbar = () => {
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()
  useEffect(() => {
    setProgress(20)
    setTimeout(() => {
      setProgress(50)
    }, 200);
    setTimeout(() => {
      setProgress(100)
    }, 400);
  }, [pathname])
  

  return (
    <nav className="backdrop-blur bg-background/50 border-b p-3 top-0 sticky z-10 ">
      <LoadingBar
        color='#BC7CF9'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto flex justify-around items-center">
        <div className=" text-lg font-bold flex justify-center items-center gap-2  text-purple-500">
        <Image src="/blogging.png" alt="logo" width={30} height={30} />
        <Link href="/" className="text-2xl"><i>Blog</i> </Link>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            href="/"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300 "
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            Contact
          </Link>
          <ModeToggle />
        </div>
        <div className="md:hidden">
       <span className="mx-3"> <ModeToggle /></span>
        <Sheet>
  <SheetTrigger>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </SheetTrigger>
          <SheetContent>
    <SheetHeader>
      <SheetTitle className="text-center">AsadBlog</SheetTitle>
      <SheetDescription>
      <div className="flex flex-col justify-center gap-6 items-center">
          <Link
            href="/"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            About
          </Link>
          <Link
            href="/about"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:scale-105 hover:font-semibold transition-transform duration-300"
          >
            Contact
          </Link>
        </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
