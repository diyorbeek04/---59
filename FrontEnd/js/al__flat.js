fetch(`http://localhost:8000/AllFlat/${window.localStorage.getItem('flatId')}`)
    .then(res => res.json())
    .then(data => Data(data))
let dataSection = document.getElementById("cards")
let Fragment = document.createDocumentFragment()
let Data = (arr) => {
        let Clone = templateFlat.content.cloneNode(true)
        Clone.getElementById('card__item--images').src = arr.FlatImage
        Clone.getElementById('card__item--h2').textContent = arr.FlatTitle
        Clone.getElementById('card__item--p').textContent = arr.FlatDesc
        Clone.getElementById('card__item--small').textContent = arr.FlatPrice
        Clone.getElementById('card__item--img').src = arr.FlatLocationImage
        Clone.getElementById('card__item--span').textContent = arr.FlatLocation
        Fragment.appendChild(Clone)
    dataSection.appendChild(Fragment)
}
let Name = document.getElementById('name')
let number = document.getElementById('number')
let modalButton = document.getElementById('modal__button')
modalButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.localStorage.setItem('Name', Name.value)
    window.localStorage.setItem('Telephone', number.value)
    window.location.href = 'admin.html'
}
)
let Father = document.getElementById('father')
let modalForm = document.getElementById('modal__form')
let modaldiv = document.getElementById('modal')
let ExitButton = document.getElementById('exitButton')
let ZakazButton = document.getElementById('zakazButton')
let ModalActive = document.getElementById('modal')
let Overlay = document.getElementById('overlay')
ZakazButton.addEventListener('click', (e) => {
    e.preventDefault();
    ModalActive.className = 'modal'
    Overlay.className = 'overlay'
}
)
ExitButton.addEventListener('click', (e) => {
    e.preventDefault();
    ModalActive.className = 'no__active--modal'
    Overlay.className = 'no__overlay'
    modalForm.className ="modal--form"
    modaldiv.style.display = "none"
    window.location.reload()
}
)
Overlay.addEventListener('click', (e) => {
    e.preventDefault();
    ModalActive.className = 'no__active--modal'
    Overlay.className = 'no__overlay'
    modalForm.className ="modal--form"
    modaldiv.style.display = "none"
    window.location.reload()
}
)

Father.appendChild(Overlay)
Father.appendChild(modal)
