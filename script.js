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
  const readMoreText = document.querySelector(".read_more");

  readMoreBtn.addEventListener("click", (e) => {
    readMoreText.classList.toggle("show_more");
    if (readMoreBtn.innerText === "Read More") {
      readMoreBtn.innerText = "Read Less";
    } else {
      readMoreBtn.innerText = "Read More";
    }
  });

  const readMoreFooterBtn = document.querySelector(".read_more_btn_footer");
  const readMoreFooterText = document.querySelector(".read_more_footer");

  readMoreFooterBtn.addEventListener("click", (e) => {
    readMoreFooterText.classList.toggle("show_more_footer");
  });
});