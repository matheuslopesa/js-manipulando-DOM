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

<h3>data-attributes</h3>
Data atributo para projetos maiores e evitar conflitos colocamos um "data-attributes" nos objetos que queremos manipular no javascript. por exemplo:

~~~html
<button class="botoo">Enviar</button>
~~~
~~~javascript
document.querySelector('.botao')
~~~

Ao invés de manipularmos o objeto chamando pela classe ```.botao``` usamos um data-attributes.

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

Nossa primeira tarefa é analisarmos o nosso código **HTML** e definir onde colocaremos nossa lista de tarefas. 
Após analisarmos o código vimos que precisamos inserir dentro da nossa ```<ul>``` um ```<li>``` e um ```<p>```.

~~~~html
 <ul class="list"> 
        <li class="task" data-task>
          <p class="content"></p>
      </li>

~~~~


Em nosso código javascript iremos chamar o nosso ```data-task``` atribuindo em uma variável chamada ```tarefa```.

~~~javascript

const tarefa = document.querySelector('[data-task]');

~~~~~~~

Agora iremos criar mais uma variável chamada conteúdo e para esta variável estaremos utilizando o ```templateString```.

>Template String: responsável por realizar a interpolação de nosso código html com o nosso javascript.

Para realizarmos esta interpolação precisamo usar o acento crase no lugar das aspas.

~~~javascript

    const conteudo = `<p class=""content>${valor}</p>`;
    tarefa.innerHTML = conteudo;
    
~~~~ 

agora o código já está inserindo normalmente o texto escrito dentro do input


<h2>Criando os elemento</h2>

Vimos anteriormente como acrescentar o ```texto``` dentro do corpo de nosso projeto. Agora irmos criar os elementos dentro da página. O nosso primeiro passo será, ir no nosso documento ```html``` e excluir nossa ```<li>``` e ```<P>```. Pois iremos criar dentro do nosso javascript.
~
Primeiro vamos adicionar dentro da nossa tag ```ul``` um ```data-attributes``` para podermos manipular em nosso documento javascript.


~~~html
    <ul class="class-list" data-list></ul>

~~~~

Agora em nosso javascript iremos apagar nossas variáveis que não estão mais sendo utilizadas e vamos criar novas variáveis.

nossa primeira variável será, ```lista``` para e iremos pegar de nosso documento html

~~~javascript
 
    const lista = document.querySelector('[data-list]')

~~~~

próxima variável será para criarmos uma ```<li>``` dentro da nossa ```<ul>```.

~~~javascript
    const tarefa = document.createElemnte('li');
~~~~

para adicionarmos uma classe para este elemento precisamos declarar da seguinte forma:
~~~javascript
    tarefa.classList.add('task')
    //lembrando que essa classe já existe dentro do nosso documento .css

~~~~

Como existe um hierarquia dentro do nossso código precisamos respeitá-las para que tudo funcione de forma correta. E para arrumarmos isso declaramos o seguinte código:

~~~javascript
    lista.appendChild(tarefa);
~~~~

Ou seja, chamamos a nossa ```lista``` e acrescentamos um filho (```appendChild```) para nossa variável ```tarefa```.


<h2>Nosso código deve estar assim nesse momento.</h2>

~~~~javascript

const criarTarefa = (evento) => {
    
    evento.preventDefault()

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    
    const tarefa = document.createElement('li')
    tarefa.classList.add('task');
    
    const conteudo = `<p class=""content>${valor}</p>`;
    
    tarefa.innerHTML = conteudo;
    lista.appendChild(tarefa);
    input.value = " ";
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);
~~~~

**LEMBRETE**
>Quando precisamos criar um template de um parágrafo que usamos tanto o ```html``` e ```javascript``` a sintaxe utilizada é ```${exemplo}```.

Todos os elementos na nossa árvore do DOM são nós e todos os nós podem ser acessados via JavaScript. Os nós podem ser deletados, criados ou modificados. Durante o curso utilizamos o método appendChild que sempre é adicionado no final do nó, para colocar um nó filho dentro do nó pai

Existem outros métodos que podemos utilizar para manipular nós:

>```insertBefore```(pai, filho): Coloca um nó antes do outro.
>```replaceChild```( elemento1, elemento2): Substitui o nó elemento 1 pelo nó elemento2.
>```removeChild```(elemento): Remove um nó da árvore.

<h2>Criando botão Concluir</h2>
<p>Agora nós iremos criar um botão concluir em nossa lista para cada item.</p>

Nosso primeiro passo é criar um componente. Um ```componente``` é uma parte do meu todo, uma parte da minha aplicação. Vários componentes criam a aplicação, e geralmente componentes são independentes, ou seja, eu vou poder utilizá-los em várias partes da minha aplicação.

