import Link from 'next/link'

export default function Footer() {
    return (
      <footer className="flex w-full justify-center border-t-2 border-gray-400 py-12 h-10  text-zinc-200">
        <Link 
         href='http://mwambazi-collins.vercel.app/'
         target='_blank'
         rel='noopener noreferrer'>
           Built with 🎧 & ❤️ in kampala.
        </Link>
      </footer>
    )
  }