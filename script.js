/***********************************************************
Action that clears contact form after it has been submitted
************************************************************/
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
}