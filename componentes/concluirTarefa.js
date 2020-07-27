const BotaoConclui = () =>{
  const botaoConclui = document.createElement('button')

  botaoConclui.classList.add('check-button') // Adicionando uma classe ao botão
  botaoConclui.innerText = 'Concluir'// Adicionando um texto no botão

  botaoConclui.addEventListener('click', concluirTarefa)
  return botaoConclui
}

const concluirTarefa = (evento) =>{
  const botaoConclui = evento.target //Descobrindo que elemento clicou

  const tarefaCompleta = botaoConclui.parentElement //Pegando o pai do elemento que clicou

  tarefaCompleta.classList.toggle('done') //Ececuta a inserção da classe done
}

export default BotaoConclui
