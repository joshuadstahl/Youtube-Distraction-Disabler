function blockDistractions() {


    const sidebar = document.querySelector("#secondary");
    if (sidebar) {
        
        sidebar.remove();
    }
    else {
        //check again in a bit.
        setTimeout(() => {
            blockDistractions();
        }, 100);
    }

}
function removeOverlays() {

    const overlayGrid = document.querySelector(".ytp-fullscreen-grid"); //grid of suggested videos at end
    const overlay = document.querySelectorAll(".ytp-ce-element"); //overlay that covers the video, suggested video from creator
    
    if (overlayGrid) {
        
        overlayGrid.remove();
        for (const element of overlay) {
            element.remove();
        }
    }
    else {
        //check again in a bit.
        setTimeout(() => {
            removeOverlays();
        }, 100);
        console.log("No overlays found");
    }

}
window.addEventListener('load', () => {
    // Your code here - images and other resources are fully loaded
    blockDistractions();
    removeOverlays();
});