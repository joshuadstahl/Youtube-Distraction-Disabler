function removeHompageContent() {

    const homepageContent = document.querySelector("#primary"); //selects main contents of home page.
    if (homepageContent) {
        
        homepageContent.remove();
    }
    else {
        //check again in a bit.
        setTimeout(() => {
            removeHompageContent();
        }, 1000);
    }

}

window.addEventListener('load', () => {
    // Your code here - images and other resources are fully loaded
    removeHompageContent();
});