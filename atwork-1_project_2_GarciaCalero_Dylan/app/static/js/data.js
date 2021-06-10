const Categories_API = 'https://www.pgm.gent/data/gentsefeesten/categories.json';

(() => {
    
    const app = {
        initialize() {
            this.cacheElements();
            this.getDatafromCategories();
        },
        cacheElements() {
           this.$categoriesData = document.querySelector('.categories');
        },
        getDatafromCategories() {
            fetch(Categories_API, {})
                .then(response => response.json())
                .then(json => this.loadDatafromCategories(json))
                .catch((error) => console.error(error));
        },

        loadDatafromCategories(categoriesData) {
            categoriesData = categoriesData.slice(0,19);
            this.$categoriesData.innerHTML = categoriesData.map((event) => {
                    return `
                    <li><a href="#${event}">${event}</a></li>
                    `
                    ;
                    
            }).join('');
        }
    };
    app.initialize()
})();