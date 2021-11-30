const criarTarefa = (evento) => {

    evento.preventDefault()

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const tarefa = document.createElement('li')
    tarefa.classList.add('task');

    const conteudo = `<p class=""content>${valor}</p>`;

    tarefa.innerHTML = conteudo;

    //estamos declarando que botão fique dentro do li.
    tarefa.appendChild(botaoConcluir());
    lista.appendChild(tarefa);
    input.value = " ";
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);


//criando o botão concluir tarefa**********************************
const botaoConcluir = () =>{
    //aqui vamos criar um elemento chamado botão.
    const botaoConcluir = document.createElement('button');
    //vamos adicionar uma classe css nesse botão.
    botaoConcluir.classList.add('check-button');
    //vamos inserir um texto dentro do botão
    botaoConcluir.innerText = 'concluir'
    //vamos colocar um evento dentro deste botão para ele poder executar algo.
    botaoConcluir.addEventListener('click',()=>{
        //damos primeiramente este console para verificar se está tudo funcionanedo.
        console.log('fui clicado');
    })

    return botaoConcluir;
}