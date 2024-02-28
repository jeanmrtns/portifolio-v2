import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jean Martins - My Professional Journey',
  description: 'Professional history in software development.',
}

export default function Career() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-2">
      <h1 className="text-4xl font-bold leading-relaxed">
        My professional history:
      </h1>

      <ul className="mt-4 flex flex-col gap-6">
        <li>
          <strong className="text-primary text-xl">
            - Pluginbot{' '}
            <span className="text-primary text-base">(10-2023 to present)</span>
          </strong>
          <p className="leading-relaxed">
            I worked on the development of mobile applications in React Native
            focused on facial and biometric recognition and also assisted in the
            maintenance and development of new features on the company&apos;s
            management platform both on the Back-end and Front-end using NestJS
            and Angular, respectively.
          </p>
        </li>

        <li>
          <strong className="text-primary text-xl">
            - Udooku LLC{' '}
            <span className="text-primary text-base">(05-2022 to 01-2024)</span>
          </strong>
          <p className="leading-relaxed">
            I contributed with attractive interfaces, coding with HTML5, CSS3,
            JavaScript, React, TypeScript, NextJS, as well as API with Twilio
            and GCP.
          </p>
          <p className="leading-relaxed">
            I implemented responsive designs and collaborated on API
            integration. I worked in a team, explored new technologies, and
            constantly sought to learn and grow in the field.
          </p>
        </li>

        <li>
          <strong className="text-primary text-xl">
            - EasyQuant BR{' '}
            <span className="text-primary text-base">(02-2022 to 06-2022)</span>
          </strong>
          <p className="leading-relaxed">
            I was responsible for the development and maintenance of systems
            focused on the investment area, optimizing the experience of clients
            in the stock market.
          </p>
          <p className="leading-relaxed">
            On the Frontend, I used ReactJS in conjunction with Redux and
            Material UI to create modern and interactive interfaces, ensuring an
            enhanced user experience.
          </p>
          <p className="leading-relaxed">
            In the Backend, I worked with NodeJS using the ExpressJS framework
            to build a solid and efficient base. In addition, I used MongoDB as
            a database, ensuring the manipulation and secure storage of
            essential information.
          </p>
        </li>

        <li>
          <strong className="text-primary text-xl">
            - Dr. Propaganda{' '}
            <span className="text-primary text-base">(10-2021 to 02-2022)</span>
          </strong>
          <p className="leading-relaxed">
            Participating in the development of the administration system for
            advertisements and promotions. I used PHP, HTML5, CSS3, Bootstrap,
            and MySQL to create an intuitive and responsive platform.
            Collaborating in a team, I acquired valuable knowledge and
            strengthened my web development skills.
          </p>
        </li>
      </ul>
    </main>
  )
}
