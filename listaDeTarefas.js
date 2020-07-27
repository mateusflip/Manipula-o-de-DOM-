import BotaoConclui from './componentes/concluirTarefa.js'
import BotaoDeleta from './componentes/deletarTarefa.js'

const criarTarefa = (evento) => {

    evento.preventDefault()

    const lista = document.querySelector('[data-list]') //Percorrendo um elemento por data
    const input = document.querySelector('[data-form-input]')
    const valor = input.value



    const tarefa = document.createElement('li')
    const conteudo = `<p class= "content">${valor}</p>`
    tarefa.classList.add('task') //Adicionando uma classe ao tarefa

    tarefa.innerHTML = conteudo //Adiciona o conteudo no html
    tarefa.appendChild(BotaoConclui()) // adiciona o botão dentro da respectiva tarefa <li>
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa) //Adiciona o conteúdo como um elemnto filho de lista (ao final do nó)

    input.value = " "
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa) // Executa criartarefa quando clicado
