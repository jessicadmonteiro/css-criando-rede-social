let buttonFollw = document.querySelectorAll(".bt_follow")

for(let i = 0; i < buttonFollw.length; i++){
    buttonFollw[i].addEventListener("click", function(){
        let button = buttonFollw[i]
        let trocaStyle = button.classList.toggle("bt_following")
        if(trocaStyle){
            button.textContent = "Seguindo"
        }else{
            button.textContent = "Seguir"
        }
        
    })
    
}


const buttonModal = document.querySelectorAll("[data-modal]")

for(let i = 0; i < buttonModal.length; i++){
    buttonModal[i].addEventListener("click", function(){
        let valueButtonModal = buttonModal[i].getAttribute("data-modal")

        document.getElementById(valueButtonModal).classList.toggle("show_screen")
        console.log(document.getElementById(valueButtonModal))
    })
}

let button_heart = document.querySelectorAll(".bt_heart")

for (let i = 0; i < button_heart.length; i++){
    button_heart[i].addEventListener("click", function(){
        let button = button_heart[i]
        button.innerHTML = "❤️"  
})
}
