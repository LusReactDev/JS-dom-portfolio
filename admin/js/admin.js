if(!(localStorage.getItem('admin'))){
    location.href = 'login.html'
}

function show() {
    let tbody = document.querySelector('tbody')
    let count = localStorage.getItem('id')
    tbody.innerHTML = ''

    for (let i = 1; i <= count; i++) {
        let product = JSON.parse(localStorage.getItem(`product_${i}`))

        if (product) {
            tbody.innerHTML += `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.price} $</td>
                    <td class='text-center w-25'><img class='img-fluid w-25' src='./image/products/${product.image}'></td>
                    <td class='text-center'>
                        <a class='btn btn-primary' href='edit.html#${product.id}'><i class='fa fa-pen'></i></a>
                        <a class='btn btn-danger' onclick='remove(${product.id})' href='#'><i class='fa fa-trash-alt'></i></a>
                    </td>
                </tr>
           `
        }
    }
}

function remove(id){
    localStorage.removeItem(`product_${id}`)
    show()
}

show()