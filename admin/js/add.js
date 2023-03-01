function add() {
    let name = document.querySelector('#name').value
    let price = document.querySelector('#price').value
    let image = document.querySelector('#image').files[0]['name']

    let id = 1

    if (localStorage.getItem('id')) {
        id = +localStorage.getItem('id') + 1
    }

    const product = {
        id: id,
        name: name,
        price: price,
        image: image
    }

    localStorage.setItem(`product_${id}`, JSON.stringify(product))
    localStorage.setItem(`id`, id)

    location.href = 'admin.html'
}