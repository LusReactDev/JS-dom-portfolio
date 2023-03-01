function showProducts() {

    let count = localStorage.getItem('id')
    productsSection.innerHTML = ''

    for (let i = 1; i <= count; i++) {
        let product = JSON.parse(localStorage.getItem(`product_${i}`))

        if (product) {

            productsSection.innerHTML += `
            <div class="col-lg-4 col-md-6 text-center">
            <div class="single-product-item">
                 <div class="product-image" >
                     <a href="single-product.html"><img src="assets/img/products/${product.image}"></a>
                 </div>
                <h3>${product.name}</h3>
                <p class="product-price"><span>Per Kg</span> ${product.price}$ </p>
                <a href="#" onclick='addToCart(${product.id})' class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
            </div>
        </div>
           `
        }
    }
}

function addToCart(id) {
    let oldProduct = JSON.parse(localStorage.getItem(`product_${id}`))
    let product
    if (!(localStorage.getItem(`product_cart_${id}`))) {
        product = oldProduct
        product.count = 1
    } else {
        product = JSON.parse(localStorage.getItem(`product_cart_${id}`))
        product.count++
    }
    product.price = oldProduct.price * product.count
    localStorage.setItem(`product_cart_${id}`, JSON.stringify(product))
    location.href = 'cart.html'
}


showProducts()

/****Slider****/

let sliderImages = JSON.parse(localStorage.getItem('images'))
let sliderSection = document.querySelector('.hero-bg')
let i = 0

setInterval(() => {
    i++
    if(i == sliderImages.length) i = 0
    sliderSection.style.backgroundImage = `url(./assets/img/slider/${sliderImages[i]})`
}, 4000)