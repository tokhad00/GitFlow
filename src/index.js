import { getData } from './getData.js';
import { getMemoryInUnits } from './getMemoryInUnits.js';
import { getPriceInWords } from './getPriceInWords.js';

/**
 * Create application
 * @class
 */
class App {
    constructor() {
        this.prodactsList = [];
    }

    /** Application entry point */
    async start() {
        /**
         * @global
         * @type {object}
         */
        this.prodactsList = await getData('devices.json');

        this.displayProdactsList(this.prodactsList);
    }

    /**
     * Display prodacts list
     * @param {object} data data array from json-file
     */
    displayProdactsList(data) {
        /** Container for displaying prodacts list information */
        const productList = document.getElementById('product-list');

        for (let i = 0; i < data.length; i++) {
            productList.insertAdjacentHTML('beforeend', `
                <div class="form">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${data[i].title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Объем памяти: ${data[i].memory}</h6>
                            <h6 class="card-subtitle mb-2 text-muted">Стоимость: <span class="bold">${data[i].price}руб.</span></h6>
                            <button type="button" class="btn btn-info">Купить</button>
                        </div>
                    </div>
                <div>
            `);
        }
    }
}

const app = new App(document.getElementById('app'));
app.start()