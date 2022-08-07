const timerStart = document.getElementById('timer');


let t = 59;
 
	function fun() {
        if(t>0){
        t--

         timerStart.innerHTML = t;
		
		} 
        if (t === 0) {
			alert('Вы победили в конкурсе!');
    }

    }
	
	let inter = setInterval("fun()", 1000);

    