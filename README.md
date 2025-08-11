<h1 align="center">
  Appux Blog - Interface com Angular
</h1>

<p align="center">
  <img src="https://i.imgur.com/zCLbs0a.png" alt="Banner do Projeto Appux Blog">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SCSS">
  <img src="https://img.shields.io/badge/status-concluído-green?style=for-the-badge" alt="Status do Projeto">
</p>

<p align="center">
  Este projeto recria a interface de um blog de design, "Appux", utilizando as tecnologias mais recentes do ecossistema Angular. O foco foi em criar uma aplicação componentizada, responsiva e interativa, com atenção à qualidade do código e à experiência do usuário final.
</p>

<p align="center">
  <a href="#-features">Funcionalidades</a> •
  <a href="#-demonstração">Demonstração</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-como-executar">Como Executar</a> •
  <a href="#-autor">Autor</a>
</p>

## 🚀 Features

* **🎨 Layout Moderno e Responsivo:** A interface se adapta perfeitamente a desktops, tablets e dispositivos móveis, utilizando CSS Flexbox e Grid.
* **Routing Roteamento Completo e Dinâmico:** Navegação entre a página principal, páginas de conteúdo e uma página de detalhes de post com rotas dinâmicas (`/post/:id`).
* **🔍 Filtragem e Busca em Tempo Real:** A lista de posts pode ser filtrada por categoria ou por um termo de busca, com a interface reagindo instantaneamente.
* **✨ Animações de Interface:** Efeito de "stagger" na entrada dos cards para uma navegação mais fluida, implementado com `@angular/animations`.
* **🏗️ Arquitetura Reutilizável:** Uso de um componente genérico para renderizar múltiplas páginas de conteúdo (`Case Studies`, `Portfolios`), carregando os dados através da propriedade `data` do Angular Router.

## 🛠️ Tecnologias

As seguintes ferramentas e tecnologias foram utilizadas na construção do projeto:

- **[Angular](https://angular.io/)** (v17+, Standalone Components)
- **[TypeScript](https://www.typescriptlang.org/)**
- **[SCSS](https://sass-lang.com/)** (com Flexbox & Grid)
- **[Angular Router](https://angular.io/guide/router)**
- **[Angular Animations](https://angular.io/guide/animations)**
- **[FormsModule](https://angular.io/guide/forms)**

## ⚙️ Como Executar

Para rodar este projeto localmente, siga os passos abaixo:

```bash
# 1. Clone o repositório
git clone [https://github.com/SEU-USUARIO/NOME-DO-SEU-REPOSITORIO.git](https://github.com/SEU-USUARIO/NOME-DO-SEU-REPOSITORIO.git)

# 2. Navegue até o diretório do projeto
cd NOME-DO-SEU-REPOSITORIO

# 3. Instale as dependências
npm install

# 4. Execute a aplicação em modo de desenvolvimento
ng serve

# 5. Abra seu navegador em http://localhost:4200/
