import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jean Martins - Minha tragetória profissional',
  description: 'Histórico profissional em desenvolvimento de softwares.',
}

export default function Career() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-2">
      <h1 className="text-4xl font-bold leading-relaxed">
        Meu histórico profissional:
      </h1>

      <ul className="mt-4 flex flex-col gap-6">
        <li>
          <strong className="text-primary text-xl">
            - Pluginbot{' '}
            <span className="text-primary text-base">(10-2023 até agora)</span>
          </strong>
          <p className="leading-relaxed">
            Atuei no desenvolvimento de aplicações móveis em React Native
            voltadas a reconhecimentos facial e biométrico e também auxiliei na
            manutenção e desenvolvimento de novas features na plataforma de
            gestão da empresa tanto no Back-end quanto no Front-end utilizando
            NestJS e Angular, respectivamente.
          </p>
        </li>

        <li>
          <strong className="text-primary text-xl">
            - Udooku LLC{' '}
            <span className="text-primary text-base">
              (05-2022 até 01-2024)
            </span>
          </strong>
          <p className="leading-relaxed">
            Contribuí com interfaces atrativas, codificando com HTML5, CSS3,
            JavaScript, React, TypeScript, NextJS, bem como API com Twilio e
            GCP.
          </p>
          <p className="leading-relaxed">
            Implementei designs responsivos e colaborei na integração com APIs.
            Trabalhei em equipe, explorei novas tecnologias e busquei
            constantemente aprender e crescer na área.
          </p>
        </li>

        <li>
          <strong className="text-primary text-xl">
            - EasyQuant BR{' '}
            <span className="text-primary text-base">
              (02-2022 até 06-2022)
            </span>
          </strong>
          <p className="leading-relaxed">
            Fui responsável pelo desenvolvimento e manutenção de sistemas
            focados na área de investimentos, otimizando a experiência dos
            clientes na bolsa de valores.
          </p>
          <p className="leading-relaxed">
            No Frontend, utilizei ReactJS em conjunto com Redux e Material UI
            para criar interfaces modernas e interativas, garantindo uma
            experiência de usuário aprimorada.
          </p>
          <p className="leading-relaxed">
            Já no Backend, trabalhei com NodeJS utilizando o framework ExpressJS
            para construir uma base sólida e eficiente. Além disso, utilizei o
            MongoDB como banco de dados, assegurando a manipulação e
            armazenamento seguro de informações essenciais.
          </p>
        </li>

        <li>
          <strong className="text-primary text-xl">
            - Dr. Propaganda{' '}
            <span className="text-primary text-base">
              (10-2021 até 02-2022)
            </span>
          </strong>
          <p className="leading-relaxed">
            Participando do desenvolvimento do sistema de administração para
            anúncios e propagandas. Utilizei PHP, HTML5, CSS3, Bootstrap e MySQL
            para criar uma plataforma intuitiva e responsiva. Colaborando em
            equipe, adquiri conhecimentos valiosos e fortaleci minhas
            habilidades em desenvolvimento web.
          </p>
        </li>
      </ul>
    </main>
  )
}
