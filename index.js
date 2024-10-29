document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const currentUrl = window.location.href;

  navLinks.forEach((link) => {
    if (currentUrl.endsWith("/") && link.getAttribute("href") === "/") {
      link.classList.add("active");
    } else if (link.href === currentUrl) {
      link.classList.add("active");
    }
  });
});
