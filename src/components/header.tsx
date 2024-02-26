import { ToggleThemeButton } from './toggle-theme'
import { HeaderLink } from './header-link'

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 justify-self-start self-start w-full">
      <h1>Jean Martins</h1>

      <nav className="flex items-center gap-8 uppercase">
        <HeaderLink title="About" href="/about" />
        <HeaderLink title="Projects" href="/projects" />
        <HeaderLink title="Career" href="/career" />
      </nav>

      <div>
        <ToggleThemeButton />
      </div>
    </header>
  )
}
