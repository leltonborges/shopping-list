btn_comprar.addEventListener('click', function () {
    let name_product = compra.value;
    if(!name_product) return;
    addLocalStorage(name_product);
    loadStorage()
    compra.value = ''
    compra.focus()
})

compra.addEventListener('keyup', function(event){
    event.preventDefault()
    if(event.keyCode === 13) btn_comprar.click()
})

btn_reset.addEventListener('click', function(e){
    e.preventDefault()
    localStorage.removeItem('compras')
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

const removeItem = (value) => {
    let storage = localStorage.getItem('compras');
    let storageSplit = storage.split(';')

    storageSplit.splice(value, 1);

    localStorage.setItem('compras', storageSplit.join(';'))
    loadStorage()
}

function createMenuItem(value, index, element) {
    let li = document.createElement(element);
    li.textContent = `${index+1} - ${value} `;
    li.appendChild(createButton(index))
    li.value = index
    return li;
}

function createButton(id = 0) {
    let button = document.createElement('button')
    button.textContent = "remove"
    button.id = `item-${id}`
    button.addEventListener('click', function (event) {
        event.preventDefault()
        removeItem(id)
    })
    button.classList.add('btn-items')
    return button;
}

window.addEventListener('load', function () {
    loadStorage()
})

const loadStorage = () => {
    let storage = localStorage.getItem('compras');
    if (storage) {
        const listarray = storage.split(";")

        let ol = document.createElement("ol")
        ol.classList.add('list')
        ol.id = "elements"
        listarray.forEach((v, k) => {
            ol.appendChild(createMenuItem(v, k, 'li'))
        })

        const list = document.querySelector('#list');
        const p = document.querySelector('#list p')
        let getOl = document.querySelector("ol#elements")

        if (getOl) list.removeChild(getOl);

        if (p) list.removeChild(p)

        list.appendChild(ol)
    } else {
        let p = document.createElement('p')
        p.textContent = 'Lista vazia'
        const list = document.querySelector('#list');
        const ol = document.querySelector('#elements')

        if (ol) list.removeChild(ol)
        list.appendChild(p)

    }
}