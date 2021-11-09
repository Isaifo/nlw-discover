import Modal from './modal.js'

const modal = Modal()


//Pegar todos os botões com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    // adicionar a escuta
    button.addEventListener("click", event => {
      
        modal.open()
        
    })

    })

    const deleteButton = document.querySelectorAll(".actions a.delete")

    deleteButton.forEach(button =>{
        button.addEventListener("click", event =>{
            modal.open();
        })
    })





