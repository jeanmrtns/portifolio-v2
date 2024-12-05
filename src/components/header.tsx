import { ToggleThemeButton } from './toggle-theme'
import { HeaderLink } from './header-link'
import Link from 'next/link'
import Image from 'next/image'
import logoImg from '@/assets/logo.png'
import { SidebarTrigger } from './ui/sidebar'

export function Header() {
  return (
    <header className="flex items-center justify-between gap-2 px-6 py-3 justify-self-start self-start w-full z-[9999]">
      <Link href="/">
        <Image src={logoImg} width={100} height={100} alt="Jean Martins logo" />
      </Link>

      <nav className="hidden md:flex items-center gap-8 uppercase">
        <HeaderLink title="About" href="/about" />
        <HeaderLink title="Projects" href="/projects" />
        <HeaderLink title="Career" href="/career" />
      </nav>

      <div className="hidden md:block">
        <ToggleThemeButton />
      </div>
      <SidebarTrigger className="block md:hidden" />
    </header>
  )
}
