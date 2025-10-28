const carouselData = [
    {
        imageUrl: './img/imagem_1.jpg',
        title: 'Esta é a nova Ranger Ford 2022. Verifique novidades.',
        link: 'lancamento.html'
    },
    {
        imageUrl: './img/imagem_2.jpg',
        title: 'Ford a nossa história',
        link: 'lancamento.html'
    },
    {
        imageUrl:'./img/imagem_3.jpg',
        title: 'Nova Ford Bronco Sport 2022',
        link: 'lancamento.html'
    }
];

class Carousel {
    constructor(data) {
        this.data = data;
        this.currentIndex = 0;
        this.carouselDiv = document.getElementById('carousel');
        this.carouselTitleDiv = document.getElementById('carousel-title');
        this.prevButton = document.getElementById('prevBtn');
        this.nextButton = document.getElementById('nextBtn');
        this.timer = null;
    }

    _updateView() {
        if (!this.carouselDiv || !this.carouselTitleDiv) {
            return;
        }
        const currentItem = this.data[this.currentIndex];
        this.carouselDiv.style.backgroundImage = `url(${currentItem.imageUrl})`;
        this.carouselTitleDiv.innerHTML = currentItem.title;
    }

    _resetTimer() {
        clearInterval(this.timer);
        this.timer = setInterval(() => this.next(false), 2000);
    }

    next(reset = true) {
        this.currentIndex++;
        if (this.currentIndex >= this.data.length) {
            this.currentIndex = 0;
        }
        this._updateView();
        if (reset) this._resetTimer();
    }

    prev() {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.data.length - 1;
        }
        this._updateView();
        this._resetTimer();
    }

    init() {
        if (this.carouselDiv) {
            this.carouselDiv.addEventListener('click', () => {
                const currentItem = this.data[this.currentIndex];
                window.location.href = currentItem.link;
            });
        }
        
        if (this.prevButton && this.nextButton) {
            
            this.prevButton.addEventListener('click', (e) => {
                e.stopPropagation();
                this.prev();
            });
            this.nextButton.addEventListener('click', (e) => {
                e.stopPropagation();
                this.next();
            });
        }
        this._updateView();
        this._resetTimer();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const myCarousel = new Carousel(carouselData);
    myCarousel.init();
});