export default function Text({ children }: { children: string }) {
    return (
      <p className="text-2xl font-bold leading-7 text-white-100 sm:truncate sm:text-3xl sm:tracking-tight">{children}</p>
    )
  }