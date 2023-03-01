function showCartProducts() {

    tableBody.innerHTML = ''
    let totalPrice = 0
    totalPrice.innerHTML=totalPrice

    for (let i = 0; i <= localStorage.length; i++) {

        let cartProduct = JSON.parse(localStorage.getItem(`product_cart_${i}`))

        if (cartProduct) {

            totalPrice += cartProduct.price
            total.innerHTML = totalPrice
            tableBody.innerHTML += `
            <tr class="table-body-row">
				<td class="product-remove"><a href="javascript:void(0)"><i onclick="remove(${cartProduct.id})" class="far fa-window-close"></i></a></td>
				<td class="product-image"><img src="assets/img/products/${cartProduct.image}" alt=""></td>
				<td class="product-name">${cartProduct.name}</td>
				<td class="product-price">$${cartProduct.price/cartProduct.count}</td>
				<td class="product-quantity"><input onchange='changeCount(${cartProduct.id},this)' type="number" value="${cartProduct.count}"></td>
				<td class="product-total">$${cartProduct.price}</td>
			</tr>

            `
        }
    }
}
function changeCount(id,input){
    let oldProduct=JSON.parse(localStorage.getItem(`product_${id}`))
    let product=JSON.parse(localStorage.getItem(`product_cart_${id}`))

    product.count=+input.value
    product.price=oldProduct.price*product.count

    localStorage.setItem(`product_cart_${id}`,JSON.stringify(product))
    showCartProducts()

}

function remove(id){
    localStorage.removeItem(`product_cart_${id}`)
    showCartProducts()
}



showCartProducts()