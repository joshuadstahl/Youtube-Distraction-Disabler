//listens for page navigation changes.
navigation.addEventListener('navigate', (event) => {
    if (event.destination.url.includes("youtube.com/watch")) {
        blockSidebar();
        removeOverlays();
    }
});

//listens for page navigation changes.
navigation.addEventListener('navigate', (event) => {
    if (event.destination.url.includes("youtube.com/shorts")) {
        removeShortsContent();
    }
});

navigation.addEventListener('navigate', (event) => {
    if (event.destination.url.includes("youtube.com/feed/") || event.destination.url.includes("youtube.com/")) {
        removeHompageContent();
    }
});