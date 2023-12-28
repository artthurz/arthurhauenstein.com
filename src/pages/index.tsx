import { Academic, Contact, Courses, Skills, Welcome } from '@src/components'
import React from 'react'

export default function Home() {
  return (
    <React.Fragment>
      <Welcome />
      <div className="pt-20 flex flex-col gap-y-20 overflow-hidden sm:pt-32 sm:gap-y-32 md:pt-40 md:gap-y-40">
        <Skills />
        <Academic />
        <Courses />
        <Contact />
      </div>
    </React.Fragment>
  )
}
