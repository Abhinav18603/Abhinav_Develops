document.addEventListener('DOMContentLoaded', () => {
    
    if (typeof FontAwesome === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js';
        script.defer = true;
        document.head.appendChild(script);
    }

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('#menu-btn');
    const navbar = document.querySelector('.header .flex .navbar');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    });

    // Initializing Swiper for Courses
    new Swiper('.course-slider', {
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination', 
            clickable: true,
        },
        breakpoints: {
            540: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    // Initializing Swiper for Teachers
    new Swiper('.teachers-slider', {
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination', 
            clickable: true,
        },
        breakpoints: {
            540: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    // Initializing Swiper for Reviews
    new Swiper('.reviews-slider', {
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination', 
            clickable: true,
        },
        breakpoints: {
            540: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
});
