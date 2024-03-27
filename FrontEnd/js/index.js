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
