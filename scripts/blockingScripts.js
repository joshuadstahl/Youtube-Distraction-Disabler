
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

    //this class is the class for the main content of the home page. This one specifically because if you just remove 
    //all the divs with "primary" as an ID (there are more than one per page) then it will
    //prevent the search bar from working properly.
    let primaryContent = document.querySelector(".ytd-two-column-browse-results-renderer"); //selects main contents of home page.
    if (primaryContent) {
        primaryContent.remove();
    }
    else {
        //check again in a bit.
        setTimeout(() => {
            removeHompageContent();
        }, 100);
    }

}

//removes the recommended content from the sidebar, but not a list of videos from a playlist if it is there.
function blockSidebar() {

    const related = document.querySelector("#related"); //selects related content. This id is only there if there is a playlist.
    const sidebar = document.querySelector("#secondary"); //selects whole sidebar, which contains related content (and can** contain playlist information) and is always there.
    const playlist = document.querySelector("#playlist"); //selects playlist div, if it is there.
    if (sidebar) {
        //if there is related content tag, that means there is a playlist. only remove related content.
        if (playlist) {
            related.remove();
        }
        //if there isn't then remove whole sidebar.
        else {
            sidebar.remove();
        }
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