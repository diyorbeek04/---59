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
