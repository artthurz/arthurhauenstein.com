# CLAUDE.md — Arthur Hauenstein Portfolio

## Visão Geral
Site de portfólio pessoal com Next.js 15 (App Router), React 19, TypeScript strict, Tailwind CSS 4 + DaisyUI 5, e internacionalização com next-intl 4 (en/pt/es).

## Comandos Essenciais

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # ESLint (next/core-web-vitals)
```

## Stack
- **Framework:** Next.js 15 App Router
- **UI:** React 19
- **Linguagem:** TypeScript 5 (strict mode)
- **Estilos:** Tailwind CSS 4 + DaisyUI 5
- **i18n:** next-intl 4 — locales: `en`, `pt`, `es` (padrão: `en`)
- **Formulários:** React Hook Form + Zod 4
- **Animações:** Motion 12 (`motion/react`)
- **Ícones:** lucide-react
- **Email:** SendGrid via `/api/email`
- **Deploy:** Vercel (analytics + speed insights)

## Estrutura de Pastas

```
src/
├── app/[locale]/          # Rotas Next.js por locale
├── components/
│   ├── ui/                # Componentes reutilizáveis (shadcn-inspired)
│   ├── sections/          # Seções da página (welcome, skills, contact…)
│   └── header/            # Navegação, theme-selector, locale-selector
├── hooks/                 # Custom hooks (use-mounted, use-media-query)
├── lib/utils.ts           # Helper cn() = clsx + tailwind-merge
├── i18n/
│   ├── routing.ts         # Configuração central de locales (next-intl 4)
│   └── request.ts         # getRequestConfig com messages por locale
├── middleware.ts / navigation.ts  # Config i18n
messages/                  # Arquivos de tradução JSON por locale
public/                    # Imagens e assets estáticos
```

## Convenções de Código

### Componentes
- `"use client"` explícito em componentes interativos; sem diretiva = Server Component por padrão
- **Nunca usar `"use server"` em componentes que retornam JSX** — essa diretiva é exclusiva de Server Actions
- `ref` é agora prop direto em React 19 — não usar `React.forwardRef`
- Padrão de index para seções: `components/sections/[nome]/index.tsx`

### Classes CSS

- Sempre usar o helper `cn()` de `@/lib/utils` para mesclar classes Tailwind
- Preferir utilitários DaisyUI (`btn`, `input`, `timeline`, etc.) antes de utilitários raw do Tailwind
- Tema escuro via seletor `[data-theme="dark"]` (DaisyUI) — **não** a classe `dark` do Tailwind
- **Tailwind 4:** configuração fica em `src/app/[locale]/globals.css`, não em `tailwind.config.ts`
- Novos utilitários customizados: usar `@utility` no `globals.css`

### TypeScript
- TypeScript strict — sem `any` sem justificativa explícita
- Props de componentes via `interface` explícita, não `type` inline
- Inferência Zod: `type TSchema = z.infer<typeof schema>`

### i18n
- Textos visíveis ao usuário sempre via `useTranslations()` — nunca hardcoded
- Adicionar novas chaves em **todos** os três arquivos: `messages/en.json`, `messages/pt.json`, `messages/es.json`
- Usar `Link` e `useRouter` de `@/navigation` — **nunca** de `next/navigation` diretamente

### Variáveis de Ambiente
- `SENDGRID_API_KEY` — chave da API SendGrid
- `SEND_TO` — e-mail destinatário
- `TEMPLATE_ID` — template SendGrid

## Padrões para Novos Componentes
1. Criar em `src/components/ui/` (genérico) ou `src/components/sections/[nome]/` (seção)
2. Exportar com nome explícito (não default anônimo)
3. Usar `cn()` para className
4. Responsividade mobile-first: `sm:` → `md:` → `lg:`
5. Animações complexas com Motion 12 (`import { motion } from "motion/react"`); transições simples com classes Tailwind Animate

## Seções Existentes
- `welcome` — Hero com animação Meteors
- `skills` — Carrossel infinito de habilidades
- `academic` — Formação acadêmica
- `courses` — Timeline de cursos
- `contact` — Formulário com validação Zod + envio SendGrid

## O que NÃO Fazer
- Não instalar bibliotecas de componentes adicionais sem discussão
- Não criar arquivos CSS externos — apenas Tailwind utilities
- Não importar de `next/navigation` — sempre usar `@/navigation`
- Não usar `any` em TypeScript
- Não hardcodar strings visíveis ao usuário

## Verificação Após Mudanças
```bash
npm run build   # Sem erros de build
npm run lint    # Sem warnings
```
- Verificar que novas chaves de tradução existem nos 3 arquivos de locale
- Testar troca de tema (claro/escuro) e de idioma (en/pt/es)
