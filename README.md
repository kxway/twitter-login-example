# Twitter Login Example

## Descrição

Este projeto é um exemplo simples de como implementar a autenticação via Twitter usando Node.js, Express e Passport.js. Ele fornece uma estrutura básica para ajudar os desenvolvedores a entender como integrar o login do Twitter em suas aplicações web.

## Recursos

- Autenticação via Twitter usando Passport.js.
- Salva o usuário autenticado em um banco de dados usando Knex e SQLite.
- Exibe o nome e a foto de perfil do usuário autenticado.


## Executando o Projeto

1. Após instalar as dependências e configurar o `.env`, execute as migrações para criar o banco de dados:
npx knex migrate:latest

2. Inicie o servidor:
O servidor começará a rodar na porta 3000 (ou qualquer porta que você definir em seu `.env`).


