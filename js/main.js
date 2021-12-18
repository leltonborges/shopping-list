btn_comprar.addEventListener('click', function () {
    let name_product = compra.value;
    console.log(name_product);
    addLocalStorage(name_product);
    removeLocalStorage(null);
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

const removeLocalStorage = (value) => {
    let storage = localStorage.getItem('compras');
    let storageSplit = storage.split(';')

    console.log(storageSplit)
}

function createMenuItem(value, index, element) {
    let li = document.createElement(element);
    li.textContent = `${index+1} - ${value}`;
    li.value=index
    return li;
}

window.addEventListener('load', function () {
    let storage = localStorage.getItem('compras');
    if (storage) {
        const listarray = ["test1", "test2", "test3", "test4", "test5", "test1", "test2", "test3", "test4", "test5"]
        listarray.forEach((v, k) => console.log(`${v} - ${k}`))

        let ol = document.createElement("lo")
        ol.classList.add('list')
        listarray.forEach((v, k) => {
            ol.appendChild(createMenuItem(v, k, 'li'))
        })

        const list = document.querySelector('#list');
        const p = document.querySelector('#list p')
        list.removeChild(p)
        list.appendChild(ol)
    }

})