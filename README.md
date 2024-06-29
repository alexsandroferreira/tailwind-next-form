#  Forms Responsive with Tailwind and Nextjs
![](https://github.com/alexsandroferreira/tailwind-next-form/workflows/CHANGELOG%20Generator/badge.svg)
[![Release](https://img.shields.io/github/v/release/alexsandroferreira/tailwind-next-form?color=lgreen)](https://github.com/alexsandroferreira/tailwind-next-form/releases)

O projeto Forms Responsive com Next e Tailwind tem como objetivo aproveitar o conhecimento adquirido em React JS e aprimorar a estilização e a responsividade dos componentes com Tailwind.

Utilizaremos Framer Motion para implementar algumas animações.

Além disso, será usada integração contínua para automatizar o versionamento de código com a biblioteca Release-it.

## Demo 📸

<h1 aling="center">
  <img alt="Readme-project-forms" src="./public/assets/img/app-form.gif">
</h1>

## Adições pessoais para melhor desenvolvimento do projeto

- Integração contínua para automatização do changelog.
- Lint seguindo o guia de estilo da rocketseat/node.
- Automação através do Husky:
    - Script de lint para correção de erros.
    - Script de verificação de commits usando o formato convencional.
- Plugin de lint para organização dos imports.


## Tabela de Conteúdos

- [Tecnologias](#tecnologias)
- [Instalação e Configuração](#instala%C3%A7%C3%A3o-e-configura%C3%A7%C3%A3o)
  - [Requisitos](#requisitos)
  - [Instalação](#instala%C3%A7%C3%A3o)
- [Licença](#licen%C3%A7a)

## Tecnologias 🛠️

Este projeto foi construído com as seguintes tecnologias:

- [Node.js »](https://nodejs.org)
- [Typescript »](https://www.typescriptlang.org)
- [Zod »](https://zod.dev/)
- [Eslint »](https://eslint.org/docs/latest/)
- [Eslint style guide »](https://github.com/Rocketseat/eslint-config-rocketseat)
- [@eslint-plugin-simple-import-sort »](https://github.com/lydell/eslint-plugin-simple-import-sort)
- [husky »](https://typicode.github.io/husky/)
- [Tailwind »](https://tailwindcss.com/)
- [Commitlint »](https://commitlint.js.org/)
- [release-it »](https://github.com/release-it/release-it)

## Instalação e configuração

### Requisitos

- [Node.js »](https://nodejs.org/en/download) na sua versão LTS
- Extensão do ESlint, Tailwind CSS IntelliSense e PostCSS Language Support instalada no vs code

- Extensão do ESlint instalada no vs code

- Para permitir que o changelog rode automaticamente, verifique as configurações do repositório na aba Settings -> Actions -> General Workflow Permissions e marque a opção de permissões de leitura e escrita (Read and Write Permissions).

### Requisitos funcionais

- [x] Responsivdade;
- [x] Modo Dark;
- [x] Dark-mode toggle;
- [x] Label trigger em todos inputs;
- [x] Animações;

### Regras de negócio



### Requisitos não-funcionais


## Instalação

1. Clone o projeto: `git clone https://github.com/alexsandroferreira/tailwind-next-form.git`.
2. Instale as dependências e ative husky: `npm install` e `npm prepare`.
3. Para iniciar a aplicação execute `npm run build` e `npm run start`.
