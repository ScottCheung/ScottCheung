document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".lazyload");

  let isScrolling;

  // Variables to store the last known scroll position
  let lastScrollY = window.scrollY;

  // Add scroll event listener using requestAnimationFrame
  window.addEventListener("scroll", function () {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(function () {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? "down" : "up";

      sections.forEach(function (section) {
        const buffer = 100; // Adjust this value for the desired buffer space

        if (
          isElementInViewport(section, buffer) &&
          scrollDirection === "down"
        ) {
          section.classList.add("visible");
        } else {
          // Remove 'visible' class when scrolling up or the element is not in the viewport
          section.classList.remove("visible");
          section.classList.remove("lazyload");
        }
      });

      // Update the last known scroll position
      lastScrollY = currentScrollY;
    }, 66); // 15 frames per second for smooth scrolling
  });

  function isElementInViewport(el, buffer) {
    const rect = el.getBoundingClientRect();
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    return rect.top >= -buffer && rect.bottom <= viewportHeight + buffer;
  }
});
