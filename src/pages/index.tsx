import { Academic, Skills, Welcome } from '@src/components'
import React from 'react'

export default function Home() {
  return (
    <React.Fragment>
      <Welcome />
      <div className="pt-20 mb-20 flex flex-col gap-y-20 overflow-hidden sm:pt-32 sm:mb-32 sm:gap-y-32 md:pt-40 md:mb-40 md:gap-y-40">
        <Academic />
        <Skills />
        <section id="idk">
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
