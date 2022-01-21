# API-Multicoisas

<div> 
API desenvoldida para funcionar como um sistema de gestão integrada utilizando o MySQL como banco de dados relacional!
    
</ul>
</div>
 
 <div> 
  <h3> Tecnologias utilizadas </h3>
   <ul>
     <li> Git</li>
     <li> Node.js</li>
     <li>MySQL</li>
     <li>Postman</li>
   </ul>
 </div>
 
 <div> 
  <h3> Pacotes utilizados </h3>
   <ul>
     <li> NPM</li>
     <li> Nodemon</li>
     <li> Express</li>
     <li> Sequelize -  Para instalá-lo, pelo terminal: 1. "<b>npm i sequelize</b>"; seguido do comando: 2. "<b>npm i mysql2</b>" <b>(para o projeto em questão)</b></li>
    </ul>
 </div>
 
 <div>
 <h3>Métodos e Rotas</h3>
  Por meio dos métodos HTTP, será manipulado os dados de acordo com a necessidade dos usuários.

<ul> 
 <li>Para a entidade <b>Produtos</b>, os métodos e rotas serão: </li>

| MÉTODO |     ROTA           |             AÇÃO              |
|------- | -------------------| ------------------------------|
|GET     | /Produto           |   Exibir todos os Produtos    |
|POST    | /Produto           |   Cadastrar Produtos          |
|PUT     | /Produto/:id       |  Alterar infos de Produtos    |
|DELETE  | /Produto/:id       |   Excluir Produto Desejado    |



<li>Para a entidade <b>Estoques</b>, os métodos e rotas serão: </li>

| MÉTODO |     ROTA             |             AÇÃO                     |
|------- | ---------------------| -------------------------------------|
|GET     | /Estoque             |   Exibir todo estoque de Produtos    |
|POST    | /Estoque             |    Cadastrar infos de Novo Produto   | 
|PUT     | /Estoque:id          |       Alterar/atualizar Estoque      |

 <li>Para a entidade <b>Categorias</b>, os métodos e rotas serão: </li>

| MÉTODO |     ROTA             |             AÇÃO                              |
|------- | ---------------------| ----------------------------------------------|
|POST    | /Categoria           |   Cadastrar uma nova Categoria de Produtos    | 
|PUT     | /Categoria/:id       |      Alterar/atualizar Categoria              |
  
 <li>Para a entidade <b>Clientes</b>, os métodos e rotas serão: </li>

| MÉTODO |     ROTA           |             AÇÃO                        |
|------- | -------------------| ----------------------------------------|
|GET     | /Cliente           |   Exibir todos os Clientes              |
|POST    | /Cliente           |   Cadastrar Cleinte                     |
|PUT     | /Cliente/:id       |  Alterar infos de clientes cadastrados  |
 
<li>Para a entidade <b>Vendas </b>, os métodos e rotas serão: </li>

| MÉTODO |     ROTA           |             AÇÃO                        |
|------- | -------------------| ----------------------------------------|
|GET     | /Venda             |   Exibir todas as vendas realizadas     |
|POST    | /Venda             |        Cadastrar nova venda             |
|PUT     | /Venda /:id        |  Alterar infos de vendas já realizadas  |
   
</ul>
 </div>
 
--------------------------------
<footer> <b> Projeto finalizado no dia 21/01/2022, projeto em processo de modificação. </footer>
