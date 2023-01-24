# Car Shop

O Car Shop é uma API Rest integrada ao banco de dados MongoDB. A aplicação, feita em TypeScript, foi construída com o objetivo de gerenciar uma concessionária de veículos e segue os princípios da Programação Orientada a Objetos (POO), aproveitando conceitos como domínio e classes abstratas para otimizar o código. O CRUD segue a arquitetura MSC e foi feito com auxílio do framework Mongoose.

## Tecnologias

- TypeScript
- Node.js
- Express.js
- MongoDB
- Mongoose
- Docker

## Executando o projeto

É recomendável utilizar o Docker para a execução do Car Shop. O arquivo docker-compose.yml, localizado na raiz do projeto, cria dois contêineres: "car_shop" (back-end em Node.js) e "car_shop_db" (database em MongoDB).

**:warning: Seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está `1.26.0` por `1.29.2`.**

**:warning: Lembre-se de parar o MongoDB se estiver usando localmente na porta padrão (27017), ou adapte.**

Na raiz, execute o seguinte comando para iniciar os contêineres em segundo plano:

```
docker-compose up -d --build
```
 
Você agora pode acessar o contêiner "car_shop" pelo VSCode ou conectar-se a ele pelo terminal em modo interativo:

```
docker exec -it car_shop bash
```
 
Dentro do contêiner, execute as dependências e inicie o servidor:

```
npm install
npm run dev
```

## Rodando os testes

A aplicação vem com 100% de cobertura de testes unitários. Para executá-los, utilize o Mocha dentro do terminal do contêiner:

```
npm run test:mocha
```

**:warning: **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run debug, ...) devem ser executados **DENTRO** do contêiner, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima.**

✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no contêiner Docker direto no VSCode, como você faz com seus arquivos locais.
