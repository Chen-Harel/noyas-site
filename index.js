document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function () {
            const panel = this.nextElementSibling;
            const isActive = this.classList.contains("active");

            // 1. Close all other open accordion sections
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this) {
                    otherHeader.classList.remove("active");
                    otherHeader.nextElementSibling.style.maxHeight = null;
                }
            });

            // 2. Toggle the current section
            if (!isActive) {
                this.classList.add("active");
                // We use scrollHeight to tell the browser exactly how much space the text needs
                panel.style.maxHeight = panel.scrollHeight + "px";
            } else {
                this.classList.remove("active");
                panel.style.maxHeight = null;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById('carouselTrack');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    // How wide is one slide?
    const getSlideWidth = () => track.offsetWidth;

    nextBtn.addEventListener('click', () => {
        const maxScroll = track.scrollWidth - track.offsetWidth;

        // If we are at the last slide (or very close to it), wrap to start
        if (Math.abs(track.scrollLeft) >= maxScroll - 5) {
            track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            // Otherwise, move one slide's width to the left
            track.scrollBy({ left: -getSlideWidth(), behavior: 'smooth' });
        }
    });

    prevBtn.addEventListener('click', () => {
        // If we are at the first slide, wrap to the end
        if (Math.abs(track.scrollLeft) <= 5) {
            const maxScroll = track.scrollWidth - track.offsetWidth;
            track.scrollTo({ left: -maxScroll, behavior: 'smooth' });
        } else {
            // Otherwise, move one slide's width to the right
            track.scrollBy({ left: getSlideWidth(), behavior: 'smooth' });
        }
    });
});