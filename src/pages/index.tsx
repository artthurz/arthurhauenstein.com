import Image from 'next/image'
import React from 'react'
import { SkillsCards } from './_compose'
import { useTranslator } from '@src/i18n'

export default function Home() {
  const translate = useTranslator()
  return (
    <React.Fragment>
      <section className="relative min-h-[70rem] -mt-[72px]">
        <div className="bg-contain min-h-[70rem] absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120] bg-[url('/img/beams-background/beams-light.png')] dark:bg-[url('/img/beams-background/beams-dark.jpg')]">
          <div className=" min-h-[70rem] absolute inset-0 bg-[url('/img/bg-grid-slate-900.svg')] bg-[bottom_1px_center] dark:bg-[url('/img/bg-grid-slate-400.svg')] dark:bg-bottom dark:border-b dark:border-slate-100/5 [mask-image:linear-gradient(transparent,black)] [webkit-mask-image:linear-gradient(transparent,black)]" />
        </div>
        <div className="relative max-w-6xl mx-auto pt-32 sm:pt-36 lg:pt-48 px-4 sm:px-6 md:px-8 ">
          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
            {translate('test')} Bem-vindo ao meu portifólio, acompanhe minha
            tragetória até aqui.
          </h1>
          <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
            Construo aplicações focadas na{' '}
            <span className="text-sky-500 dark:text-sky-400">
              experiência do usuário
            </span>{' '}
            e no <span className="text-sky-500 dark:text-sky-400">desgin</span>,
            proporcionando{' '}
            <span className="text-sky-500 dark:text-sky-400">
              experiências únicas
            </span>{' '}
            para as pessoas. Apenas fazer bem feito não é mais o suficiente.
          </p>

          <figure className="bg-opacity-50 dark:bg-opacity-50 md:flex rounded-x p-8 md:p-0 mt-24 md:mt-32 text-center shadow-xl text-slate-900 dark:text-slate-300 bg-white dark:bg-slate-800 ring-1 ring-slate-900/5 dark:shadow-white/5 dark:ring-0">
            <Image
              className="w-36 h-36 md:w-48 md:h-auto object-cover md:object-contain rounded-full md:rounded mx-auto"
              src="/img/me.jpg"
              alt="Eu"
              width={1487}
              height={1982}
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p className="text-lg font-medium">
                  “Nos últimos 7 anos, como desenvolvedor, trabalhei com grandes
                  empresas para ajudá-las a alcançar todo o seu potencial e
                  atrair novos clientes por meio da tecnologia.”
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                  Arthur Hauenstein
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                  Engenheiro de Software
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>
      <div className="pt-20 mb-20 flex flex-col gap-y-20 overflow-hidden sm:pt-32 sm:mb-32 sm:gap-y-32 md:pt-40 md:mb-40 md:gap-y-40 ">
        <section id="academic">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden dark:bg-indigo-500 dark:shadow-white/20">
              <div className="aspect-w-1 aspect-h-1 bg-[length:100%] bg-[url('/img/section/academic-light.png')] dark:bg-[url('/img/section/academic-dark.png')]" />
            </div>
            <h2 className="mt-8 font-semibold text-indigo-500 dark:text-indigo-400">
              Formação acadêmica
            </h2>
            <p className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ">
              Graduação e cursos realizados.
            </p>
            <p className="mt-4 max-w-3xl space-y-6 ">
              Direcionei minha carreira para a Engenharia de Software e em
              tornar-me um profissional em T, especialista em Frontend mas com
              conhecimentos essenciais e complementares a minha especialidade,
              como UI Design e UX Design.
            </p>
          </div>
          <div className="relative pt-10 xl:pt-0 mt-10 xl:mt-2">
            <div className="hidden dark:block absolute inset-x-0 h-[37.5rem] bg-gradient-to-b from-[#0c1120] top-0 xl:top-8" />
            <div className="absolute top-0 inset-x-0 bg-top bg-no-repeat bg-[url('/img/beams-background/beams-indigo-light.jpg')] dark:bg-[url('/img/beams-background/beams-indigo-dark.png')] [background-size:125.5rem] [height:30rem] xl:top-8" />
            <div className="absolute inset-x-0 h-[37.5rem] bg-[url('/img/bg-grid-slate-900.svg')] bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-[url('/img/bg-grid-slate-400.svg')] dark:bg-[center_top_-1px] dark:border-t dark:border-slate-100/5 top-0 xl:top-8" />
            <div className="h-96 max-w-7xl mx-auto px-4 sm:px-6 md:px-8"></div>
          </div>
        </section>
        <section id="skills">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden dark:bg-pink-500 dark:shadow-white/20">
              <div className="aspect-w-1 aspect-h-1 bg-[length:100%] bg-[url('/img/section/skills-light.png')] dark:bg-[url('/img/section/skills-dark.png')]" />
            </div>
            <h2 className="mt-8 font-semibold text-pink-500 dark:text-pink-400">
              Competências
            </h2>
            <p className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ">
              Tecnologias para construir o que quisermos.
            </p>
            <div className="mt-4 max-w-3xl space-y-6 ">
              <p>
                Como sou um entusiasta por técnologia estou sempre atento aos
                movimentos do mercado, com isso estudo e valido técnologias
                emergentes que podem agregar ao trabalho.
              </p>
              <p>
                Busco trabalhar com as melhores técnologias para resolver as
                mais diversas necessidades e problemas.
              </p>
            </div>
          </div>
          <div className="relative pt-10 xl:pt-0 mt-10 xl:mt-2">
            <div className="hidden dark:block absolute inset-x-0 h-[37.5rem] bg-gradient-to-b from-[#0c1120] top-0 xl:top-8" />
            <div className="absolute top-0 inset-x-0 bg-top bg-no-repeat bg-[url('/img/beams-background/beams-pink-light.jpg')] dark:bg-[url('/img/beams-background/beams-pink-dark.png')] [background-size:125.5rem] [height:30rem] xl:top-8" />
            <div className="absolute inset-x-0 h-[37.5rem] bg-[url('/img/bg-grid-slate-900.svg')] bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-[url('/img/bg-grid-slate-400.svg')] dark:bg-[center_top_-1px] dark:border-t dark:border-slate-100/5 top-0 xl:top-8" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <SkillsCards />
            </div>
          </div>
        </section>
        <section id="skills">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden dark:bg-pink-500 dark:shadow-white/20">
              <div className="aspect-w-1 aspect-h-1 bg-[length:100%] bg-[url('/img/section/skills-light.png')] dark:bg-[url('/img/section/skills-dark.png')]" />
            </div>
            <h2 className="mt-8 font-semibold text-pink-500 dark:text-pink-400">
              Competências
            </h2>
            <p className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ">
              Tecnologias para construir o que quisermos.
            </p>
            <div className="mt-4 max-w-3xl space-y-6 ">
              <p>
                Como sou um entusiasta por técnologia estou sempre atento aos
                movimentos do mercado, com isso estudo e valido técnologias
                emergentes que podem agregar ao trabalho.
              </p>
              <p>
                Busco trabalhar com as melhores técnologias para resolver as
                mais diversas necessidades e problemas.
              </p>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}
