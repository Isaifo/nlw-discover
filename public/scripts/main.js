import { Modal } from './modal'

const modal = Modal()


//Pegar todos os botões com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.array.forEach(button => {
    // adicionar a escuta
    button.eventlistener("click", event => {
      
        modal.open()
    })

    })



