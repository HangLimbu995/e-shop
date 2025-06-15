import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full flex justify-center bg-[#DDEB9D] py-2 px-4">
      <div className="container w-full h-auto   py-2 px-4">
        <div className="flex justify-between">
          {/* logo */}
          <div>
            <Link href="/">Logo</Link>
          </div>
          {/* Nav items */}
          <div>
            <nav className="mr-16">
              <ul className="flex gap-6">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/products">Products</Link>
                </li>
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
