import React from 'react'
import Content from './Content'

export function Courses() {
  return (
    <section id="courses">
      <div className="mb-6 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden dark:bg-sky-500 dark:shadow-white/20">
          <div className="aspect-w-1 aspect-h-1 bg-[length:100%] bg-[url('/img/section/courses-light.png')] dark:bg-[url('/img/section/courses-dark.png')]" />
        </div>
        <h2 className="mt-8 font-semibold text-sky-500 dark:text-sky-400">
          Desenvolvimento profissional
        </h2>
        <p className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ">
          Cursos técnicos relizados.
        </p>
        <p className="mt-4 max-w-3xl space-y-6">
          Para me aprofundar nas técnologias com que trabalho busco os melhores
          cursos disponíveis no mercado, zelando por conhecimentos sólidos desde
          a base de uma linguagem de programação ou framekwork.
        </p>
      </div>
      <div className="relative pt-10 xl:pt-0 mt-10 xl:mt-2">
        <div className="hidden dark:block absolute inset-x-0 h-[37.5rem] bg-gradient-to-b from-[#0c1120] top-0 xl:top-8" />
        <div className="absolute top-0 inset-x-0 bg-top bg-no-repeat bg-[url('/img/beams-background/beams-sky-light.jpg')] dark:bg-[url('/img/beams-background/beams-sky-dark.png')] [background-size:125.5rem] [height:30rem] xl:top-8" />
        <div className="absolute inset-x-0 h-[37.5rem] bg-[url('/img/bg-grid-slate-900.svg')] bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-[url('/img/bg-grid-slate-400.svg')] dark:bg-[center_top_-1px] dark:border-t dark:border-slate-100/5 top-0 xl:top-8" />
        <div className="relative mt-12 justify-center items-center flex h-max max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <Content />
        </div>
      </div>
    </section>
  )
}
