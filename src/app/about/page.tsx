import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jean Martins - Sobre mim',
  description: 'História e conquistas.',
}

export default function About() {
  return (
    <main className="flex lg:flex-row flex-col items-center gap-6 max-w-6xl px-4 py-2">
      <div>
        <Image
          src="https://github.com/jeanmrtns.png"
          alt="Jean Martins"
          className="rounded-full mx-auto"
          width={2000}
          priority
          height={2000}
        />
      </div>

      <div className="flex flex-col gap-2 mt-6 lg:mt-0">
        <strong className="text-3xl text-center leading-relaxed lg:text-left">
          Here is a <span className="border-b border-red-500">little bit</span>{' '}
          about my history
        </strong>
        <p className="leading-relaxed">
          Hello, nice to meet you! I have been a FullStack Developer for over 2
          years and graduated in Computer Science at PUC. I started in the world
          of technology from college and since then I am 100% focused on the
          area. My focus of action is on the development of web systems, both on
          the front-end and back-end. Through college, I participated in
          Scientific Initiation aimed at capturing renewable energy and
          assembling the management system of the plants, which made me fall
          even more in love with software development (which was already very
          big haha).
        </p>
        <p className="leading-relaxed">
          Today I work as a Full-Stack developer at @Pluginbot, developing web
          systems, mobile applications with integrations with various
          third-party SDKs, and I also help other developers with their
          questions and also to learn about the technologies.
        </p>
        <p className="leading-relaxed">
          The main technologies I work with today are: React Native, Kotlin/Java
          (native), NestJS and Angular, however in my free time I am diving into
          the world of C#.
        </p>
        <p className="leading-relaxed">
          I am committed to my activities and always seek to solve problems in
          the most efficient way possible. I like to listen to music, play
          games, and watch movies/series when I can =)
        </p>
      </div>
    </main>
  )
}
