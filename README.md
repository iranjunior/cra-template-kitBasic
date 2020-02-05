
# CRA Template Basic
[![Build Status](https://travis-ci.com/iranjunior/cra-template-basic.svg?branch=master)](https://travis-ci.com/iranjunior/cra-template-basic)
[![Coverage Status](https://coveralls.io/repos/github/iranjunior/cra-template-basic/badge.svg?branch=master)](https://coveralls.io/github/iranjunior/cra-template-basic?branch=master)
[![dependencies Status](https://david-dm.org/iranjunior/cra-template-basic/status.svg)](https://david-dm.org/iranjunior/cra-template-basic)
[![devDependencies Status](https://david-dm.org/iranjunior/cra-template-basic/dev-status.svg)](https://david-dm.org/iranjunior/cra-template-basic?type=dev)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

**Tabela de Conteudos**

 - [Sobre o projeto](#sobre-o-projeto)
 - [Caracteristicas](#caracteristicas)
 - [Inicialização](#inicialização)
	- [Requisitos](#requisitos)
	- [Clonagem do Projeto](#clonagem-do-projeto)
	- [Comandos de inicialização](#comandos-de-inicialização)
- [Estrutura das pastas](#estrutura-das-pastas)
- [Rotas](#rotas)

## Sobre o projeto

Este desafio trate-se de uma das etapas no processo seletivo para a Concrete Solutions. Esta aplicação tem como objetivo buscar usuário do Github, e listar seus repositórios públicos. Feito usando React, este projeto traz consigo o uso de libs importantes para construção de uma aplicação segura. A aplicacao pode ser vista pelo endereco:  [ Desafio](encurtador.com.br/dfHOY)
git
## Caracteristicas
- [React](https://pt-br.reactjs.org/)
- [Lotties](https://airbnb.design/lottie/)
- Testes automatizado com [Jest](https://jestjs.io/)
- Organização e padronização de códigos com [ESLint](https://github.com/eslint/eslint)
- Criação e utilização de variaveis de ambiente com o [dotEnv](https://github.com/motdotla/dotenv)
- Offline First
- Responsividade



## Inicialização

### Requisitos
- [Node](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/lang/en/docs/install) ou [NPM](https://www.npmjs.com/get-npm)

### Clonagem do Projeto
Para clonar este desadio em seu reositorio local, você ira precisar do [Git](https://git-scm.com/ "Git"), uma vez instalado corretamente você pode executar o comando:
```bash
$ git clone https://github.com/iranjunior/desafio-frontend.git
```
ou caso você tenha uma chave ssh configurada:
```bash
$ git clone git@github.com:iranjunior/desafio-frontend.git
```
por fim execute o comando para entrar na pasta que foi criada e instalar as dependencias do projeto
```bash
$ cd concrete-desafio-frontend
$ yarn
```

### Comandos de inicialização

Para iniciar a aplicação basta executar o comando: `yarn start` ou `npm run start`mas existe alguns comandos que podem lhe ajudar a realizar tarefas especificas como testes com a sua respectiva cobertura, cobertura dos testes e build da aplicação Uma lista completa sobre os comandos de inicialização pode ser vista abaixo:

Comandos  | Tarefa a ser realizada
------------- | -------------
`yarn start` | Inicializa o serviço em ambiente de desenvolvimento, com o modo live reload funcionando. O que facilita na atualização de componentes alterados em desenvolvimento
`yarn test` | Realiza todos os testes relacionados aos arquivos alterados
`yarn test:coverage`  | Realiza todos os testes e mostra os arquivos cobridos pelo teste
`yarn lint`  | Executa o ESLint nos arquivos da aplicação
`yarn build`  | Realiza o build da aplicação para execução em produção

## Estrutura das pastas
```
├─── public/
   └───...
├─── src/
   ├─── assets/
     └───...
   ├─── components/
     └───...
   ├─── constants/
     └───...
   ├─── pages/
      └───...
   ├─── reducers/
      └───...
   ├─── routes/
      └───...
   ├─── services/
       └───...
   ├─── store/
       └───...
...
```

## Rotas

A aplicação tem apenas duas rotas disponíveis na aplicação. Uma hora de apresentação, onde é possível buscar o usuário do Github. E outra rota com informações do usuário buscado

### Tabela de rotas

As rotas da aplicação estão listadas na tabela abaixo:

Rota  |  Descrição
--------------------  | --------------
`GET /`  | Está é a rota raiz de apresentação da aplicação. Onde é possível buscar um usuário.
`GET /results/: username`  | Está é a rota que apresenta informações sobre o usuário buscado. Como parâmetro para a rota lhe é passado o username do usuário que será listado suas informações

