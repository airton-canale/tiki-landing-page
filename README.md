<p align="center">
<img margin-left= "300px" src="public/assets/logo-tiki.svg" alt="Banner">
</p>  
<h1 align="center"><strong></strong></h1>
<h1 align="center"><strong>Tiki Landing Page</strong></h1>
<br>
<p align="center">
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#installation">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-deploy">Deploy</a>
</p>

<br>

## 💻 Project

<br>
<img src="public/assets/readme.gif" alt="Readme Gif">
<br>
<br>

## 🚀 Deploy
 -  https://tiki-landing-page.canale.dev

 - This application was deployed with Github Pages library 


 ```bash
# Running deploy
$ npm run deploy
```
<br>

## Installation

- Important: You must have installed the React.js and Git

```bash
# clone it
$ git clone git@github.com:airton-canale/tiki-landing-page.git

$ cd interface-tailwind

# Install dependencies
$ npm install

# Running scripts
$ npm start
```
- And enter in your browser using http://localhost:3000


## 🚀 Technologies

This project was developed using the following technologies:

- <img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"> **React.JS**
- <img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tailwind/tailwind.png"> **Tailwind**
- <img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"> **JavaScript**
- <img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"> **CSS**



## Considerações

- Enfrentei o meu primeiro problema com o background da pagina, eu iria utilizar a propriedade background image, porém existe um bug conhecido no create react app que nao conseguimos utilizar assets da pasta public como background image especificamente, optei por fazer com a tag img e position absolute.

- Outro desafio bem considerável foi aplicar o exemplo da biblioteca keen slider no projeto e fazer funcionar o mais fiel possível ao protótipo fornecido.

- Eu optei por fazer uma coisa que fugia do protótipo que foram os "+ em amarelo", fiz uma transição da opacidade e escala para mostrar uma habilidade e ser um pouco diferente.

- Optei também por fazer um deploy da aplicação para mostrar um conhecimento a mais, disponível em: https://tiki-landing-page.canale.dev.

- Os primeiros commits não estão muito organizados pois eu fiz na tarde de sábado e acabei esquecendo de separa-los.

- Para melhorar essa aplicação, creio que pode ser componentizada de uma forma mais eficiente, talvez uma arquitetura de pastas e de assets mais organizadas e principalmente responsividade, que não foi realizado, pois não era pedido nas instruções.
