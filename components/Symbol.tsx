export default function Symbol({ children }: { children: React.ReactNode }) {
    return (
        <span role="img" aria-label="Mathmatical symbol + - * /">{children}</span>
      //<h3 className="text-2xl font-bold leading-7 text-blue-300 sm:truncate sm:text-3xl sm:tracking-tight">{children}</h3>
    )
  }
  