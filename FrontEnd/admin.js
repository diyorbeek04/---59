// fetch('http://localhost:8000/AllFlat')
// .then(res => res.json())
// .then(data => AllFlat(data))

// let Number = document.getElementById('id')
// let Photo = document.getElementById('title')
// let Price = document.getElementById('price')
// let Delete = document.getElementById('delete')
// let Edit = document.getElementById('edit')
// let Add = document.getElementById('add')
// let CardFlat = document.getElementById('cardFlat')
// let Overlay = document.getElementById('overlay')
// let ModalAdd = document.getElementById('modalAdd')
// let ModalEdit = document.getElementById('modalEdit')
// let NoModal = document.getElementById('noModal')
// let PhotoAdd = document.getElementById('PhotoAdd')
// let TitleAdd = document.getElementById('TitleAdd')
// let DescAdd = document.getElementById('DescAdd')
// let PriceAdd = document.getElementById('PriceAdd')
// let LocationImageAdd = document.getElementById('LocationImageAdd')
// let LocationAdd = document.getElementById('LocationAdd')
// let ButtonAdd = document.getElementById('ButtonAdd')
// let PhotoEdit = document.getElementById('PhotoEdit')
// let TitleEdit = document.getElementById('TitleEdit')
// let DescEdit = document.getElementById('DescEdit')
// let PriceEdit = document.getElementById('PriceEdit') 
// let LocationImageEdit = document.getElementById('LocationImageEdit')
// let LocationEdit = document.getElementById('LocationEdit')
// let ButtonEdit = document.getElementById('ButtonEdit')

// // Edit.value = elem.id
// ButtonEdit.addEventListener('click' , (e) => {
//     e.preventDefault()
//     let bodyEdit = {
//         FlatImage: PhotoEdit.value,
//         FlatTitle: TitleEdit.value,
//         FlatDesc: DescEdit.value,
//         FlatPrice: PriceEdit.value,
//         FlatLocationImage: LocationImageEdit.value,
//         FlatLocation: LocationEdit.value, 
//     }
//     console.log(bodyEdit);
//     fetch(`http://localhost:8000/AllFlat/${elem.id == e.target.value ?  elem/id : null}` , {
//         method: "PUT" ,
//         headers: {
//             "Content-type": "application/json" ,
//         },
//         body: JSON.stringify(bodyEdit)
//     })
//     .then(res => res.json())
//     .then(data => data)
//    setTimeout(() => {
//     window.location.reload();
//    }, 2000);
// })
// Add.addEventListener('click' , () => {
//     ModalAdd.className = "ModalAdd"
//     Overlay.className = "overlay"
// })
// Overlay.addEventListener('click' , () => {
//     ModalAdd.className = "no__ModalAdd"
//     Overlay.className = "no__overlay"
// })
// NoModal.addEventListener('click' , () => {
//     ModalAdd.className = "no__ModalAdd"
//     Overlay.className = "no__overlay"
// })


// ButtonAdd.addEventListener('click' , (e) => {
//     e.preventDefault()
//     let body = {
//       FlatImage: PhotoAdd.value,
//       FlatTitle: TitleAdd.value,
//       FlatDesc: DescAdd.value,
//       FlatPrice: PriceAdd.value,
//       FlatLocationImage: LocationImageAdd.value,
//       FlatLocation: LocationAdd.value,  
//     }
     
//     fetch('http://localhost:8000/AllFlat' , {
//         method: "POST" ,
//         headers: {
//             "Content-type": "application/json" ,
//         },
//         body: JSON.stringify(body)
//     })
//     .then(res => res.json())
//     .then(data => data)
//    setTimeout(() => {
//     window.location.reload();
//    }, 2);
// })