~~~~Javascript
  const botaoConcluir = () =>{
    //aqui vamos criar um elemento chamado botão.
    const botaoConcluir = document.createElement('button');
    //vamos adicionar uma classe css nesse botão.
    botaoConcluir.classList.add('check-button');
    //vamos colocar um evento dentro deste botão para ele poder executar algo.
    botaoConcluir.addEventListener('click',()=>{
        //damos primeiramente este console para verificar se está tudo funcionanedo.
        console.log('fui clicado');
    })

    return botaoConcluir;
}
~~~~

agora dentro da nossa ```const criarTarefa``` vamos declarar que nosso ```button``` seja um "filho" da nossa ```li``` e em seguida já iremos chamar essa função.

~~~javascript
//estamos declarando que botão fique dentro do li.
    tarefa.appendChild(botaoConcluir());
~~~~

Pronto! Agora, ao inserir uma tarefa dentro do input, a lista ficará disponível logo abaixo com o botão concluir ao lado da lista. Mas note que este botão ainda não está retornando algo visual para o usuário, então vamos atribuir um efeito nesta lista, para que fique explícito ao usuário que "tal" tarefa já esteja concluida.

Vamos criar uma nova variável com o nome ```const concluirTarefa``` e dentro dela iremos colocar uma ```arrow function```. 


~~~~Javascript

const concluirTarefa = (evento) =>{
    //colocamos um alvo no botão concluir criando um evento
    const botaoConcluir = evento.target;
    //aqui estamos subindo um NÓ na nossa hierarquia
    //no caso estamos subindo novamente para nossa '<li>'
    const tarefaCompleta = botaoConcluir.parentElement;
    //toggle retorna um resultado boleano (verdadeiro e falso)
    //aqui estamos colocando uma classe dentro do texo para que ele fique riscado.
    tarefaCompleta.classList.toggle('done');

}
~~~~~

Dentro do nosso botãoConcluir iremos remover o nosso ```console.log``` que usamos para teste e no lugar iremos charmar nossa ```const concluiTarefa```.

~~~~Javascript
botaoConcluir.addEventListener('click', concluirTarefa);
~~~~

<h3>Corrigindo um erro!</h3>

>Se abrirmos o DevTools do chrome, copiar e colar o nome de uma função dentro do console. Ele irá retornar, toda a regra de função do nosso negócio e não queremos que isso aconteça.

Para corrigirmos esse erro, vamos utilizar a “IIFE”, ou Immediately Invoked Function Expression ou “Função de Invocação Imediata”.

Para fazer isso é muito simples. Primeiro iremos colocar nosso código dentro de um parêntese ```()``` . Antes do nosso código iremos colocar uma ```função anonima``` e uma ```arrow function```. No final do código colocamos um parêntese ```()``` para executar a função.

~~~Javascript

( () => {
aqui vai estar o nosso código
})
()
~~~


<h2>Botão de Remover Tarefa</h2>

Vamos inserir ao lado do nosso botão concluir um botão Remover.

~~~javascript
const BotaoRemover = () =>{
    const botaoRemover = document.createElement('button');
    botaoRemover.innerText = 'Remover';
    botaoRemover.classList.add('check-button')
    botaoRemover.addEventListener('click', () =>{
        //este console é somente para o teste do botão
        console.log('clicou')

    })
    return botaoRemover
}
~~~

agora temos que ir dentro da nossa função tarefa e pedir que o nosso código também seja executado lá dentro 

~~~javascript
tarefa.appendChild(BotaoRemover());
~~~


>Agora iremos criar a função do botão remover, que irá substituir o nosso ```console.log```.



~~~javascript
// criamos um evento
const deletarTarefa = (evento) =>{
    //criamos uma variavel e atribuimos um evento com um alvo.
    const botaoRemover = evento.target;
    //aqui estamos, novamente, subindo um NÓ.
    //esta const agora se refere a uma <li> e não mais um <button>
    const tarefaCompleta = botaoRemover.parentElement;
    //agora iremos excluir todo o elemento
    tarefaCompleta.remove();

    return botaoRemover;

}
~~~

<h4>Agora a nossa aplicação está pronta e funcionando!</h4>


<h2>Organizando o Código</h2>
Agora nós iremos dar uma organizada em nosso código criando módulos.

1. criar uma pasta chamada ```componentes```;
2. criar dois arquivos para colocarmos nossos dois componentes principais. ```concluirTarefas.js``` e ```deletaTarefas.js```;
3. Colar os códigos respectivos ao seu nome;
4. Exportar os arquivos.
~~~javascript
//aqui no caso do arquivo concluirTarefas.js
export default BotaoConcluir
~~~
5. no arquivo principar fazemos a importação dos componentes.
~~~javascript
import BotaoConcluir from "./componentes/concluirTarefas.js";
import BotaoRemover from "./componentes/deletarTarefas.js";
~~~
6. tembém no arquivo html, especificar o type do import;
~~~javascript
 <script type="module" src="listaDeTarefas.js"></script>
~~~
7. instalar o live server no vscode;
8. ctrl + shift + p --- escrever ```Reload window```
9. Agora está tudo OK!

<h2>Curso concluido!</h2>