# VUTTR (Back-end) - Very Useful Tool to Remember

> Este projeto é um desafio proposto pela [Bossabox](https://bossabox.com/para-empresas)

## `Tecnologias utilizadas na aplicação`
- __bcrypt:__ Criptografia de senhas,
- __cors:__ Controlar o acesso a API,
- __dotenv:__ Usar variáveis de ambiente,
- __express:__ Framework usado para o desenvolvimento de toda a API,
- __express-async-errors:__ Retorno dos erros, auxilia na utilização de Service Pattern,
- __jsonwebtoken:__ Utilizar padrão de autenticação por meio de Token na API,
- __mongoose:__ ORM para setenças de Banco de Dados, neste caso o MongoDb,
- __mongoose-paginate:__ Plugin para paginação dos retornos do Banco MongoDb,
- __pg e pg-hstore:__ Utilizar o Postgres com o ORM Sequelize,
- __sequelize:__ ORM para setenças de Banco de Dados, neste caso o Postgres,
- __sequelize-cli:__ Utilização do Sequelize, por meio de comandos no terminal,
- __sucrase:__ Trazer ao express a sintaxe de import/export como no React,
- __swagger-ui-express:__ Criação da Documentação da API,
- __youch:__ Modificar para JSON o retorno dos erros,

## `Tecnologias utilizadas no Desenvolvimento`
- __nodemon:__ Mantém a execução do projeto e o atualiza, após atualização de código,
- __eslint:__ Padronizão e identação de código,
- __prettier:__ Auxilia o eslint na formatação do código, mantendo sempre o padrão,
- __docker:__ Utilizado neste caso para rodar containers com os Bancos de Dados utilizados (Postgres e MongoDb),

## `Preparando o ambiente`

  ### Executar o Projeto
  Após clonar o projeto, seguir os seguintes passos:

  - > **Baixar Dependências:**
  Navegue até a pasta que você o clonou, abra o terminal e execute o comando `yarn` ou `npm install`, ou abra o projeto em seu Editor de Texto ou IDE, e então no terminal execute o comando.

  - > **Configurar as variáveis de ambiente:**
  Crie um arquivo `".env"` na raiz do projeto, também na raiz do projeto existe um arquivo `".env-example"`, copie o que está lá dentro para o seu arquivo `".env"` e altere o valores de acordo com a sua preferência.

  - > **Executando Docker Compose:**
  Você precisa ter o [Docker](https://docs.docker.com/) instalado na máquina, com o Docker instalado, você pode ver que existe um arquivo `"docker-compose.yml"`, dentro da pasta `"docker"` no projeto, pelo terminal, vá até a pasta docker, e execute o comando `docker-compose up -d`. Pronto, você tem agora os Bancos Postgres e MongoDb sendo executados em sua máquina.
  
  - > **Migrations e criação da Database:**
  Com os containers dos Bancos rodando, você pode verificar se eles estão rodando com o comando `docker ps`, abra o terminal e execute o comando `yarn sequelize db:create` e depois `yarn sequelize db:migrate`, assim irá criar o database e as tabelas dentro do database.
  
  - > **Outros comandos:**
  Existem outros comandos no projeto, para facilitar esses passos, como: 
  `yarn dev:docker` e `yarn start:docker`: irão criar ou atualizar os containers, criar o database, as tabelas e iniciar a aplicação, a difenrença é que com o `yarn dev:docker` será executado através do `nodemon`, recomendado para desenvolvimento.
  `yarn db:create:migrate`: irá criar o database e as tabelas.
  
  - > **Executando:**
  Após todo esse processo, se você não executou o comando `yarn dev:docker` ou `yarn start:docker`, basta executar então `yarn start` ou `yarn dev`, e sua [aplicação](http://localhost:3000) estará rodando
  
  - > *Projeto em Execução:*
   Pronto o projeto já pode ser utilizado.

## `Como usar`

Com a aplicação em execução, você pode acessar a documentação da aplicação, [clique aqui](http://localhost:3000/api-docs)

## `VUTTR (Front-end)`
Para execução complenta do projeto, faça o download do [VUTTR (Front-end)](https://github.com/Wellios/VUTTR), siga os passos de execução, e aproveite.
