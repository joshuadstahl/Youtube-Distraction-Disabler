function removeShortsContent() {

    const shortsContent = document.querySelector("#shorts-container"); //selects main contents of shorts page.
    if (shortsContent) {
        
        shortsContent.remove();
    }
    else {
        //check again in a bit.
        setTimeout(() => {
            removeShortsContent();
        }, 1000);
    }

}

window.addEventListener('load', () => {
    // Your code here - images and other resources are fully loaded
    removeShortsContent();
});