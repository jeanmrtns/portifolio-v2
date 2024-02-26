import { HomeCmdk } from '@/components/home-cmdk'

export default function Home() {
  return (
    <main className="relative">
      <div className="mb-8 flex flex-col gap-4">
        <h1 className="text-5xl font-bold">Jean Martins</h1>
        <span className="text-sm">Full-Stack Developer @Pluginbot</span>
      </div>
      <HomeCmdk />
    </main>
  )
}
