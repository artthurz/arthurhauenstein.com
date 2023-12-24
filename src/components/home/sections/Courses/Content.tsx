import { SVGProps, useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const courses = [
  {
    name: 'balta.io',
    techs: 'C# & .NET',
    date: '10/2023'
  },
  {
    name: 'UX Unicórnio by Leandro Rezende',
    techs: 'UI/UX Desing',
    date: '04/2023'
  },
  {
    name: 'Backend Development by Ariel Weinberger',
    techs: 'NestJS',
    date: '09/2021'
  },
  {
    name: 'Rocketseat - Mobile',
    techs: 'React Native',
    date: '04/2021'
  },
  {
    name: 'Rocketseat - Frontend',
    techs: 'React & NextJS',
    date: '04/2021'
  },
  {
    name: 'Rocketseat - Backend',
    techs: 'Node.js',
    date: '04/2021'
  },
  {
    name: 'Rocketseat - Fullstack',
    techs: 'React, React Native & Node.js',
    date: '10/2019'
  }
]

export default function Example() {
  const [selected, setSelected] = useState(courses[0])

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {courses.map(plan => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300'
                      : ''
                  }
                  ${
                    checked
                      ? 'bg-sky-900/75 text-white'
                      : 'bg-white dark:bg-slate-800 dark:text-white'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked
                                ? 'text-white dark:text-white'
                                : 'text-gray-900 dark:text-white'
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked
                                ? 'text-sky-100'
                                : 'text-gray-500 dark:text-gray-400'
                            }`}
                          >
                            <span>{plan.techs}</span>{' '}
                            <span aria-hidden="true">&middot;</span>{' '}
                            <span>{plan.date}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
