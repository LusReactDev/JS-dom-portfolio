let images = []

btn.addEventListener('click', (e) => {
    e.preventDefault()
    let img = file.files[0]['name']
    if(localStorage.getItem('images')){
        images = JSON.parse(localStorage.getItem('images'))
    }
    images.push(img)
    localStorage.setItem('images', JSON.stringify(images))

    showSlider()
})

function showSlider(){
    sliderBox.innerHTML = ''
 let  slider = JSON.parse(localStorage.getItem('images'))
 slider.forEach((e, i) =>{
    sliderBox.innerHTML += `
    <div class='slide rounded-lg shadow img-thumbnail' style='background-image: url(./image/slider/${e})'>
        <i onclick='icon(${i})' class='fa fa-trash-alt rounded'></i>
    </div>
    `
 })

}

function icon(id){
    let  slider = JSON.parse(localStorage.getItem('images'))
    slider.splice(id, 1)
    localStorage.setItem('images', JSON.stringify(slider))
    showSlider()
}
showSlider()

