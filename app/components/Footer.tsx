import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-black sm:text-center dark:text-gray-400">
        © 2023{" "}
        <Link href="/" className="hover:underline text-blue-500">
          ProjectLinked™
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black sm:mt-0">
        <li>
          <Link href="/" className="mr-4 hover:underline md:mr-6">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="mr-4 hover:underline md:mr-6">
            About
          </Link>
        </li>
        <li>
          <Link href="#" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
}
