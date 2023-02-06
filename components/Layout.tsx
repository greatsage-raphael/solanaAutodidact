import Navbar from "./Navbar";
import Footer from "./Footer";
import { Chat } from "./Chat";

export default function Layout({ children }) {
  return (
   <>
    <div className="container flex flex-col items-center min-h-screen p-4 mx-auto max-w-7xl">
      <Navbar />
      <Chat /> <br />
      {children}

    </div>
    <Footer />
      </>
  )
}
