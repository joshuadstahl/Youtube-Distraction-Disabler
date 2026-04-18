//listens for page navigation changes.
navigation.addEventListener('navigate', (event) => {
    if (event.destination.url.includes("youtube.com/watch")) {
        blockSidebar();
        removeOverlays();
    }
    else if (event.destination.url.includes("youtube.com/shorts")) {
        removeShortsContent();
    }
    else if (event.destination.url.includes("youtube.com/feed/") || event.destination.url == "https://youtube.com/" || event.destination.url == "https://www.youtube.com/" || event.destination.url == "https://youtube.com" || event.destination.url == "https://www.youtube.com") {
        removeHompageContent();
    }

});