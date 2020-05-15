const productList = document.getElementById('product-list');

function getProdactsList(data) {
    for (let i = 0; i < data.length; i++) {
        productList.insertAdjacentHTML('beforeend', `
            <div class="form">
                <div class="title">${data[i].title}</div>
                <div class="memory">Объем памяти: ${data[i].memory}</div>
                <div class="price">Стоимость: ${data[i].price}руб.</div>
            <div>
    `);
    }
}

const xhr = new XMLHttpRequest();
xhr.open('GET', 'devices.json', true);
xhr.onload = function() {
    const data = JSON.parse(this.responseText);
    console.log(data);
    getProdactsList(data);
}
xhr.send(null);