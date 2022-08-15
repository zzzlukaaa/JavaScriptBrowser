const cartProducts = document.querySelector('.cart__products');        
const product= document.querySelectorAll('.product');              
let vendorСode = [];                                              

function addProduct(count, imgProduct, idProduct){                 
    if((vendorСode.length === 0) || (!vendorСode.includes(idProduct))) {       
        vendorСode.push(idProduct);
        let strProduct = `<div class="cart__product" data-id=${idProduct}>
                                <img class="cart__product-image" src=${imgProduct}>
                                <div class="cart__product-count">${count}</div>
                            </div>`
        cartProducts.insertAdjacentHTML('beforeEnd', strProduct);
    } else {                                                       
        let str = `.cart__product[data-id="${idProduct}"]`
        const countChange= document.querySelectorAll(str);
        countChange[0].children[1].innerText = +count + (+countChange[0].children[1].innerText)
    }
}

product.forEach(element => {
    element.addEventListener('click', event => {
            
        let productQuantity= +event.target.closest('.product').querySelectorAll('.product__quantity-value')[0].innerText;    
        let productImage = event.target.closest('.product').querySelectorAll('.product__image')[0].currentSrc;              
        let productId = event.target.closest('.product').getAttribute('data-id')                              

      
        if(event.target.className.includes('product__quantity-control_dec')) {
            if(productQuantity > 0) {
                event.target.closest('.product').querySelectorAll('.product__quantity-value')[0].innerText = productQuantity - 1
            }
        }

        if(event.target.className.includes('product__quantity-control_inc')) {
            event.target.closest('.product').querySelectorAll('.product__quantity-value')[0].innerText = productQuantity + 1
        }

        if(event.target.className.includes('product__add')) {
            if(productQuantity > 0) {
                addProduct(productQuantity, productImage, productId);
            }
        }
    }) 
});