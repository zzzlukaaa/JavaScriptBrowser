

let i = 0;


let id = document.getElementById("clicker__counter");

 

const image = document.getElementById("cookie");
function changeSizes () {
  
    i++ 
  
    
if(i % 2 === 0){
    image.width = 300;
} else {
    image.width = 200;
}
id.innerHTML = i;
console.log(id);
}
image.onclick = changeSizes;

