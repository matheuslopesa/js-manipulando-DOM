const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', (evento) => {

    evento.preventDefault()
    //preventDefout irá evitar que a página carregue após o click, assim armazendo as informações no console da página.
    const input = document.querySelector('[data-form-input]');
    //nesta const input estamos chamando o nosso objeto input lá do html;
    
    const valor = input.value;
    // o '.value' vai nos mostrar o valor dentro do objeto referido;
    console.log(valor);
    // aqui o nosso console irá mostrar o valor que fora inserido em nosso input
})
