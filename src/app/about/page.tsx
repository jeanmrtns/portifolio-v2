import Image from 'next/image'

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
          Aqui está um <span className="border-b border-red-500">pouco</span>{' '}
          sobre minha história
        </strong>
        <p className="leading-relaxed">
          Olá, prazer! Sou Desenvolvedor FullStack há mais de 2 anos e formado
          em Ciência da Computação na PUC. Iniciei no mundo da tecnologia a
          partir da faculdade e desde então estou focado 100% na área. Meu foco
          de atuação está sendo no desenvolvimento sistemas web, tanto em
          front-end quanto em back-end. Pela faculdade participei de Iniciação
          Científica voltada para a captação de energia renovável e montagem do
          sistema de gerenciamento das usinas, o que me fez me apaixonar ainda
          mais pelo desenvolvimento de software (que já era muito grande rs).
        </p>
        <p className="leading-relaxed">
          Hoje atuo como desenvolvedor Full-Stack pela @Pluginbot, desenvolvendo
          sistemas web, aplicações móveis com integrações com várias SDKs de
          terceiros, e também ajudo os outros desenvolvedores com suas questões
          e também a aprender sobre as tecnologias.
        </p>
        <p className="leading-relaxed">
          As principais tecnologias que atuo hoje são: React Native, Kotlin/Java
          (nativo), NestJS e Angular, porém nos meus tempos livres estou
          mergulhando no mundo de C#.
        </p>
        <p className="leading-relaxed">
          Sou comprometido com minhas atividades e busco sempre resolver
          problemas da forma mais eficiente possível. Gosto de ouvir músicas,
          jogar e assistir filmes/séries quando dá =)
        </p>
      </div>
    </main>
  )
}
