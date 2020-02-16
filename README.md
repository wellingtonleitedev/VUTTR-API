# VUTTR (Back-end) - Very Useful Tool to Remember

> Este projeto é um desafio proposto pela [Bossabox](https://bossabox.com/para-empresas)

## `Tecnologias utilizadas na aplicação`
- _bcrypt:_ Criptografia de senhas,
- _cors:_ Controlar o acesso a API,
- _dotenv:_ Usar variáveis de ambiente,
- _express:_ Framework usado para o desenvolvimento de toda a API,
- _express-async-errors:_ Retorno dos erros, auxilia na utilização de Service Pattern,
- _jsonwebtoken:_ Utilizar padrão de autenticação por meio de Token na API,
- _mongoose:_ ORM para setenças de Banco de Dados, neste caso o MongoDb,
- _mongoose-paginate:_ Plugin para paginação dos retornos do Banco MongoDb,
- _pg e pg-hstore:_ Utilizar o Postgres com o ORM Sequelize,
- _sequelize:_ ORM para setenças de Banco de Dados, neste caso o Postgres,
- _sequelize-cli:_ Utilização do Sequelize, por meio de comandos no terminal,
- _sucrase:_ Trazer ao express a sintaxe de import/export como no React,
- _swagger-ui-express:_ Criação da Documentação da API,
- _youch:_ Modificar para JSON o retorno dos erros,

## `Tecnologias utilizadas no Desenvolvimento`
- _nodemon:_ Mantém a execução do projeto e o atualiza, após atualização de código,
- _eslint:_ Padronizão e identação de código,
- _prettier:_ Auxilia o eslint na formatação do código, mantendo sempre o padrão,
- _docker:_ Utilizado neste caso para rodar containers com os Bancos de Dados utilizados (Postgres e MongoDb),

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
