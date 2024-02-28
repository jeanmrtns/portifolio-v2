'use client'
import { BackgroundCircles } from '@/components/background-circles'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

export default function Home() {
  const [text] = useTypewriter({
    words: ['Jean Martins'],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <main className="relative flex-1 flex items-center justify-center flex-col">
      <div className="mb-8 flex flex-col gap-4">
        <BackgroundCircles />
        <h1 className="text-5xl font-bold text-center">
          {text} <Cursor cursorColor="#e45960" />
        </h1>
        <span className="text-sm text-center">
          Full-Stack Developer @Pluginbot
        </span>
      </div>
    </main>
  )
}
