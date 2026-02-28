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