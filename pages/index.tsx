import Link from 'next/link'


export default function Home() {
  
  return (
    <main className="flex flex-col gap-8">

      {/* <Link href="/math">
      <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md cursor-pointer hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Mathematics🔢
        </button> 
        </Link> */}

        <Link href="/history">
      <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md cursor-pointer hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
         History 🏺🔆
        </button> 
        </Link>

        {/* <Link href="/computerScience">
      <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md cursor-pointer hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
         Computer Science 👨‍💻
        </button> 
        </Link> */}
      
    </main>
  )
}
