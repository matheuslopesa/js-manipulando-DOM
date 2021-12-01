const BotaoRemover = () =>{
    const botaoRemover = document.createElement('button');
    botaoRemover.innerText = 'Remover';
    botaoRemover.classList.add('check-button');
    botaoRemover.addEventListener('click', deletarTarefa);
    return botaoRemover;
}


const deletarTarefa = (evento) =>{
    const botaoRemover = evento.target;

    const tarefaCompleta = botaoRemover.parentElement;
    tarefaCompleta.remove();

    return botaoRemover;

}
export default BotaoRemover