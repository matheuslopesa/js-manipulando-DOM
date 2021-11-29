<h1>Curso de JavaScript</h1> 
<h2>Manipulando o DOM</h2>


<p>Neste curso iremos criar uma lista de tarefas com javascript</p>

<h5>document</h5> - Objeto usado para acessar outros objetos dentro de um documento.

<h5>querySelector</h5> - acessar o objeto referido dentro dele. Pode ser um ID, Class ou Tag.

<h5>textContent</h5> -  dá o acesso ao texto do elemento selecionado.


~~~javascript
document.querySelector('body').textContent
~~~
Aqui temos acesso ao texto dentro do body.


<h3>Exemplo</h3>

~~~html
<div class="app">
  <div class="todo-list">
  <h1 class="title">Ceep</h1>

 <form class="form" action="">
    <input class="form-input" type="text" data-form-input>
    <button class="form-button" data-form-button> Novo Item </button>
 </form>

  <ul class="list" data-list>
    <p>Comprar um abacate</p>
  </ul>
</div>
~~~

Quando o navegador criar uma representação deste documento em formato de objetos, queremos acessar o nó que representa o parágrafo e alterar seu texto de forma dinâmica para comprar um morango. Para alterar este texto de forma correta utilizamos o seguinte código:

~~~javascript
document.querySelector('p').textContent = 'comprar um morango'
~~~

Utilizamos o método querySelector para percorrer a árvore do DOM e encontrar o elemento que queremos utilizando JavaScript. Porém existem outros métodos que podem ser utilizados para o mesmo fim.

>***document.getElementById(‘id’)***  seleciona o elemento pelo id passado.
***document.getElementsByClassName(‘classe’)*** retorna um array dos elementos pelo nome da classe passada.
***document.getElementsByTagName(‘tag’)*** retorna um array dos elementos pelo nome da tag passada
***document.querySelectorAll(seletor)*** devolve todos os seletores com o mesmo nome

<h3>Data-Atributo</h3>
Data atributo para projetos maiores e evitar conflitos colocamos um "data-atributo" nos objetos que queremos manipular no javascript. por exemplo:

~~~html
<button class="botoo">Enviar</button>
~~~
~~~javascript
document.querySelector('.botao')
~~~

Ao invés de manipularmos o objeto chamando pela classe ".botao" usamos um data-attributes.

~~~html
<button class="botão" data-form-button>Enviar</button>
~~~
~~~javascript
document.querySelector('[data-form-button]')
~~~

Assim podemos manipular o código sem que haja algum bug quando houver uma possivel troca de nome da class.

<h2>Atribuido evento ao botão</h2>

Para que nosso botão realize alguma tarefa, precisamos atribuir um evento para este botão.

Atribuir um evento para o nosso botão:

Código atual:

~~~html
<body>
  <div class="app">
    <div class="todo-list">
      <h1 class="title">
        Ceep
      </h1>
  
      <form class="form" action="">
        <input class="form-input" type="text">
        <button class="form-button" data-form-button> Novo Item </button>
      </form>

      <ul class="list"> 
        <li class="task">
          <p class="content"></p>
      </li>
      
      </ul>
    </div>
    <script src="listaDeTarefas.js"></script>
</body>
~~~

~~~javascript
const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', ()=>{
    console.log('fui clicado')})

~~~

<h2>Capturar o valor do input</h2>

Primeiro passo vamos criar um data-attributes em nosso input. 

~~~html
<input class="form-input" type="text" data-form-input>
~~~

agora vamos alterar nosso javascript

~~~javascript
const novaTarefa = document.querySelector('[data-form-button]');
    //addEventListener - está adicionando um evento de escutar algo no caso o evento é o 'click'
novaTarefa.addEventListener('click', ()=>{
    const input = document.querySelector('[data-form-input]');
    //nesta const input estamos chamando o nosso objeto input lá do html;
    
    const valor = input.value;
    // o '.value' vai nos mostrar o valor dentro do objeto referido;
    console.log(valor);
    // aqui o nosso console irá mostrar o valor que fora inserido em nosso input
})

~~~

Ok, agora tudo que estamos digitando no input está sendo armazenado em nosso console. Agora temos o nosso objetivo é inserir o texto do input no corpo da página.

<h2>Inserir nossa lista no corpo da página</h2>








