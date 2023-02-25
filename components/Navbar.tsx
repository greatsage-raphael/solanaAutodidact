import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Link from "next/link";
import { useModal } from "./Jarvis";
import { useState } from "react";

export default function Navbar() {
  const { DemoModal, setShowDemoModal } = useModal();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between w-full h-15 gap-4 px-4 pt-4 pb-20 font-sans text-white md:px-20 md:gap-10">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link href="/" className="text-2xl no-underline hover:text-slate-300">
          Autodidact βeta 🧠
        </Link>
      </div>
      <div className="block md:hidden">
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          type="button"
          className="flex items-center px-3 py-2 border rounded text-grey-dark border-grey-dark hover:text-slate-300 hover:border-slate-300"
        >
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path
              d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          showMobileMenu ? "block" : "hidden"
        } w-full block flex-grow md:flex md:items-center md:w-auto`}
      >
        <div className="text-md md:flex-grow">
          
          <Link
            href="/collection"
            className=" text-2xl block mt-4 md:inline-block md:mt-0 no-underline text-grey-darkest hover:text-slate-300 mr-4"
          >
            Certificates 📜
          </Link>
        </div>

        <div>
          <DemoModal />
          <button
            onClick={() => setShowDemoModal(true)}
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md cursor-pointer hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Jarvis 🤖
          </button> 
        </div>
      </div>
      <WalletMultiButton />
    </nav>
  );
}
