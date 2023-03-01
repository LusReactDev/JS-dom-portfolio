let id = location.hash.slice(1)

let product = JSON.parse(localStorage.getItem(`product_${id}`))


names.value = product.name

price.value = product.price

img.setAttribute('src', `./image/products/${product.image}`)

function edit() {
    product.name = names.value
    product.price = price.value

    if (image.files.length > 0) {
        product.image = image.files[0]['name']
    }

    localStorage.setItem(`product_${id}`, JSON.stringify(product))
    location.href = 'admin.html'
}

function setImg(input) {
    img.setAttribute('src', `./image/products/${input.files[0]['name']}`)
}