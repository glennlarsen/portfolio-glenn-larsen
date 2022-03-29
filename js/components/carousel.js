
export default function carousel(projects) {
    const carousel = document.querySelector(".carousel_track");

    projects.forEach(function (project) {

    carousel.innerHTML += ` 
                            <a class="carousel_slide current-slide" data-bs-toggle="modal" data-bs-target="#modal${project.id}">
                            <div class="project" style="background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${project.image}) 50% 0% / cover no-repeat">
                            <h2>${project.title}</h2>
                            <h3>${project.type}</h3>
                            </div>
                            </a>`

    const nextButton = document.querySelector('.carousel_button-right');
    const prevButton = document.querySelector('.carousel_button-left');
    const carouselContainer = document.querySelector('.carousel_track');
    const slides = Array.from(carouselContainer.children);
    let slidesPage = Math.ceil(slides.length);

    const carouselStyles = getComputedStyle(carouselContainer);
    const slidesGap = parseInt(carouselStyles.gap);
    const projectSlide = document.querySelector(".project");
    const projectSlideSize = projectSlide.getBoundingClientRect();
    const projectSlideWidth = projectSlideSize.width + slidesGap;  //Slide width + gap between slides


    let slide = 0;
    let movePer = projectSlideWidth;
    let maxMove = movePer * (slidesPage - 1);



    window.onresize = function () { location.reload(); }
    // Tablet view	
    let tabletView = window.matchMedia("(min-width: 750px)");
    let desktopView = window.matchMedia("(min-width: 1150px)");
    if (tabletView.matches) {
        movePer = projectSlideWidth;
        maxMove = movePer * (slidesPage - 2);
    }
    //desktop View
    if (desktopView.matches) {
        movePer = projectSlideWidth;
        maxMove = movePer * (slidesPage - 3);
    }

    let next = () => {
        slide = slide + movePer;
        if (slides == 1) { slide = 0; }
        for (const i of slides) {
            if (slide > maxMove) { slide = slide - movePer; }
            i.style.left = '-' + slide + 'px';
        }

    }

    let previous = () => {
        slide = slide - movePer;
        if (slide <= 0) { slide = 0; }
        for (const i of slides) {
            if (slidesPage > 1) {
                i.style.left = '-' + slide + 'px';
            }
        }
    }

    const hideShowArrows = () => {
        if (slide === 0) {
            prevButton.classList.add('is-hidden');
            nextButton.classList.remove('is-hidden');
        } else if (slide === maxMove) {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.add('is-hidden');
        } else {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.remove('is-hidden');
        }
    }

    //Next slide
    nextButton.addEventListener('click', e => {

        next();
        hideShowArrows();
    })

    //Previous slide
    prevButton.addEventListener('click', e => {

        previous();
        hideShowArrows();
    })


});
}

