import {React , useState } from "react";
import Link from "next/link";


function Navbar() {
  const handelVisible = () => {
    if (visble == "hidden") {
      setVisible("block");
    } else {
      setVisible("hidden"); 
    }
  };

  const [visble, setVisible] = useState("hidden");
  return (
    <div>
      <nav className="nav bg-black text-white text-center">
        <div className="navbar flex justify-between items-center p-2 md:hidden">
          <div clasName="flex justify-center items-center">
            <div
              className="hamburger inline-block p-1 cursor-pointer"
              onClick={handelVisible}
            >
              <div className="line h-0.5 w-6 my-1 bg-white"></div>
              <div className="line h-0.5 w-6 my-1 bg-white"></div>
              <div className="line h-0.5 w-6 my-1 bg-white"></div>
            </div>
          </div>
          <div className="text-xl md:hidden"><Link href="/">Flick Thesis</Link></div>
          {/* <div className="Cart text-center md:hidden">Cart Account</div> */}
          <div className="mode md:hidden"><Link href="/dark-mode/">Dark Mode</Link></div>
        </div>

        <ul className={`md:justify-between px-20 md:flex ${visble}`}>
          <li className="cursor-pointer text-xs font-bold hover:bg-red-700 px-1 py-3">
            <Link href="/">FLICK THESIS</Link>
          </li>
          <li className="cursor-pointer cursor-not-allowed opacity-50 text-xs font-bold hover:bg-red-700 px-1 py-3">
            <Link href="/SR/">SR EXCLUSIVES</Link>
          </li>
          <li className="cursor-pointer cursor-not-allowed opacity-50 text-xs font-bold hover:bg-red-700 px-1 py-3">
            <Link href="/MOVIE/">MOVIE NEWS</Link>
          </li>
          <li className="cursor-pointer cursor-not-allowed opacity-50 text-xs font-bold hover:bg-red-700 px-1 py-3">
            <Link href="/TV/">TV NEWS</Link>
          </li>
          <li className="cursor-pointer cursor-not-allowed opacity-50 text-xs font-bold hover:bg-red-700 px-1 py-3">
            <Link href="/REVIEWS/">REVIEWS</Link>
          </li>
          <li className="cursor-pointer cursor-not-allowed opacity-50 text-xs font-bold hover:bg-red-700 px-1 py-3">
            <Link href="/INTERVIEWS/">INTERVIEWS</Link>
          </li>
          <li className="cursor-pointer cursor-not-allowed opacity-50 text-xs font-bold hover:bg-red-700 px-1 py-3">
            <Link href="/TECH/">TECH</Link>
          </li>
          <li className="cursor-pointer cursor-not-allowed opacity-50 text-xs font-bold hover:bg-red-700 px-1 py-3">
            <Link href="/MORE/">MORE</Link>
          </li>
          <li className="cursor-pointer cursor-not-allowed opacity-50 text-xs font-bold hover:bg-red-700 px-1 py-3">
            <Link href="/FOLLOW/">FOLLOW US</Link>
          </li>
          <li className="cursor-pointer cursor-not-allowed opacity-50 text-xs font-bold hover:bg-red-700 px-1 py-3">
            <Link href="/DARK/">DARK MODE</Link>
          </li>
          <li className="cursor-pointer cursor-not-allowed opacity-50 text-xs font-bold hover:bg-red-700 px-1 py-3">
            <Link href="/SEARCH/">SEARCH</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
