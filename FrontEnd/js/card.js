
fetch('http://localhost:8000/AllFlat')
    .then(res => res.json())
    .then(data => Data(data))
let dataSection = document.getElementById("cards")
let button = document.getElementById("card__item--button")
let Fragment = document.createDocumentFragment()
let Data = (arr) => {
    arr.map(elem => {
        let Clone = templateFlat.content.cloneNode(true)
        Clone.getElementById('card__item--images').src = elem.FlatImage
        Clone.getElementById('card__item--h2').textContent = elem.FlatTitle
        Clone.getElementById('card__item--p').textContent = elem.FlatDesc
        Clone.getElementById('card__item--small').textContent = elem.FlatPrice
        Clone.getElementById('card__item--img').src = elem.FlatLocationImage
        Clone.getElementById('card__item--span').textContent = elem.FlatLocation
        Clone.getElementById('card__item__button').textContent = elem.FlatButton
        Clone.getElementById('card__item__button').value = elem.id
        Clone.getElementById('card__item__button').addEventListener('click' , (e) => {
            e.preventDefault()
            console.log(e.target.value);
            window.localStorage.setItem('flatId', e.target.value)
            window.location.href = 'all-flat.html'
        })
        Fragment.appendChild(Clone)
    })
    dataSection.appendChild(Fragment)
}