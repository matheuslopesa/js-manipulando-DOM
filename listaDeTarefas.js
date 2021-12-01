import BotaoConcluir from "./componentes/concluirTarefas.js";
import BotaoRemover from "./componentes/deletarTarefas.js";

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
    tarefa.appendChild(BotaoConcluir());
    tarefa.appendChild(BotaoRemover());
    lista.appendChild(tarefa);
    input.value = " ";
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);
