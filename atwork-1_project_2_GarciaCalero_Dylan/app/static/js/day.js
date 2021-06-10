const eventday_API = 'https://www.pgm.gent/data/gentsefeesten/events.json';

(() => {
    
    const app = {
        initialize() {
            this.cacheElements();
            this.getDatafromEvents();
        },
        cacheElements() {
           this.$eventData = document.querySelector('.event--day');
        },
        getDatafromEvents() {
            fetch(eventday_API, {})
                .then(response => response.json())
                .then(json => this.loadDatafromEvents(json))
                .catch((error) => console.error(error));
        },
        loadDatafromEvents(eventData) {
            eventData = eventData.slice(0-9);
            console.log(eventData);
            this.$eventData.innerHTML = eventData.map((event) => {
                    return `
                    <li>
                        <article>
                            <a href="detail.html">
                                <div class="event--main">
                                    <div class="overflow--image">
                                        <img loading="lazy" src="${event.image.thumb}" alt="">
                                    </div>
                                    <div class="timestamp">
                                        <p>${event.day} Jul</p>
                                        <p>${event.start}</p>
                                    </div>
                                </div>
                                <div class="event--info">
                                    <h2 class="event--name">${event.title}</h2>
                                    <h3 class="event--place">${event.location}</h3>
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