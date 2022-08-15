class ChatMessage {
    constructor (){
        this.chatWidget= document.querySelectorAll('.chat-widget');
        this.chatSide= document.querySelectorAll('.chat-widget__side-text');
        this.chatMessages = document.querySelector('.chat-widget__messages');
        this.chatInput = document.querySelector('.chat-widget__input');

        this.arrayAnswerRobotSale = ['Ой, всё продано','я уточняю наличие товара для Вас','мне не понятен Ваш запрос, задайте параметры поиска точнее','может Вы хотите купить другой товар?','я разбираюсь с Вашим вопросом..','добрый день','рад был помочь', 'Вы ещё здесь?','я отвечу на Ваш вопрос завтра','и Вам всего хорошего'];
        this.arrayAnswerRobotOther = ['добрый день','рад был помочь', 'Вы ещё здесь?','я отвечу на Ваш вопрос завтра','и Вам всего хорошего'];
        
        this.message = 0;  
        this.timeMessage = 0; 
              
        this.openChat();
        this.inputMessage();
    }

    openChat() {
        this.chatSide.forEach(element => {
            element.addEventListener('click', event => {
                this.timeMessage = (new Date().toTimeString()).slice(0,5)  
                if(this.message == 0) {    
                    this.chatMessages.innerHTML += `
                    <div class="message">
                    <div class="message__time">${this.timeMessage}</div>
                    <div class="message__text">Добрый день! Что сегодня покупаем?</div>
                    </div>`

                    this.message = 1;

                    if(event.target.classList.contains('chat-widget__side-text')){
                     this.chatWidget[0].classList.add('chat-widget_active')         
                    };
                } else {
                    this.arrayMessages.forEach(element => {
                        if(element.avtor == 'robot') {
                        this.chatMessages.innerHTML += `
                        <div class="message">
                        <div class="message__time">${element.time}</div>
                        <div class="message__text">${element.message}</div>
                        </div>` 
                        } else {
                            this.chatMessages.innerHTML += `
                            <div class="message message_client">
                            <div class="message__time">${element.time}</div>
                            <div class="message__text">${element.message}</div>
                            </div>` 
                        } 
                    })
                }
            this.chatMessages.focus()   
            })
        })
    }

    answerRobot(el){     
        if(el === 0){
             this.chatMessages.innerHTML += `<div class="message">
            <div class="message__time">${this.timeMessage}</div>
            <div class="message__text">Вы прислали пустое сообщение, ..надо что-нибудь написать</div>
            </div>` 
        } else {
            if(el.includes('хочу')  || el.includes('есть') || el.includes('купить')){
                let answer = Math.floor(Math.random() * 4);
                this.chatMessages.innerHTML += `<div class="message">
                <div class="message__time">${this.timeMessage}</div>
                <div class="message__text">${this.arrayAnswerRobotSale[answer]}</div>
                </div>` 
            } else{
                let answer = Math.floor(Math.random() * 4);
                this.chatMessages.innerHTML += `<div class="message">
                <div class="message__time">${this.timeMessage}</div>
                <div class="message__text">${this.arrayAnswerRobotOther[answer]}</div>
                </div>` 
                }
        }
    }

    inputMessage(){ 
        this.chatInput.addEventListener('change', event => {
            if(this.chatInput.value.trim().length !== 0) {  
                let messageTarget = event.target.value
                this.timeMessage = (new Date().toTimeString()).slice(0,5)
                this.chatMessages.innerHTML += `
                <div class="message message_client">
                <div class="message__time">${this.timeMessage}</div>
                <div class="message__text">${event.target.value}</div>
                </div>`
                this.chatInput.value = null;
                this.answerRobot(messageTarget)
           } else {
                this.answerRobot(0); 
            }
        })
    }
}

new ChatMessage(document.querySelector('.chat-widget'))
