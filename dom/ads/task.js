class Rotation {
    constructor(container){
        this.container = container;
        this.speed = 0;
        this.activRotatorElement = 0;
        this.rotator = Array.from(document.querySelectorAll('.rotator__case')); 
       
        this.change();
    }

    changeString() {
        this.speed =+this.rotator[this.activRotatorElement].dataset.speed
        this.rotator[this.activRotatorElement].style.color = this.rotator[this.activRotatorElement].dataset.color
    }

    change() {
        
        this.rotator.forEach(element => {
            element.classList.remove('rotator__case_active');

        });

        this.changeString();
        this.rotator[this.activRotatorElement].classList.add('rotator__case_active');
           
        setTimeout(() => {
            this.change()
        }, this.speed);

        this.activRotatorElement = ((this.activRotatorElement + 1) % this.rotator.length);
    }
}

new Rotation(document.querySelector('rotator'))