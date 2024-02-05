document.addEventListener('DOMContentLoaded', function() {
    const snapContainer = document.querySelector('.snap-container');
    const sections = document.querySelectorAll('.hero');
    const lastSection = sections[sections.length - 1];

    let isSnapContainerScrollEnabled = true;

    const toggleBodyScroll = (enable) => {
        if (enable) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    };

    const checkScrollPosition = () => {
        // Get the bottom position of the last section
        const lastSectionBottom = lastSection.offsetTop + lastSection.offsetHeight;

        // Check if the snapContainer scroll is at the last section
        if (snapContainer.scrollTop + window.innerHeight >= lastSectionBottom) {
            // At the last section, enable body scroll and disable snap-container scroll
            if (isSnapContainerScrollEnabled) {
                toggleBodyScroll(true);
                snapContainer.style.overflowY = 'hidden'; // Disable scrolling in snap-container
                isSnapContainerScrollEnabled = false;
            }
        } else {
            // Not at the last section, disable body scroll and enable snap-container scroll
            if (!isSnapContainerScrollEnabled) {
                toggleBodyScroll(false);
                snapContainer.style.overflowY = 'scroll'; // Re-enable scrolling in snap-container
                isSnapContainerScrollEnabled = true;
            }
        }
    };

    snapContainer.addEventListener('scroll', checkScrollPosition);
});
