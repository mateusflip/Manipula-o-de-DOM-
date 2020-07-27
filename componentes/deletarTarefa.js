const BotaoDeleta = () =>{
  const botaoDeleta = document.createElement('button')

  botaoDeleta.innerText = "deletar"
  botaoDeleta.addEventListener('click', deletartarefa)

  return botaoDeleta
}

const deletartarefa = (evento) => {
  const botaoDeleta = evento.target

  const tarefaCompleta = botaoDeleta.parentElement

  tarefaCompleta.remove() // Remove o nó inteiro de comprar um abacate

  return botaoDeleta
}

export default BotaoDeleta
