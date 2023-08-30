import React from 'react'

export function Academic() {
  return (
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
          Direcionei minha carreira para a Engenharia de Software e em tornar-me
          um profissional em T, especialista em Frontend mas com conhecimentos
          essenciais e complementares a minha especialidade, como UI Design e UX
          Design.
        </p>
      </div>
      <div className="relative pt-10 xl:pt-0 mt-10 xl:mt-2">
        <div className="hidden dark:block absolute inset-x-0 h-[37.5rem] bg-gradient-to-b from-[#0c1120] top-0 xl:top-8" />
        <div className="absolute top-0 inset-x-0 bg-top bg-no-repeat bg-[url('/img/beams-background/beams-indigo-light.jpg')] dark:bg-[url('/img/beams-background/beams-indigo-dark.png')] [background-size:125.5rem] [height:30rem] xl:top-8" />
        <div className="absolute inset-x-0 h-[37.5rem] bg-[url('/img/bg-grid-slate-900.svg')] bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-[url('/img/bg-grid-slate-400.svg')] dark:bg-[center_top_-1px] dark:border-t dark:border-slate-100/5 top-0 xl:top-8" />
        <div className="h-96 max-w-7xl mx-auto px-4 sm:px-6 md:px-8"></div>
      </div>
    </section>
  )
}
