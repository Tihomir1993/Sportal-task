document.addEventListener("DOMContentLoaded", function() {
    let isDown = false;
    let startX;
    let scrollLeft;
    const slider = document.querySelector('.news-slider');

    const end = () => {
        isDown = false;
        slider.classList.remove('active');
    }

    const start = (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        e.preventDefault();
    }

    const move = (e) => {
        if (!isDown) return;

        e.preventDefault();
        const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
        const dist = (x - startX);
        slider.scrollLeft = scrollLeft - dist;
    }

    (() => {
        slider.addEventListener('mousedown', start);
        slider.addEventListener('touchstart', start);

        slider.addEventListener('mousemove', move);
        slider.addEventListener('touchmove', move);

        slider.addEventListener('mouseleave', end);
        slider.addEventListener('mouseup', end);
        slider.addEventListener('touchend', end);
    })();


    const myJSON = [{
        newsImage: "./assets/img/image-news.png",
        newsDate: "13 февруари 2020 | 08: 01",
        newsDescription: "Гешев с незабавна проверка за горене на отпадъци в ТЕЦ-овете на Ковачки",
        status: "older"
    }, {
        newsImage: "./assets/img/image-news.png",
        newsDate: "13 февруари 2020 | 08:01",
        newsDescription: "Васил Божков помолил руснаци да му помогнат, за да излезе от ареста в Абу Даби",
        status: "updated"
    }, {
        newsImage: "./assets/img/image-news.png",
        newsDate: "13 февруари",
        newsDescription: "Пореден въоръжен грабеж в София! Този път обраха магазин в кв. 'Изток'",
        status: "older"
    }, {
        newsImage: "./assets/img/image-news.png",
        newsDate: "13 февруари 2020 | 08: 01",
        newsDescription: "Има задържан за банковия обир в София",
        status: "updated"
    }, {
        newsImage: "./assets/img/image-news.png",
        newsDate: "13 февруари 2020 | 08:01",
        newsDescription: "Васил Божков помолил руснаци да му помогнат, за да излезе от ареста в Абу Даби",
        status: "updated"
    }, {
        newsImage: "./assets/img/image-news.png",
        newsDate: "13 февруари",
        newsDescription: "Пореден въоръжен грабеж в София! Този път обраха магазин в кв. 'Изток'",
        status: "older"
    }, {
        newsImage: "./assets/img/image-news.png",
        newsDate: "13 февруари 2020 | 08: 01",
        newsDescription: "Има задържан за банковия обир в София",
        status: "updated"
    }];
    //const myObj = JSON.parse(myJSON);

    const news = document.getElementById("js-news");

    for (let index = 0; index < myJSON.length; index++) {
        news.innerHTML += `
        <a href='#' class='news-slide'> 
            <div class='img-wrapper'>
                <img src='${myJSON[index]["newsImage"]}' alt='' />
             </div> 
             <div class="date">${myJSON[index]["newsDate"]}</div>
                <div class="description">
                    <p>${myJSON[index]["newsDescription"]}</p>
                </div>
        </a>`;
        if (myJSON[index]["status"] == 'updated') {
            document.getElementsByClassName('news-slide')[index].classList.add('updated')
            document.getElementsByClassName('img-wrapper')[index].innerHTML += '<div class="updated-img"><img src="./assets/img/image-update.png" alt="" /></div>'
        }

    }
});