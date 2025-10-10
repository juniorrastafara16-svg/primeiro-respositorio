const buttonSorteio = document.querySelector(".sorteado")

function sorteador(){
const max = Math.floor(document.querySelector(".max").value)
const min = Math.ceil (document.querySelector(".min").value)

const result = Math.floor(Math.random() * (max - min + 1)) + min;


alert (result)

}


buttonSorteio.addEventListener("click" , sorteador)



