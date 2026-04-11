
//removes the main content of the shorts page.
function removeShortsContent() {

    const shortsContent = document.querySelector("#shorts-container"); //selects main contents of shorts page.
    if (shortsContent) {
        
        shortsContent.remove();
    }
    else {
        //check again in a bit.
        setTimeout(() => {
            removeShortsContent();
        }, 100);
    }

}

//removes the main content of the home page.
function removeHompageContent() {

    let primaryContent = document.querySelector("#primary"); //selects main contents of home page.
    if (primaryContent) {
        primaryContent.remove();
        
        //remove primary content again in 100ms, as it tends to load again.
        setTimeout(() => {
            primaryContent = document.querySelector("#primary"); //selects main contents of home page.
            primaryContent.remove();
        }, 100);
    }
    else {
        //check again in a bit.
        setTimeout(() => {
            removeHompageContent();
        }, 100);
    }

}

//removes the sidebar
function blockSidebar() {

    const sidebar = document.querySelector("#secondary");
    if (sidebar) {
        
        sidebar.remove();
    }
    else {
        //check again in a bit.
        setTimeout(() => {
            blockSidebar();
        }, 100);
    }

}

//removes the end of video and creator suggested video overlays.
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
    }

}