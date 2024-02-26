'use client'

import { Command } from 'cmdk'
import { useEffect, useState } from 'react'

export function HomeCmdk() {
  const [isCmdkOpen, setIsCmdkOpen] = useState(false)

  const handleOpenCmdk = () => setIsCmdkOpen(true)

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
    <div className="mr-20">
      <label htmlFor="homeCmdk" onClick={handleOpenCmdk}>
        Press{' '}
        <kbd className="bg-primary rounded px-2 py-2 text-zinc-900">ctrl</kbd> +{' '}
        <kbd className="bg-primary rounded px-2 py-2 text-zinc-900">K</kbd> to
        start →
      </label>
      <Command.Dialog
        id="homeCmdk"
        open={isCmdkOpen}
        onOpenChange={setIsCmdkOpen}
        label=""
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <Command.Input />

        <Command.List className="">
          <Command.Empty>No results found.</Command.Empty>

          <Command.Group heading="Fruits">
            <Command.Item>Apple</Command.Item>
            <Command.Item>Orange</Command.Item>
            <Command.Separator />
            <Command.Item>Pear</Command.Item>
            <Command.Item>Blueberry</Command.Item>
          </Command.Group>

          <Command.Item>Fish</Command.Item>
        </Command.List>
      </Command.Dialog>
    </div>
  )
}
