// listen to the window load event so we can start getting elements from the page
window.addEventListener("load", function () {

    let slidesPerView = 3;
    let spaceBetween = 40;

    if(window.innerWidth < 480){
        slidesPerView = 1;
        spaceBetween = 0;
    }

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView,
        spaceBetween,
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
});