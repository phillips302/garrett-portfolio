/***********************************************************
Utility Function that submits the contact form, then clears
the contents of the form after waiting 2 second.
************************************************************/
function finalizeForm() {
    var frm = document.getElementById("contactForm");
    frm.submit(); // Submit the form   
    setTimeout(function() {
        frm.reset();  // Reset all form data
      }, 900);
    return false; // Prevent page refresh
}