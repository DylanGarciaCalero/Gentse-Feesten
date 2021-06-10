const eventdetail_API = 'https://www.pgm.gent/data/gentsefeesten/events.json';

(() => {
    
    const app = {
        initialize() {
            this.cacheElements();
            this.getDatafromEvents();
        },
        cacheElements() {
           this.$eventData = document.querySelector('.event--detail');
        },
        getDatafromEvents() {
            fetch(eventdetail_API, {})
                .then(response => response.json())
                .then(json => this.loadDatafromEvents(json))
                .catch((error) => console.error(error));
        },
        loadDatafromEvents(eventData) {
            eventData = eventData.slice(0,1);
            this.$eventData.innerHTML = eventData.map((event) => {
                    return `
                    <li>
                        <article>
                            <a href="#">
                                <div class= "event--detail__flex">
                                    <div class= "event--detail__image">
                                        <img src="${event.image.thumb}" alt="">
                                    </div>
                                    <div class= "event--detail__tekst">
                                        <h2>${event.title}</h2>
                                        <h3>${event.day_of_week} ${event.day} Juli ${event.start}</h3>
                                        <p>${event.description}</p>
                                    </div>
                                </div>
                            </a>
                        </article>
                    </li>
                    `
                    ;
                    
            }).join('');
        }
    };
    app.initialize()
})();