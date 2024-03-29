import Image from 'next/image'

export default function University() {
  return (
    <div className="rounded mx-auto grid grid-cols-1 lg:gap-x-20 lg:grid-cols-2">
      <div
        className="z-10 lg:mt-16 relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1"
        data-aos="zoom-in"
      >
        <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
          Univates
        </h1>
        <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">
          Universidade do Vale do Taquari
        </p>
      </div>
      <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
        <Image
          className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
          loading="lazy"
          data-aos="zoom-in-down"
          data-aos-delay="300"
          data-aos-duration="1000"
          src="/img/university/1.jpg"
          alt="Biblioteca e Teatro Externo"
          height={4000}
          width={4000}
        />
        <Image
          className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
          loading="lazy"
          data-aos="zoom-in-right"
          data-aos-delay="700"
          data-aos-duration="1000"
          src="/img/university/2.jpg"
          alt="Biblioteca Interno"
          height={4000}
          width={4000}
        />
        <Image
          className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32"
          loading="lazy"
          data-aos="zoom-in-left"
          data-aos-delay="1000"
          src="/img/university/3.jpg"
          alt="Teatro Interno"
          height={4000}
          width={4000}
        />
      </div>
      <dl
        className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2"
        data-aos="zoom-in"
      >
        <dt className="sr-only">Reviews</dt>
        <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
          <svg
            width="24"
            height="24"
            fill="none"
            aria-hidden="true"
            className="mr-1 stroke-current dark:stroke-indigo-500"
          >
            <path
              d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span>
            4 <span className="text-slate-400 font-normal">(Nota MEC)</span>
          </span>
        </dd>
        <dt className="sr-only">Location</dt>
        <dd className="flex items-center">
          <svg
            width="2"
            height="2"
            aria-hidden="true"
            fill="currentColor"
            className="mx-3 text-slate-300"
          >
            <circle cx="1" cy="1" r="1"></circle>
          </svg>
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-1 text-slate-400 dark:text-slate-500"
            aria-hidden="true"
          >
            <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z"></path>
            <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path>
          </svg>
          Lajeado, RS
        </dd>
      </dl>
      <div
        className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4"
        data-aos="zoom-in"
      >
        <a
          type="button"
          className="flex gap-2 w-fit duration-200 bg-indigo-600 hover:bg-indigo-500 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
          href="https://www.univates.br/"
          target="_blank"
        >
          Acessar univates.br
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-3 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>
      <p
        className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400"
        data-aos="zoom-in"
      >
        Fundada em <b>1969</b> a Universidade do Vale do Taquari é{' '}
        <b>referência</b> em ensino. Para comportar seus mais de{' '}
        <b>12 mil alunos</b>, o campus da Univates conta com{' '}
        <b>moderna estrutura</b> de laboratórios e ambientes especiais equipados
        com recursos tecnológicos, que permitem aos estudantes inúmeras
        experiências práticas de aprendizagem. São mais de{' '}
        <b>200 laboratórios</b>, museus e salas especiais à disposição dos
        estudantes e professores.
      </p>
    </div>
  )
}
