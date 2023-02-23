import Link from 'next/link'

export default function Footer() {
    return (
      <footer className="flex w-full justify-center gap-4 px-4 pt-4 pb-20 border-t-2 border-gray-400 py-12 h-20  text-zinc-200">
        <Link 
         href='http://mwambazi-collins.vercel.app/'
         target='_blank'
         rel='noopener noreferrer'>
           Built with 🎧 & ❤️ in kampala.
        </Link>
        <hr />

        <Link 
         href='http://mwambazi-collins.vercel.app/'
         target='_blank'
         rel='noopener noreferrer'>
           <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-100 bg-indigo-700 border border-transparent rounded-md cursor-pointer hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed">
          Discord 🌌
        </button>
        </Link> 

        
      </footer>
    )
  }