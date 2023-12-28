import Timeline from './Timeline'

const courses = [
  {
    name: 'Carreira .NET Developer',
    institution: 'Balta',
    //description: 'C# & .NET',
    description:
      'Desenvolvimento e Arquitetura backend em C# e .NET pelo 11x Microsfot MVP André Baltieri.',
    date: '10/2023',
    color: 'blue',
    background: 'bg-blue-100 dark:bg-blue-900',
    textColor: 'text-blue-800 dark:text-blue-300'
  },
  {
    name: 'UX Unicórnio',
    institution: 'por Leandro Rezende',
    //description: 'UI/UX Desing',
    description:
      'Formação em UI/UX Design do zero ao nível profissional de Design de Experiência do Usuário.',
    date: '04/2023',
    background: 'bg-pink-100 dark:bg-pink-900',
    textColor: 'text-pink-800 dark:text-pink-300'
  },
  {
    name: 'Backend Development - NestJS',
    institution: 'por Ariel Weinberger',
    //description: 'NestJS',
    description: 'Desenvolvimento moderno de backend em com foco em NestJS.',
    date: '09/2021',
    background: 'bg-red-100 dark:bg-red-900',
    textColor: 'text-red-800 dark:text-red-300'
  },
  {
    name: 'Ignite React Native',
    institution: 'Rocketseat',
    //description: 'React Native',
    description:
      'Curso completo de React Native. Utilizado diversas ferramentas importantes como TypeScript, Expo, Styled Components, Async Storage, Autenticação Social, Animações, Context API, Hooks, Jest e diversas outras.',
    date: '04/2021',
    background: 'bg-purple-100 dark:bg-purple-900',
    textColor: 'text-purple-800 dark:text-purple-300'
  },
  {
    name: 'Ignite React',
    institution: 'Rocketseat',
    //description: 'React & NextJS',
    description:
      'Curso completo de React.JS. Utilizado diversas ferramentas importantes como TypeScript, Next.JS, Styled Components, SASS, Context API, Hooks, Jest e diversas outras.',
    date: '04/2021',
    background: 'bg-purple-100 dark:bg-purple-900',
    textColor: 'text-purple-800 dark:text-purple-300'
  },
  {
    name: 'Ignite Node',
    institution: 'Rocketseat',
    //description: 'Node.js',
    description:
      'Curso completo de Node.JS. Utilizado diversas ferramentas importantes como TypeScript, Rest, SOLID, Docker, TypeORM, JWT, bcrypt, Jest e diversas outras.',
    date: '04/2021',
    background: 'bg-purple-100 dark:bg-purple-900',
    textColor: 'text-purple-800 dark:text-purple-300'
  },
  {
    name: 'Bootcamp GoStack',
    institution: 'Rocketseat',
    //description: 'React, React Native & Node.js',
    description:
      'Bootcamp intensivo de 6 meses com foco em React.JS, React Native e Node.JS do zero ao deploy. Incluindo testes automatizados, integração contínua, publicação nas stores, e todas as biliotecas e frameworks importantes.',
    date: '10/2019',
    background: 'bg-purple-100 dark:bg-purple-900',
    textColor: 'text-purple-800 dark:text-purple-300'
  }
]

export default function Content() {
  return (
    <Timeline.Line>
      {courses.map((course, index) => (
        <Timeline.Mark key={index} {...course}>
          asd
        </Timeline.Mark>
      ))}
    </Timeline.Line>
  )
}