// let ChatSection = document.getElementById('menu')
// let Fragment = document.createDocumentFragment()
// let AllFlat =(arr) => {
//     console.log(arr);
//     arr?.map(elem => {
//         let Clone = templateMenu.content.cloneNode(true)
//         Clone.getElementById('id').textContent = elem.id 
//         Clone.getElementById('title').textContent = elem.FlatTitle;
//         Clone.getElementById('price').textContent = elem.FlatPrice
//         Clone.getElementById('cardFlat')

//         Clone.getElementById('edit').value = elem.id
// Clone.getElementById('edit').addEventListener('click' , (e) => {
//     ModalEdit.className = "ModalEdit"
//     Overlay.className = "overlay"
// if (elem.id == e.target.value) {
//     PhotoEdit.defaultValue = elem.FlatImage
//     TitleEdit.defaultValue = elem.FlatTitle
//     DescEdit.defaultValue = elem.FlatDesc
//     PriceEdit.defaultValue = elem.FlatPrice
//     LocationImageEdit.defaultValue = elem.FlatLocationImage
//     LocationEdit.defaultValue = elem.FlatLocation


// }
// })
// Overlay.addEventListener('click' , () => {
//     ModalEdit.className = "no__ModalEdit"
//     Overlay.className = "no__overlay"
// })
// NoModal.addEventListener('click' , () => {
//     ModalEdit.className = "no__Modal"
//     Overlay.className = "no__overlay"
// })

//         Clone.getElementById('delete').addEventListener('click' , () => {
//             fetch(`http://localhost:8000/AllFlat/${elem.id}` , {
//                 method : 'DELETE' ,
//             })
//             .then(res => res.json())
//             .then(data => data)

//             setTimeout(() => {
//               window.location.reload()  
//             }, 2);
//         })
//         Fragment.appendChild(Clone)
//     })
//     ChatSection.appendChild(Fragment)
// }
// AllFlat()

fetch('http://localhost:8000/AllFlat')
.then(res => res.json())
.then(data => AllFlat(data))

let templateMenu = document.getElementById('templateMenu'); // Добавляем объявление templateMenu

let ChatSection = document.getElementById('menu')
let Overlay = document.getElementById('overlay')

let Number = document.getElementById('id')
let Photo = document.getElementById('title')
let Price = document.getElementById('price')
let Delete = document.getElementById('delete')
let Edit = document.getElementById('edit')
let Add = document.getElementById('add')
let CardFlat = document.getElementById('cardFlat')
let ModalAdd = document.getElementById('modalAdd')
let NoModal = document.getElementById('noModal')
let PhotoAdd = document.getElementById('PhotoAdd')
let TitleAdd = document.getElementById('TitleAdd')
let DescAdd = document.getElementById('DescAdd')
let PriceAdd = document.getElementById('PriceAdd')
let LocationImageAdd = document.getElementById('LocationImageAdd')
let LocationAdd = document.getElementById('LocationAdd')
let ButtonAdd = document.getElementById('ButtonAdd')
let ModalEdit = document.getElementById('modalEdit')
let PhotoEdit = document.getElementById('PhotoEdit')
let TitleEdit = document.getElementById('TitleEdit')
let DescEdit = document.getElementById('DescEdit')
let PriceEdit = document.getElementById('PriceEdit') 
let LocationImageEdit = document.getElementById('LocationImageEdit')
let LocationEdit = document.getElementById('LocationEdit')
let ButtonEdit = document.getElementById('ButtonEdit')

// Edit.value = elem.id
// ButtonEdit.addEventListener('click' , (e) => {
//     e.preventDefault()
//     let bodyEdit = {
//         FlatImage: PhotoEdit.value,
//         FlatTitle: TitleEdit.value,
//         FlatDesc: DescEdit.value,
//         FlatPrice: PriceEdit.value,
//         FlatLocationImage: LocationImageEdit.value,
//         FlatLocation: LocationEdit.value, 
//     }
//     console.log(bodyEdit);
//     fetch(`http://localhost:8000/AllFlat/${elem.id == e.target.value ?  elem.id : null}` , {
//         method: "PUT" ,
//         headers: {
//             "Content-type": "application/json" ,
//         },
//         body: JSON.stringify(bodyEdit)
//     })
//     .then(res => res.json())
//     .then(data => data)
//    setTimeout(() => {
//     window.location.reload();
//    }, 2000);
// })

