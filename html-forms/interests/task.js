const interest = document.querySelectorAll('.interest');

interest.forEach(element => {
    element.addEventListener('change', (event) =>{
        const trueFalse = event.target.checked;
        const eventInterest = event.target.closest('.interest')
        const interestCheck = eventInterest.children[1].querySelectorAll('.interest__check')
        
        interestCheck.forEach(element => {
            element.checked = trueFalse;
        });
    });
});
   