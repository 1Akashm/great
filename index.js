document.addEventListener("DOMContentLoaded", () => {
  var hamburgerButton = document.querySelector("#ham");
  var navItems = document.querySelector(".nav_items");
  var listItems = document.querySelectorAll(".nav_items ul li a");

  hamburgerButton.addEventListener("click", () => {
    navItems.classList.add("active");
  });

  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.classList.remove("active");
    });
  });
});

// to know the activated list item
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".ul_container ul li a");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      // Check if the link is the "Home" link
      const isHomeLink = link.classList.contains("fontactivate");

      // Remove the fontactivate class from all links
      links.forEach((l) => l.classList.remove("fontactivate"));

      // Add the fontactivate class to the clicked link
      link.classList.add("fontactivate");


    });
  });
});