ButtonEdit.addEventListener('click', (e) => {
    e.preventDefault();
    let bodyEdit = {
        FlatImage: PhotoEdit.value,
        FlatTitle: TitleEdit.value,
        FlatDesc: DescEdit.value,
        FlatPrice: PriceEdit.value,
        FlatLocationImage: LocationImageEdit.value,
        FlatLocation: LocationEdit.value, 
    };
    console.log(bodyEdit);
    fetch(`http://localhost:8000/AllFlat/${elem.id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(bodyEdit)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data); // Результат обновления данных квартиры
        window.location.reload(); // Перезагрузка страницы после успешного обновления данных
    })
    .catch(err => {
        console.error('Error:', err);
        // Обработка ошибки, например, отображение сообщения пользователю
    });
});

Add.addEventListener('click' , () => {
    ModalAdd.className = "ModalAdd"
    Overlay.className = "overlay"
})
Overlay.addEventListener('click' , () => {
    ModalAdd.className = "no__ModalAdd"
    Overlay.className = "no__overlay"
})
NoModal.addEventListener('click' , () => {
    ModalAdd.className = "no__ModalAdd"
    Overlay.className = "no__overlay"
})


ButtonAdd.addEventListener('click' , (e) => {
    e.preventDefault()
    let body = {
      FlatImage: PhotoAdd.value,
      FlatTitle: TitleAdd.value,
      FlatDesc: DescAdd.value,
      FlatPrice: PriceAdd.value,
      FlatLocationImage: LocationImageAdd.value,
      FlatLocation: LocationAdd.value,  
    }
     
    fetch('http://localhost:8000/AllFlat' , {
        method: "POST" ,
        headers: {
            "Content-type": "application/json" ,
        },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => data)
   setTimeout(() => {
    window.location.reload();
   }, 2);
})

let Fragment = document.createDocumentFragment()
let AllFlat =(arr) => {
    console.log(arr);
    arr?.map(elem => {
        let Clone = templateMenu.content.cloneNode(true)
        Clone.getElementById('id').textContent = elem.id 
        Clone.getElementById('title').textContent = elem.FlatTitle;
        Clone.getElementById('price').textContent = elem.FlatPrice
        Clone.getElementById('cardFlat')

        Clone.getElementById('edit').value = elem.id
Clone.getElementById('edit').addEventListener('click' , (e) => {
    ModalEdit.className = "ModalEdit"
    Overlay.className = "overlay"
if (elem.id == e.target.value) {
    PhotoEdit.defaultValue = elem.FlatImage
    TitleEdit.defaultValue = elem.FlatTitle
    DescEdit.defaultValue = elem.FlatDesc
    PriceEdit.defaultValue = elem.FlatPrice
    LocationImageEdit.defaultValue = elem.FlatLocationImage
    LocationEdit.defaultValue = elem.FlatLocation


}
})
Overlay.addEventListener('click' , () => {
    ModalEdit.className = "no__ModalEdit"
    Overlay.className = "no__overlay"
})
NoModal.addEventListener('click' , () => {
    ModalEdit.className = "no__Modal"
    Overlay.className = "no__overlay"
})

        Clone.getElementById('delete').addEventListener('click' , () => {
            fetch(`http://localhost:8000/AllFlat/${elem.id}` , {
                method : 'DELETE' ,
            })
            .then(res => res.json())
            .then(data => data)

            setTimeout(() => {
              window.location.reload()  
            }, 2);
        })
        Fragment.appendChild(Clone)
    })
    ChatSection.appendChild(Fragment)
}
AllFlat()

