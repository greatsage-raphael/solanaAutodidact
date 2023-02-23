import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Link from "next/link";
import { useModal } from "./Jarvis";

export default function Navbar() {
  const { DemoModal, setShowDemoModal } = useModal();
  return (
    <nav className="flex w-full h-15 gap-4 px-4 pt-4 pb-20 font-sans text-white md:px-20 md:gap-10">
      <Link href="/" className="text-2xl no-underline hover:text-slate-300">
          Autodidact 🧠
      </Link>
      <Link href="/collection" className="text-2xl no-underline text-grey-darkest hover:text-slate-300 grow">
          Certificates 📜
      </Link>

      <DemoModal />
      <button
        onClick={() => setShowDemoModal(true)}
        type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md cursor-pointer hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Jarvis 🤖
      </button>
      <WalletMultiButton /> 

    </nav>
  )
}
