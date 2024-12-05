import Link from 'next/link'

interface HeaderLinkProps {
  title: string
  href: string
}

export function HeaderLink({ title, href }: HeaderLinkProps) {
  return (
    <Link
      className="text-xs md:text-sm text-ring hover:text-primary transition-colors"
      href={href}
    >
      {title}
    </Link>
  )
}
