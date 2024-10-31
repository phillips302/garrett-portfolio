/***********************************************************
Utility Function that submits the contact form, then clears
the contents of the form after waiting 2 second.
************************************************************/
function finalizeForm() {
    var frm = document.getElementById("contactForm");
    frm.submit(); // Submit the form   
    setTimeout(function() {
        frm.reset();  // Reset all form data
      }, 200);
    return false; // Prevent page refresh
}

/***********************************************************
Background scroll opacity
************************************************************/
$(window).scroll(function() {
  var s = $(window).scrollTop(),
  opacityVal = (s / 700.0);
  $('.blurred-img').css('opacity', opacityVal);
});

$(function() {

  /*******************************************
    Have focus outline only for keyboard users 
  *******************************************/
  const handleFirstTab = (e) => {
    if(e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing')

      window.removeEventListener('keydown', handleFirstTab)
      window.addEventListener('mousedown', handleMouseDownOnce)
    }
  }

  const handleMouseDownOnce = () => {
    document.body.classList.remove('user-is-tabbing')

    window.removeEventListener('mousedown', handleMouseDownOnce)
    window.addEventListener('keydown', handleFirstTab)
  }

  window.addEventListener('keydown', handleFirstTab)

  const backToTopButton = document.querySelector(".back-to-top");
  let isBackToTopRendered = false;

  let alterStyles = (isBackToTopRendered) => {
    backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
    backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
    backToTopButton.style.transform = isBackToTopRendered
      ? "scale(1)"
      : "scale(0)";
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      isBackToTopRendered = true;
      alterStyles(isBackToTopRendered);
    } else {
      isBackToTopRendered = false;
      alterStyles(isBackToTopRendered);
    }
  });

  /***********************************************************
  Read More Buttons
  ************************************************************/
  const readMoreBtn = document.querySelector(".read_more_btn");
  const readLessBtn = document.querySelector(".read_less_btn");
  const readMoreText = document.querySelector(".read_more");
  const extraSection = document.querySelector("#extracurriculars");

  readLessBtn.addEventListener("click", () => {
    readMoreText.classList.remove("show_more");
    readMoreBtn.innerText = "Read More";
    extraSection.scrollIntoView({ behavior: "smooth" });
  })

  // Show the additional content when "Read More" is clicked
  document.querySelector('.read_more_btn').addEventListener('click', function() {
    document.getElementById('about_read_more').style.display = 'flex';
    document.getElementById('about_read_more').style.flexDirection = 'column';
    document.getElementById('about_read_more').style.alignItems = 'center';
    document.getElementById('about_read_more').style.maxWidth = '1180px';
    document.getElementById('about_read_more').style.margin = '0 auto';
    document.getElementById('about_read_more').style.justifyContent = 'flex-start';
    document.getElementById('about_read_more').style.padding = '1 em';

    this.style.display = 'none'; // Hide the "Read More" button
  });

  // Hide the additional content when "Read Less" is clicked
  document.querySelector('.read_less_btn').addEventListener('click', function() {
    document.getElementById('about_read_more').style.display = 'none';
    document.querySelector('.read_more_btn').style.display = 'inline-block'; // Show the "Read More" button again
  });

  const readMoreFooterBtn = document.querySelector(".read_more_btn_footer");
  const readMoreFooterText = document.querySelector(".read_more_footer");

  readMoreFooterBtn.addEventListener("click", (e) => {
    readMoreFooterText.classList.toggle("show_more_footer");
  });
});

/***********************************************************
Image Slideshow
************************************************************/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}

/***********************************************************
Image Slideshow2
************************************************************/
let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("slide2");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}