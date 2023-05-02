import React from 'react'
import { Card } from '@/components'
import Image from 'next/image'

export function SkillsCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
      <div className="w-auto flex justify-center items-center">
        <Card key="typescript" shadowColor="#01ADD7" title="TypeScript">
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
        <Card key="react" shadowColor="#61D9FA" title="React">
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
        <Card key="next" shadowColor="#eee" title="Next.js">
          <Image
            className="w-20 h-20 object-contain mx-auto"
            src="/img/skills/next.svg"
            alt="Next.js"
            width={80}
            height={80}
          />
        </Card>
      </div>
      <div className="w-auto flex justify-center items-center">
        <Card key="reactnative" shadowColor="#9261FB" title="React Native">
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
        <Card key="tailwindcss" shadowColor="#38BDF8" title="tailwindcss">
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
        <Card key="node" shadowColor="#408F3B" title="Node">
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
        <Card key="nest" shadowColor="#E93333" title="NestJS">
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
        <Card key="html" shadowColor="#E44E28" title="HTML">
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
        <Card key="css" shadowColor="#2B51E5" title="CSS">
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
        <Card key="postgresql" shadowColor="#2D6294" title="PostgreSQL">
          <Image
            className="w-20 h-20 object-contain mx-auto"
            src="/img/skills/postgresql.svg"
            alt="PostgreSQL"
            width={80}
            height={80}
          />
        </Card>
      </div>
      <div className="w-auto flex justify-center items-center">
        <Card key="mongo" shadowColor="#419842" title="MongoDB">
          <Image
            className="w-20 h-20 object-contain mx-auto"
            src="/img/skills/mongo.svg"
            alt="MongoDB"
            width={80}
            height={80}
          />
        </Card>
      </div>
    </div>
  )
}
