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
  const jouilHomeHeading = document.querySelector('.jouil-home h1');
  const jouilHeading = document.querySelector('.content-in p');

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

  const handleCardClick = (imagePath, title, description) => {
    sectionsToHide.forEach(section => {
      if (section) section.style.display = 'none';
    });
    if (joulsDiv && jouilHome && jouilHomeHeading && jouilHeading) {
      joulsDiv.style.display = 'block';
      jouilHome.style.backgroundImage = `url('${imagePath}')`;
      jouilHome.style.backgroundSize = 'cover';
      jouilHome.style.backgroundPosition = 'center';
      jouilHomeHeading.innerHTML = title.replace(" ", "<br>");
      jouilHeading.innerHTML = description;
      window.scrollTo(0, 0);
    }
  };

  firstCard?.addEventListener('click', () => {
    handleCardClick(
      './images/card-1.png',
      'Minimalist Elegance',
      'Simplicity redefined—Minimalist Elegance celebrates the beauty of understated design. This collection is crafted for those who appreciate the quiet sophistication of clean lines, subtle details, and timeless pieces that enhance everyday style. Each item is designed to complement any look, whether worn alone for effortless refinement or layered for a modern twist. Perfect for those who value quality and versatility, Minimalist Elegance offers jewelry that speaks volumes in its simplicity.'
    );
    updateProductImages(first);
  });

  secondCard?.addEventListener('click', () => {
    handleCardClick(
      './images/card-2.png',
      'Bridal Bliss',
      'Celebrate love’s most precious moments with Bridal Bliss, a collection designed to enhance your wedding day with grace and sophistication. Featuring luminous pearls, sparkling stones, and intricate details, these pieces embody romance and elegance. Whether you’re walking down the aisle or commemorating a cherished anniversary, Bridal Bliss offers timeless jewelry that complements your beauty and captures the magic of your special day. Each piece is crafted to be a keepsake, treasured for years to come.'
    );
    updateProductImages(bridalBlissImages);
  });

  thedCard?.addEventListener('click', () => {
    handleCardClick(
      './images/card-3.png',
      'Timeless Classics',
      'Timeless Classics is a collection inspired by the enduring beauty of tradition and elegance. Featuring iconic designs and refined craftsmanship, these pieces are perfect for those who value jewelry with lasting appeal. From heirloom-inspired lockets to classic pearl studs, each item tells a story of sophistication and grace. Designed to seamlessly transition from everyday wear to life’s grand occasions, Timeless Classics offers jewelry that transcends trends and becomes a staple in your collection.'
    );
    updateProductImages(BlissImages);
  });
});

// ==========================================================

let number = 1;

const numberDisplay = document.getElementById("number");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

increaseBtn.addEventListener("click", () => {
  number++;
  numberDisplay.textContent = number;
});

decreaseBtn.addEventListener("click", () => {
  if (number > 1) {
    number--;
    numberDisplay.textContent = number;
  }
});

// =======================================

let ptag = document.getElementById('changecontent');
let colorsOne = document.getElementById('color-1');
let colorsTwo = document.getElementById('color-2');
let colorsThree = document.getElementById('color-3');

function change(type) {
  colorsOne.style.backgroundColor = "whitesmoke";
  colorsTwo.style.backgroundColor = "whitesmoke";
  colorsThree.style.backgroundColor = "whitesmoke";

  if (type === 'description') {
    ptag.innerHTML = `Delicately crafted to evoke the beauty of blooming roses, these soft rosebud-inspired studs are the 
                      epitome of romantic elegance. Perfect for adding a graceful touch to bridal ensembles, these earrings 
                      capture the timeless charm of floral motifs while maintaining a modern, sophisticated allure.
                      Their petite size and intricate design make them versatile enough for weddings, anniversaries, or any occasion 
                      that calls for a hint of romance. Whether gifted as a meaningful token of love or worn as a personal 
                      statement of style, these studs offer a balance of softness and elegance.`;
    colorsOne.style.backgroundColor = "white";
  }

  if (type === 'delivery') {
    ptag.innerHTML = `Orders are processed within 1-3 business days, excluding weekends and holidays, to ensure careful preparation 
                      and quality assurance. We offer both standard and express shipping options, with estimated delivery times ranging 
                      from 5-7 business days for standard and 2-3 business days for express, depending on your location. For international 
                      deliveries, transit times may vary from 7-14 business days, with customs processing potentially extending timelines. 
                      Each shipment includes a tracking number, allowing you to monitor your package every step of the way. For additional 
                      protection, all packages are insured against loss or damage during transit.`;
    colorsTwo.style.backgroundColor = "white";
  }

  if (type === 'return') {
    ptag.innerHTML = `We want you to love your Charmant purchase, but if you're not completely satisfied, we offer hassle-free returns within 
                      30 days of delivery. Items must be unworn, in original condition, and include all packaging and proof of purchase. 
                      Custom or personalized items are non-returnable unless defective. To start a return, contact our support team for guidance. 
                      Refunds are processed within 5-7 business days after inspection, and return shipping fees are the customer’s responsibility 
                      unless the return is due to our error or a defective item. Our goal is to make your return experience simple and stress-free.`;
    colorsThree.style.backgroundColor = "white";
  }
}

// ==================================

  const one = document.querySelector('#product');
  const tow = document.querySelector('#small');
  const three = document.querySelector('#second');
  const fore = document.querySelector('#home');
  const five = document.querySelector('#show');
  const six = document.querySelector('#visebel');
  const savan = document.querySelector('#card-showing');

  const productImages = {
    one: "./images/jouil-1.png",
    tow: "./images/jouil-2.png",
    three: "./images/jouil-3.png",
    fore: "./images/jouil-4.png",
    five: "./images/jouil-5.png",
    six: "./images/jouil-6.png",
    saven: "./images/jouil-7.png",
    eaite: "./images/jouil-5.png"
  };

  function item(type) {
    six.style.display = "block";
    one.style.display = "none";
    if (tow) tow.style.display = "none";
    if (three) three.style.display = "none";
    if (fore) fore.style.display = "none";
    if (five) five.style.display = "none";
    if (savan) savan.style.display = "none";

    const imagePath = productImages[type];

    if (imagePath) {
      document.querySelector('.img-showkesh-1 img').src = imagePath;
      document.querySelector('.img-shokwesh-2 img').src = imagePath;
      document.querySelector('.img-shokwesh-3 img').src = imagePath;
      document.querySelector('.img-shokwesh-4 img').src = imagePath;
    }
  }
