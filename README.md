# :video_game: Descubra o número

[![GitHub contributors](https://img.shields.io/github/contributors/carla-santos/descubra-numero?color=blue&label=Colaboradores&style=for-the-badge)](https://github.com/carla-santos/descubra-numero/graphs/contributors)
[![GitHub forks](https://img.shields.io/github/forks/carla-santos/descubra-numero?color=green&style=for-the-badge)](https://github.com/carla-santos/descubra-numero/network/members)
[![GitHub issues](https://img.shields.io/github/issues/carla-santos/descubra-numero?color=red&style=for-the-badge)](https://github.com/carla-santos/descubra-numero/issues)
[![GitHub licence](https://img.shields.io/github/license/carla-santos/descubra-numero?color=black&label=Licen%C3%A7a&style=for-the-badge)](https://github.com/carla-santos/descubra-numero/blob/main/LICENSE)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/carla-santos/descubra-numero?color=pink&style=for-the-badge)](https://github.com/carla-santos/descubra-numero/pulls)

## Sumário

- [Sobre](#sobre-o-projeto)
   - [Tecnologias](#tecnologias)    
- [Como executar o projeto](#como-executar-o-projeto)
   - [Pré-requisitos](#pre-requisitos)
   - [Instalação](#instalacao)    
- [Fluxograma](#fluxograma) 
- [Contribuição](#contribuicao)
  - [Como contribuir para o projeto](#como-contribuir-para-o-projeto) 
- [Licença](#licenca)
- [Contato](#contato)
- [Agradecimento](#agradecimento)
- [Deploy](#deploy) 

## :green_book: Sobre o projeto <a name = "sobre-o-projeto"></a>

[![Screenshot](https://github.com/carla-santos/descubra-numero/blob/main/img/desktop.png)](https://descubra-numero.netlify.app/)

**Descubra o número** é um jogo de adivinhação cujo objetivo é acertar o menor número possível de tentativas. Possui um design estilo 'retro' e foi desenvolvido em Javascript.

- Utilizei como base [7-1 architecture pattern](https://github.com/KittyGiraudel/sass-boilerplate) para criar os arquivos do SASS dentro do diretório **src/scss**. Lá consta um arquivo principal chamado **main.scss** que tem a função de importar os arquivos parciais dentro de sua respectiva pasta.
- Em cada pasta, consta um arquivo **index.scss** que lista cada um dos outros arquivos, no mesmo diretório, que vão ser incluídos na importação.
- O diretório **build** consta o arquivo **main.css** minificado para o deployment do projeto.
- Adicionei **SASS** ao projeto como uma forma melhor de organizar os diferentes componentes e, por conseguinte, uma melhor manutenção ao mesmo.

### Tecnologias <a name = "tecnologias"></a> :wrench:

O jogo foi desenvolvido com **JavaScript**, além de **HTML5** e **SASS(SCSS)**. Foi usado **NPM** como gerenciador de pacotes e **GULP** para compilar SASS em CSS, 
além de outras dependências utilizadas no desenvolvimento, tais como: Adicionar prefixos proprietários, minificação(compressão).

- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [SASS](https://sass-lang.com/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Arquitetura BEM](http://getbem.com/)
- [NPM](https://www.npmjs.com/)
- [GULP](https://gulpjs.com/)
- [Prettier](https://prettier.io/)

---

## :computer: Como executar o projeto <a name = "como-executar-o-projeto"></a>

Para Iniciar o projeto, faça o clone desse repositório ou baixe de forma local em seu sistema. 
Você pode visualizar o jogo clicando no link [Descubra o número](https://descubra-numero.netlify.app/).

### Pré-requisitos <a name = "pre-requisitos"></a>

Antes de começar, você precisa instalar, em sua máquina, as seguintes ferramentas: [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/) 
e um editor de código, como [VSCode](https://code.visualstudio.com/).

Siga as instruções abaixo para obter uma cópia local: 

### Instalação <a name = "instalacao"></a>

```bash

# Clone este repositório.
$ git@github.com:carla-santos/descubra-numero.git

# Acesse a pasta do projeto no seu terminal/cmd/(Git bash).
$ cd descubra-numero

# Instale as dependências.
$ npm install

# Execute a aplicação.
$ gulp dev

```
Utilize uma ferramenta como o [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) para criar um servidor local e executar o projeto.

---

## :chart: Fluxograma <a name = "fluxograma"></a>

![Flowchart](https://github.com/carla-santos/descubra-numero/blob/main/img/descubra-numero.png)

O fluxograma foi criado para facilitar o desenvolvimento do jogo e entender os vários fluxos de processo de decisão. 
Utilizei a seguinte ferramenta [flowchart](https://app.diagrams.net/) para a criação desse diagrama de processo. 

### **Legenda**: 

- Início e Fim (roxo)
- Ação (verde)
- Decisão (azul)
- Ação importante (laranja)
 
--- 

## 👨‍💻 Contribuição <a name = "contribuicao"></a>

Primeiramente, agradeço a sua visita, qualquer contribuição que você fizer é muito bem-vindo :D.

### 💪 Como contribuir para o projeto <a name = "como-contribuir-para-o-projeto"></a>

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b meu-recurso`.
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "Recurso: meu novo recurso"`.
4. Envie as suas alterações: `git push -u origin meu-recurso`.

---

## :pencil: Licença <a name = "licenca"></a>  
 
O projeto está sob a licença MIT. Para saber mais, acesse o arquivo [LICENÇA](https://github.com/carla-santos/descubra-numero/blob/main/LICENSE).

---

## :email: Contato <a name = "contato"></a>  

<a href="https://github.com/carla-santos">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/73856489?v=4" width="100px;" alt="Carla Santos"/>
 <br />
 <sub><b>Carla Santos 🎮</b></sub></a>

Desenvolvido com 🧡 por Carla Santos 👋🏽

Sinta-se à vontade para entrar em contato comigo :)

[![Gmail Badge](https://img.shields.io/badge/-carla.devjs@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white&link=mailto:tgmarinho@gmail.com)](mailto:carla.devjs@gmail.com)

Meus outros links: [https://github.com/carla-santos](https://github.com/carla-santos)

---

## 🚀 Agradecimento <a name = "agradecimento"></a>  

- [Img Shields](https://shields.io)
- [Netlify](https://www.netlify.com/)
- [NPM](https://www.npmjs.com/)
- [Google Fonts](https://fonts.google.com/)
- [SASS guidelin](https://sass-guidelin.es/#architecture)
- [CSS-Tricks](https://css-tricks.com/introducing-sass-modules/)
- [Font Awesome](https://fontawesome.com)

---

## :dizzy: Deploy <a name = "deploy"></a>  

[![Deploy no Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/sites/descubra-numero/deploys)
