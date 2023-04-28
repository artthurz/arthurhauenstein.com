import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <section className="relative min-h-[70rem] -mt-[72px]">
        <div className="bg-contain min-h-[70rem] absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120] bg-[url('/img/beams-light.png')] dark:bg-[url('/img/beams-dark.jpg')]">
          <div
            className=" min-h-[70rem] absolute inset-0 bg-[url('/img/bg-grid-slate-900.svg')] bg-[bottom_1px_center] dark:bg-[url('/img/bg-grid-slate-400.svg')] dark:bg-bottom dark:border-b dark:border-slate-100/5"
            style={{
              maskImage: "linear-gradient(transparent, black)",
              WebkitMaskImage: "linear-gradient(transparent, black)",
            }}
          />
        </div>
        <div className="relative max-w-5xl mx-auto pt-32 sm:pt-36 lg:pt-48 px-4 sm:px-6 md:px-8 ">
          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
            Saia do oridinário e se destaque perante os concorrentes.
          </h1>
          <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
            Construo aplicações focadas na{" "}
            <span className="text-sky-500 dark:text-sky-400">
              experiência do usuário
            </span>
            , com{" "}
            <span className="text-sky-500 dark:text-sky-400">
              desgin inovador
            </span>
            , apenas fazer bem feito já não é mais o suficiente.
          </p>

          <figure className="md:flex rounded-x p-8 md:p-0 mt-8 text-center shadow-xl text-slate-900 dark:text-slate-300 bg-white dark:bg-slate-800 ring-1 ring-slate-900/5 dark:highlight-white/5 dark:ring-0">
            <Image
              className="w-24 h-24 md:w-48 md:h-auto object-cover md:object-contain rounded-full md:rounded mx-auto"
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
      <section className="px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto  ">
          <h2 className="mt-8 font-semibold text-sky-500">Sobre mim</h2>
          <p className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ">
            Ainda não me conhece? Não seja por isso.
          </p>
          <p className="mt-4 max-w-3xl space-y-6 ">
            If you&apos;re repeating the same utilities over and over and over
            again, all you have to do is extract them into a component or
            template partial and boom — you&apos;ve got a single source of truth
            so you can make changes in one place.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}
