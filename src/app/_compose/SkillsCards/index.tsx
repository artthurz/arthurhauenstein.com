import React from 'react'
import { Card } from '@/components'
import Image from 'next/image'
import NextLogo from './assets/next'

export function SkillsCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
      <div className="w-auto flex justify-center items-center">
        <Card key="typescript" className="[color:#2563eb]" title="TypeScript">
          <Image
            className="w-20 h-20 object-contain mx-auto"
            src="/img/skills/typescript.svg"
            alt="TypeScript"
            width={80}
            height={80}
          />
        </Card>
      </div>
      <div className="w-auto flex justify-center items-center">
        <Card key="react" className="[color:#0ea5e9]" title="React">
          <Image
            className="w-20 h-20 object-contain mx-auto"
            src="/img/skills/react.svg"
            alt="React"
            width={80}
            height={80}
          />
        </Card>
      </div>
      <div className="w-auto flex justify-center items-center">
        <Card
          key="next"
          className="[color:#1e293b] dark:dark:[color:white]"
          title="Next.js"
        >
          <NextLogo className="w-20 h-20 object-contain mx-auto" />
        </Card>
      </div>
      <div className="w-auto flex justify-center items-center">
        <Card
          key="reactnative"
          className="[color:#7c3aed]"
          title="React Native"
        >
          <Image
            className="w-20 h-20 object-contain mx-auto"
            src="/img/skills/reactnative.svg"
            alt="React Native"
            width={80}
            height={80}
          />
        </Card>
      </div>
      <div className="w-auto flex justify-center items-center">
        <Card key="tailwindcss" className="[color:#0ea5e9]" title="tailwindcss">
          <Image
            className="w-20 h-20 object-contain mx-auto"
            src="/img/skills/tailwindcss.svg"
            alt="tailwindcss"
            width={80}
            height={80}
          />
        </Card>
      </div>
      <div className="w-auto flex justify-center items-center">
        <Card key="node" className="[color:#065f46]" title="Node">
          <Image
            className="w-20 h-20 object-contain mx-auto"
            src="/img/skills/node.svg"
            alt="Node"
            width={80}
            height={80}
          />
        </Card>
      </div>
      <div className="w-auto flex justify-center items-center">
        <Card key="nest" className="[color:#be123c]" title="NestJS">
          <Image
            className="w-20 h-20 object-contain mx-auto"
            src="/img/skills/nest.svg"
            alt="NestJS"
            width={80}
            height={80}
          />
        </Card>
      </div>
      <div className="w-auto flex justify-center items-center">
        <Card key="html" className="[color:#fb7185]" title="HTML">
          <Image
            className="w-20 h-20 object-contain mx-auto"
            src="/img/skills/html.svg"
            alt="HTML"
            width={80}
            height={80}
          />
        </Card>
      </div>
      <div className="w-auto flex justify-center items-center">
        <Card key="css" className="[color:#1e40af]" title="CSS">
          <Image
            className="w-20 h-20 object-contain mx-auto"
            src="/img/skills/css.svg"
            alt="CSS"
            width={80}
            height={80}
          />
        </Card>
      </div>
      <div className="w-auto flex justify-center items-center">
        <Card key="postgresql" className="[color:#1e3a8a]" title="PostgreSQL">
          <Image
            className="w-20 h-20 object-contain mx-auto"
            src="/img/skills/postgresql.svg"
            alt="PostgreSQL"
            width={80}
            height={80}
          />
        </Card>
      </div>
    </div>
  )
}
