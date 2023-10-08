new Vue({
    el: '#app',
    data: {
        products: [
            { id: 1, name: 'Товар 1', price: 100 },
            { id: 2, name: 'Товар 2', price: 50 },
            { id: 3, name: 'Товар 3', price: 200 },
            { id: 4, name: 'Товар 4', price: 100000},
            { id: 5, name: 'Товар 5', price: 1},
            
        ],
        sortOrder: '',
    },
    computed: {
        sortedProducts() {
            const sorted = [...this.products];
            if (this.sortOrder === 'asc') {
                return sorted.sort((a, b) => a.price - b.price);
            } else if (this.sortOrder === 'desc') {
                return sorted.sort((a, b) => b.price - a.price);
            }
            return sorted;
        },
    },
    methods: {
        sortByPrice(order) {
            this.sortOrder = order;
        },
    },
});

