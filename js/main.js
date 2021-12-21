btn_comprar.addEventListener('click', function () {
    let name_product = compra.value;
    addLocalStorage(name_product);
    // removeLocalStorage(null);
    loadStorage()
})

const addLocalStorage = (value) => {
    let storage = localStorage.getItem('compras');
    if (storage) {
        storage += `;${value}`;
    } else {
        storage = value;
    }
    localStorage.setItem('compras', storage);
}

// const removeLocalStorage = (value) => {
//     let storage = localStorage.getItem('compras');
//     let storageSplit = storage.split(';')

//     console.log(storageSplit)
// }

function createMenuItem(value, index, element) {
    let li = document.createElement(element);
    li.textContent = `${index+1} - ${value}`;
    li.value=index
    return li;
}

window.addEventListener('load', function () {
    loadStorage()
})

const loadStorage = () => {
    let storage = localStorage.getItem('compras');
    console.log(`localstorage: ${storage}`);
    if (storage) {
        const listarray = storage.split(";");
        listarray.forEach((v, k) => console.log(`${v} - ${k}`))

        let ol = document.createElement("ol")
        ol.classList.add('list')
        ol.id="elements"
        listarray.forEach((v, k) => {
            ol.appendChild(createMenuItem(v, k, 'li'))
        })

        const list = document.querySelector('#list');
        const p = document.querySelector('#list p')
        let getOl = document.querySelector("ol#elements")

        if(getOl) {
            list.removeChild(getOl)
            console.log("removeu ol");
        }
        
        if(p) list.removeChild(p)

        list.appendChild(ol)
    }
}