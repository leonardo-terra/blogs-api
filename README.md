# Projeto API de Blogs :crown:


<h2>Índice</h2>

[Sobre](#sobre)<br />[Tecnologias](#tecnologias)<br />
[Justificativa das tecnologias](#justificativas)<br />[Orientações](#orientacoes)<br />[Usabilidade](#usabilidade)<br />
[Documentação](#documentacao)<br />

<h2 id="sobre">Sobre</h2>

<h4> Aplicação Node.js com pacote Sequelize para realizar CRUD de uma rede social tipo Blog.</h4>

Foi desenvolvida uma API REST que se conecta a um banco de dados SQL.

Para navegar pela API, o usuário precisa ser autenticado e ter as autorizações necessárias para cada ação.

As autenticações e autorizações foram criadas utilizando o pacote JWT.

Para maiores detalhes, consultar a seção [documentação](#documentacao)



<h2 id="tecnologias">Tecnologias</h2>

<div>
 <p align="left"> <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> </p>
</div>


<h2 id="justificativas">Justificativa das tecnologias</h2>

 <img title="ESLint" alt="ESLint" height="20" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/eslint/eslint-original.svg"> [ESLint](https://eslint.org/)

- O projeto possui regras estritas de ESLint (Airbnb) para JavaScript onde é possível encontrar e corrigir problemas, seguindo boas práticas e padronização.

<img title="Docker" alt="Docker" height="20" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"> [Docker](https://www.docker.com/)

- Utilizar imagens Docker para empacotar toda a aplicação e suas dependências, torna a distribuição mais fácil, segura e padronizada.

<img title="Sequelize" alt="Sequelize" height="20" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original.svg"> [Sequelize](https://sequelize.org/)

- A utilização da biblioteca ORM Sequelize após configurado garante maior versatilidade na hora de conectar ao banco de dados e a substituição de linhas de código SQL por javascript.

​	<img title="Sequelize" alt="Sequelize" height="20" width="30" src="https://jwt.io/img/logo.svg">	[JWT](https://jwt.io/)

- Os JSON Web Tokens representam a autenticação e autorização de forma eficaz e simples.


<h2 id="orientacoes">Orientações</h2>

<details>

<summary id="env"><strong>:closed_lock_with_key:Variáveis de ambiente</strong></summary><br/>

> :information_source: Você encontrará um arquivo `.env` onde estarão as variáveis de ambiente utilizadas no projeto. Ao realizar a instalação, será necessario atualiza-lo com as informações do ambiente que rodará a API.
> <br />

</details>

<details>

<summary id="docker"><strong>:whale2: Rodando com Docker x Localmente</strong></summary>

### 👉 Com Docker

> :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d`.

- Lembre-se de parar o `postgresql` se estiver usando localmente na porta padrão (`5432`), ou adapte o docker-compose caso queria fazer uso da aplicação em containers;

- Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;

- A partir daqui você pode acessar o container `blogs_api` via CLI ou abri-lo no seu editor;

> :information_source: Use o comando `docker exec -it blogs_api bash`.

- Ele te dará acesso ao terminal interativo do container criado pelo docker-compose, que está rodando em segundo plano.

> :information_source: Ao rodar o docker-compose, ele automaticamente irá rodar os seguintes comandos:

- `npm install`: Irá instalar todas as dependências;

- `npm start`: Irá rodar a aplicação na porta `3000` pelo `nodemon`, ou adapte o docker-compose e o `.env` caso sinta necessidade.


### 👉 Sem Docker

> :information_source: Instale as dependências com `npm install`.

> :information_source: Rode a aplicação com `npm start` na porta `3000` pelo `nodemon`, ou adapte o `.env` caso sinta necessidade.

</details>


<h2 id="usabilidade">Usabilidade</h2>

_Obs: Veja a seção de [documentação](#documentacao) para entender melhor como funcionam as rotas._

> :information_source: Após rodar a aplicação, você deverá acessar através de `http://localhost:{porta}/{rota}` 

- Algumas sugestões de clientes:

    :bulb: [HTTPie](https://httpie.io/) | :bulb: [Postman](https://www.postman.com/) | :bulb: [Insomnia](https://insomnia.rest/) | :bulb: [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)


<h2 id="documentacao">Documentação</h2>

<h4> Arquitetura de Software </h4>

O projeto foi estuturado com a arquitetura MSC (Model - Service - Controller), onde podemos dividir a aplicação em 3 camadas :

- **Camada de Modelo (M)**: Arquivos que executam as operações do banco de dados, como criar conexões e executar queries;
- **Camada de Serviço (S)**: Arquivos que estruturam as regras de negócio, geralmente é quem chama os métodos definidos na camada de modelo;
- **Camada de Controladores (C)**: Interface mais próxima da pessoa usuária ou de uma requisição, irá processar e chamar as devidas funções da camada de serviço.

![msc-software-architecture](https://i.ibb.co/StzFHc8/msc-software-architecture.png)



<h4>Estrutura de dados </h4>

<h5> Diagrama de entidade relacionamento </h5>

![der](https://i.ibb.co/236q30J/der.png)

## Tabela BlogPosts:

## Tabela Users:

```
[
  {
     "id": 1,
     "displayName": "Lewis Hamilton",
     "email": "lewishamilton@gmail.com",
     "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
  },

  /* ... */
]
```

## Tabela PostsCategories:

```
{
  "postId": 50, // Chave primária e estrangeira, referenciando o id da tabela `BlogPosts`
  "categoryId": 20 // Chave primária e estrangeira, referenciando o id da tabela `Categories`
}
```

## Tabela Categories:

```
{
  "id": 18,
  "name": "News"
}
```



<h5> Rotas </h5>

Para acessar as rotas, é necessário que o usuário se cadastre, realizando um POST na rota /users. Após o cadastro, um token é gerado.

Caso o usuário já exista, poderá gerar um token na rota /login.

* Login - POST 

    O endpoint deve ser acessado através do URL `/login`;

    O corpo da requisição deverá seguir o formato abaixo:

    ```
    {
      "email": "lewishamilton@gmail.com",
      "password": "123456"
    }
    ```

* User - POST

    O endpoint deve ser acessado através do URL `/user`;

    O endpoint  adiciona um novo `user` a sua tabela no banco de dados;

    O corpo da requisição deverá seguir o formato abaixo:

    ```
    {
      "displayName": "Brett Wiltshire",
      "email": "brett@email.com",
      "password": "123456",
      "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    }
    ```

* User - GET

    O endpoint deve ser acessado através do URL `/user`;

    É preciso autorização para realizar essa solicitação.

    Para isso, deve ser enviado no header da solicitação uma `Authorization` contendo o token gerado.

* User - GET `id`

    O endpoint deve ser acessado através do URL `/user/:id`;

    É preciso autorização para realizar essa solicitação.

    Para isso, deve ser enviado no header da solicitação uma `Authorization` contendo o token gerado.

* Category - POST

    O endpoint deve ser acessado através do URL `/categories`;

    O endpoint adiciona uma nova categoria a sua tabela no banco de dados;

    O corpo da requisição deverá seguir o formato abaixo:

    ```
    {
      "name": "Typescript"
    }
    ```

    É preciso autorização para realizar essa solicitação.

    Para isso, deve ser enviado no header da solicitação uma `Authorization` contendo o token gerado.

* Category - GET

    O endpoint deve ser acessado através do URL `/categories`;

    É preciso autorização para realizar essa solicitação.

    Para isso, deve ser enviado no header da solicitação uma `Authorization` contendo o token gerado.

* Post - POST

    O endpoint deve ser acessado através do URL `/post`;

    O endpoint adiciona um novo blog post e vincula as categorias em suas tabelas no banco de dados;

    O corpo da requisição deverá seguir o formato abaixo:

    ```
    {
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key",
      "categoryIds": [1, 2]
    }
    ```

    É preciso autorização para realizar essa solicitação.

    Para isso, deve ser enviado no header da solicitação uma `Authorization` contendo o token gerado.

* Post - GET

    O endpoint deve ser acessado através do URL `/post`;

    O endpoint traz todos os BlogPosts com informações do usuário que o gerou e sua categoria;

    É preciso autorização para realizar essa solicitação.

    Para isso, deve ser enviado no header da solicitação uma `Authorization` contendo o token gerado.

* Post - GET `id`

    O endpoint deve ser acessível através do URL `/post/:id`;

    É preciso autorização para realizar essa solicitação.

    Para isso, deve ser enviado no header da solicitação uma `Authorization` contendo o token gerado.

* Post - PUT

    O endpoint deve ser acessado através do URL `/post/:id`;

    O endpoint altera um post do banco de dados, se ele existir;

    A aplicação permite somente a alteração das categorias do post. Ou seja, somente os atributos `title` e `content` podem ser alterados;

    O corpo da requisição deverá seguir o formato abaixo:

    ```
    {
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key"
    }
    ```

    É preciso autorização para realizar essa solicitação.

    Para isso, deve ser enviado no header da solicitação uma `Authorization` contendo o token gerado.

* Post - DELETE

    O endpoint deve ser acessado através do URL `/post/:id`;

    O endpoint deleta um blog post baseado no `id` do banco de dados, se ele existir;

    É preciso autorização para realizar essa solicitação.

    Para isso, deve ser enviado no header da solicitação uma `Authorization` contendo o token gerado.

    

