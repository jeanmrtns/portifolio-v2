'use client'
import { motion } from 'framer-motion'

import { Command } from 'cmdk'
import { Home, LampWallDown, Paperclip, User2Icon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export function Cmdk() {
  const pathname = usePathname()
  const [isCmdkOpen, setIsCmdkOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsCmdkOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <div>
      {pathname === '/' ? (
        <motion.label
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.75 }}
          htmlFor="homeCmdk"
          className="flex items-center justify-center gap-2 z-[1000]"
        >
          Press{' '}
          <kbd className="bg-primary rounded px-2 py-2 text-zinc-300 dark:text-zinc-900">
            ctrl
          </kbd>{' '}
          +{' '}
          <kbd className="bg-primary rounded px-2 py-2 text-zinc-300 dark:text-zinc-900">
            K
          </kbd>{' '}
          to start →
        </motion.label>
      ) : null}
      <Command.Dialog
        id="homeCmdk"
        open={isCmdkOpen}
        onOpenChange={setIsCmdkOpen}
        label=""
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <Command.Input />

        <Command.List>
          <Command.Empty>No results found.</Command.Empty>

          <Command.Group heading="Go to" className="text-primary">
            <Command.Item>
              <Link
                className="flex items-center gap-2"
                href="/"
                onClick={() => setIsCmdkOpen(false)}
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
            </Command.Item>
            <Command.Item>
              <Link
                className="flex items-center gap-2"
                href="/about"
                onClick={() => setIsCmdkOpen(false)}
              >
                <User2Icon className="h-4 w-4" />
                About
              </Link>
            </Command.Item>
            <Command.Item>
              <Link
                className="flex items-center gap-2"
                href="/projects"
                onClick={() => setIsCmdkOpen(false)}
              >
                <LampWallDown className="h-4 w-4" />
                Projects
              </Link>
            </Command.Item>
            <Command.Item>
              <Link
                className="flex items-center gap-2"
                href="/career"
                onClick={() => setIsCmdkOpen(false)}
              >
                <Paperclip className="h-4 w-4" />
                Career
              </Link>
            </Command.Item>
            <Command.Separator />
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </div>
  )
}
