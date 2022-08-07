


let modal = document.getElementById('modal_main');
  
let active = document.getElementsByClassName("modal_active");


let closes = document.getElementsByClassName("modal__close");
let listCloses = closes.item(0);

 let element = document.getElementsByClassName("show-success");
 let elements = element.item(0);


 let elementModal = document.getElementById("modal_success");


 
 // закрыть всплывающее окно
 listCloses.onclick = function() {
    modal.classList.remove("modal_active");
 }
 
 // Когда пользователь щелкает в другом месте, закрывает всплывающее окно
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove("modal_active");
    }
}

elements.onclick = function() {
    modal.classList.remove("modal_active"); 
    elementModal.classList.add("modal_active");
    


}

