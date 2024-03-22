fetch('http://localhost:8000/AllFlat')
.then(res => res.json())
.then(data => AllFlat(data))

let Number = document.getElementById('id')
let Photo = document.getElementById('photo')
let Price = document.getElementById('price')
let Delete = document.getElementById('delete')
let Edit = document.getElementById('edit')
let Add = document.getElementById('add')
let CardFlat = document.getElementById('cardFlat')

let ChatSection = document.getElementById('menu')
let Fragment = document.createDocumentFragment()
let AllFlat =(arr) => {
    console.log(arr);
    arr?.map(elem => {
        let Clone = templateMenu.content.cloneNode(true)
        Clone.getElementById('id').textContent = elem.id 
        // Clone.getElementById('photo').setAttribute('src' , elem.FlatImage)
        Clone.getElementById('price').textContent = elem.FlatPrice
        Clone.getElementById('cardFlat')

        Fragment.appendChild(Clone)
    })
    ChatSection.appendChild(Fragment)
}
AllFlat()
