let menu = document.getElementById('menu');

function sild() {

  if (menu.style.right === "-100%" || menu.style.right === "") {
    menu.style.right = "0px";
  } else {
    menu.style.right = "-100%";
  }
}


const spans = document.querySelectorAll('.home h1 span');
spans.forEach((span, index) => {
  span.style.animationDelay = `${index * 0.1}s`;
});   

///=============================================

 window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.Navbar');
        const scrollPoint = window.innerHeight;

        if (window.scrollY > scrollPoint) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

//===============================

const slides = document.querySelectorAll(".poster-slid");
let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove("active");
    slide.style.left = "100%";
    slide.style.opacity = 0;
  });

  slides[i].classList.add("active");
  slides[i].style.left = "20px";
  slides[i].style.opacity = 1;
}

showSlide(index);

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000);

// =================================

document.addEventListener('DOMContentLoaded', () => {
    const firstCard = document.getElementById('firstcard');
    const secondCard = document.getElementById('secondcard');
    const thedCard = document.getElementById('thedcard');
    const joulsDiv = document.querySelector('.jouls');
    const jouilHome = document.querySelector('.jouil-home');

    const sectionsToHide = [
        document.querySelector('.home'),
        document.querySelector('.second-page'),
        document.querySelector('.card-showing'),
        document.querySelector('.small-content'),
        document.querySelector('.product'),
    ];

    const first = [
      './images/pic-1.png',
      './images/pic-2.png',
      './images/pic-3.png',
      './images/pic-4.png',
      './images/pic-5.png',
      './images/pic-6.png',
      './images/pic-7.png',
    ];

    const bridalBlissImages = [
        './images/second-jouil-1.png',
        './images/second-jouil-2.png',
        './images/second-jouil-3.png',
        './images/second-jouil-4.png',
        './images/second-jouil-5.png',
        './images/second-jouil-7.png',
        './images/second-jouil-8.png',
    ];

    const BlissImages = [
        './images/thed-ima-1.png',
        './images/thed-ima-2.png',
        './images/thed-ima-3.png',
        './images/thed-ima-4.png',
        './images/thed-ima-5.png',
        './images/thed-ima-6.png',
        './images/thed-ima-7.png',
        './images/thed-ima-8.png',
    ];

    const updateProductImages = (newImages) => {
        const productCards = document.querySelectorAll('.product-card img.card-img');
        productCards.forEach((img, index) => {
            if (newImages[index]) {
                img.src = newImages[index];
            }
        });
    };

    const handleCardClick = (imagePath) => {
        sectionsToHide.forEach(section => {
            if (section) section.style.display = 'none';
        });
        if (joulsDiv && jouilHome) {
            joulsDiv.style.display = 'block';
            jouilHome.style.backgroundImage = `url('${imagePath}')`;
            jouilHome.style.backgroundSize = 'cover';
            jouilHome.style.backgroundPosition = 'center';
            window.scrollTo(0, 0);
        }
    };

    firstCard?.addEventListener('click', () => {
      handleCardClick('./images/card-1.png');
      updateProductImages(first);
    });

    secondCard?.addEventListener('click', () => {
        handleCardClick('./images/card-2.png');
        updateProductImages(bridalBlissImages);
    });

    thedCard?.addEventListener('click', () => {
        handleCardClick('./images/card-3.png');
        updateProductImages(BlissImages);
    });
});
