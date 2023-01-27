# Pizzaria-fullstack
Desenvolvimento de aplicação FULLSTACK em Typescript e React JS para uso em pizzaria.

## 🚀 Descrição do Projeto

Este projeto faz parte de uma rodada de cases, usado com a finalidade de expor nossos conhecimentos em desenvolvimento Fullstack ao final do curso Bootcamp da Labenu.
Na parte Backend foi solicitado criação de tabelas MySQL, assim como o uso de API com entidades e endpoints.
Para o Frontend, foi exigido que a interface fosse de fácil uso e clean. 
Em relação a usabilidade, o cliente deve ser capaz de visualizar todas as pizzas, com seus respectivos ingredientes e preços.
Ao escolher algo, o item escolhido deve aparecer na lista de resumo do pedido, junto com o valor total da compra. 
Ao confirmar o pedido, deve retornar uma mensagem de sucesso, com a lista do que foi pedido.
Esse projeto foi desenvolvido em acompanhamento da resolução em vídeo do instrutor de aula. 

## 📋 Funcionalidades

#### BACKEND

 1. Criar pedido

* Método: POST
* Caminho: /api/orders
* Entrada: name, quantity
* Saída: mensagem de pedido realizado com sucesso juntamente com o resumo do pedido.

 2. Buscar pizzas

* Método: GET
* Caminho: /api/pizzas
* Entrada: nenhuma
* Saída uma lista com todas as pizzas cadastradas.

 3. Buscar pedidos

* Método: GET
* Caminho: /api/orders
* Entrada: nenhuma
* Saída uma lista com todas os pedidos reailizados.

#### FRONTEND

* O usuário tem acesso a uma lista de pizzas, que contém nome, ingredientes e preço.
* Ao clicar em adicionar, o usuário verá um resumo do pedido com o nome, quantidade e valor total dos itens e do pedido.
* Ao clicar em confirmar pedido, o usuário verá uma mensagem com o id do pedido e o resumo dos itens pedidos.


## 🔧 Setup

###  Instalando as dependências:

npm install:
Instala todas as dependências listadas no package.json.

###  Criando o arquivo .env:

Criar o arquivo .env e configurar com as informações de seu banco de dados.

### Populando a tabela:

npm run migrations:

Cria e popula as tabelas com dados mockados de pizzas.

### Executar o projeto:

npm run dev:

Estabelece a conexão com o banco de dados e reinicia automaticamente o servidor localhost toda a vez que o projeto for alterado e salvo.

## 🛠️ Tecnologias Utilizadas

* [Typescript](https://www.typescriptlang.org/docs/)
* [Express](https://expressjs.com/)
* [Knex](https://knexjs.org/)
* [MySQL](https://www.mysql.com/)
* [React JS](https://pt-br.reactjs.org/)
* [Axios](https://axios-http.com/ptbr/docs/intro/)
* [Styled-components](https://styled-components.com/)

## ✒️ Autores

## INTEGRANTE
Perfil      | Link do perfil no GITHUB
--------- | ------
[<img src="https://avatars.githubusercontent.com/Joisantos" width="75px;"/>](https://github.com/Joisantos) | [Jóice dos Santos](https://github.com/Joisantos)
