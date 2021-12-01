//criando o botão concluir tarefa**********************************
const BotaoConcluir = () =>{
    //aqui vamos criar um elemento chamado botão.
    const botaoConcluir = document.createElement('button');
    //vamos adicionar uma classe css nesse botão.
    botaoConcluir.classList.add('check-button');
    //vamos inserir um texto dentro do botão
    botaoConcluir.innerText = 'concluir'
    //vamos colocar um evento dentro deste botão para ele poder executar algo.
    botaoConcluir.addEventListener('click', concluirTarefa);

    return botaoConcluir;
}

const concluirTarefa = (evento) => {
    const botaoConcluir = evento.target;

    const tarefaCompleta = botaoConcluir.parentElement;

    tarefaCompleta.classList.toggle('done');
}

export default BotaoConcluir