// preloader start
function preloader() {
  // Get the preloader element
  var preloader = document.querySelector(".preloader");

  if (preloader) {
    // Set a timeout to fade out the preloader after 3 seconds (3000 milliseconds)
    setTimeout(function () {
      // Animate opacity to 0 over 500 milliseconds
      preloader.style.transition = "opacity 0.6s ease";
      preloader.style.opacity = "0";

      // After the animation is complete, hide the preloader
      setTimeout(function () {
        preloader.style.display = "none";
      }, 600);
    }, 600); // Set the duration in milliseconds
  } else {
    console.error("Preloader element not found.");
  }
}
// preloader end

// navbar start
// scroll animiation on navbar
function navScrollAnimiation() {
  // Function to handle scroll event
  function handleScroll() {
    // Toggle header classes based on scroll position
    var navBar = document.querySelector("#header-nav");
    // var navInfo = document.querySelector("#header-info");
    if (navBar) {
      // Check if fixedTop is not null
      if (window.scrollY > 50) {
        navBar.classList.add("header-animation", "shadow-2xl", "bg-secondary");
        // navInfo.classList.add("md:hidden");
        // navInfo.classList.remove("md:block");
      } else {
        navBar.classList.remove(
          "header-animation",
          "shadow-2xl",
          "bg-secondary"
        );
        // navInfo.classList.remove("md:hidden");
        // navInfo.classList.add("md:block");
      }
    }
  }

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Remove the scroll event listener when the page unloads
  window.addEventListener("unload", function () {
    window.removeEventListener("scroll", handleScroll);
  });
}

// scroll animiation on navbar

// Event listener for opening the navigation
const navbarToggle = document.querySelector(".nav-toggole");
navbarToggle.addEventListener("click", () => {
  document.querySelector(".small-nav").classList.remove("translate-x-full");
  document.querySelector(".small-nav").classList.add("translate-x-0");
});

// Event listener for closing the navigation when clicking on the close button
const navbarClose = document.querySelector(".nav-close");
navbarClose.addEventListener("click", closeNavigation);

// Event listener for closing the navigation when clicking on the overlay
const navOverly = document.querySelector("#nav-overly");
navOverly.addEventListener("click", closeNavigation);

// Function to close the navigation
function closeNavigation() {
  document.querySelector(".small-nav").classList.remove("translate-x-0");
  document.querySelector(".small-nav").classList.add("translate-x-full");
}

// active class to the current link start
function activeLink() {
  const currentUrl = window.location.href;
  const navLinks = document.querySelectorAll("#header-nav ul li a");

  navLinks.forEach((link) => {
    if (link.href === currentUrl) {
      link.classList.add("text-primary");
      const parentSubMenu = link.closest(".sub-menu");
      if (parentSubMenu) {
        parentSubMenu.querySelector("span").classList.add("text-primary");
        parentSubMenu.querySelector("i").classList.add("text-primary");
      }
    }
  });
}
// active class to the current link end

// active class submenu start
function activeSubmenu() {
  // add active menu
  const submenuLinks = document.querySelectorAll(".submenu-link");
  const menuBtns = document.querySelectorAll(".submenu-btn");
  menuBtns.forEach((btn) => {
    btn.classList.remove("text-primary");
  });
  // Loop through each submenu link
  submenuLinks.forEach(function (link) {
    // Get the current URL
    const currentUrl = window.location.href;
    // Get the href attribute of the submenu link
    const href = link.querySelector("a").getAttribute("href");
    const cleanHref = href.replace(/^\.\.\//, "");
    // Check if the current URL matches the submenu link's href

    if (currentUrl.includes(cleanHref)) {
      // Add the 'active' class to the parent menu-btn
      link.classList.add("text-primary");
      const submenu = link.parentElement.parentElement.querySelector("span");
      const arrow = link.parentElement.parentElement.querySelector("i");
      submenu.classList.add("text-primary");
      // submenu.classList.remove("text-white");
      arrow.classList.add("text-primary");
      // arrow.classList.remove("text-white");
    }
  });
}
// active class submenu end

// navbar sub menu start
document.querySelectorAll(".sub-menu").forEach(function (menu) {
  menu.addEventListener("click", function () {
    var ulList = this.querySelector("ul");
    var collapseIcon = this.querySelector(".collapse-icon");

    // Check if the ul list is hidden
    if (ulList.style.display === "none") {
      // Hide previous UI
      document.querySelectorAll(".sub-menu ul").forEach(function (ul) {
        ul.style.display = "none";
      });
      document
        .querySelectorAll(".sub-menu .collapse-icon")
        .forEach(function (icon) {
          icon.classList.remove("-rotate-180");
        });

      // Slide down with a smooth effect
      ulList.style.display = "grid"; // Open the ul list
      collapseIcon.classList.add("-rotate-180"); // Rotate the collapse icon
    } else {
      // Slide up with a smooth effect
      ulList.style.display = "none"; // Close the ul list
      collapseIcon.classList.remove("-rotate-180"); // Rotate the collapse icon back
    }
  });
});
// navbar sub menu end
// navbar end

// Click to Scroll Top start
function scrollToTop() {
  const scrollToDownButton = document.getElementById("scrollToTop");

  function toggleScrollToDownButton() {
    if (window.scrollY >= 200) {
      scrollToDownButton.classList.add("show");
    } else {
      scrollToDownButton.classList.remove("show");
    }
  }

  // Toggle the button visibility on page load
  toggleScrollToDownButton();

  // Toggle the button visibility on scroll
  window.addEventListener("scroll", toggleScrollToDownButton);

  // Scroll to top when the button is clicked
  scrollToDownButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
// Click to Scroll Top end

// Tabs start
// Function to show/hide Tab sections based on tab clicked
function showTabSection(sectionId) {
  // Hide all Tab sections
  document.querySelectorAll(".tabs").forEach((section) => {
    section.classList.add("hidden");
  });

  // Show the selected Tab section if it exists
  var selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.remove("hidden");
  }
}

// Add click event listeners to tab buttons
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    var sectionId = this.getAttribute("data-target");
    showTabSection(sectionId);

    // Remove active styling from all buttons
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.classList.remove("border-v300", "text-n-0", "bg-v300");
      btn.classList.add("border-g-12", "text-g-8", "dark:text-n-0");
    });

    // Add active styling to the clicked button
    this.classList.remove("border-g-12", "text-g-8", "dark:text-n-0");
    this.classList.add("border-v300", "text-n-0", "bg-v300");
  });
});

// Show 'All' Tabs section by default
showTabSection("tab-1");
// Tabs end

// current year start
function currentYear() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  // Find the element with class "currentYear" and set its text content to the current year
  const currentYearElement = document.querySelector(".currentYear");
  if (currentYearElement) {
    currentYearElement.textContent = currentYear;
  } else {
    console.error('Element with class "currentYear" not found.');
  }
} // current year end

function popupVideoModal() {
  const modalOpenBtns = document.getElementsByClassName("modal-open-btn");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modal = document.getElementById("modal");

  if (modal) {
    const videoBody = modal.querySelector(".modal-body");

    if (videoBody) {
      const originalIframeSrc = videoBody.src; // Store the original iframe src

      // Open modal when modal open button is clicked
      if (modalOpenBtns.length > 0) {
        Array.from(modalOpenBtns).forEach(function (modalOpenBtn) {
          modalOpenBtn.addEventListener("click", function () {
            modal.classList.remove("hidden");
            modal.classList.add("flex");
            videoBody.src = originalIframeSrc; // Set the original iframe src when opening the modal
          });
        });
      }

      // Close modal when modal close button or modal backdrop is clicked
      if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", closeModal);
      }

      const modalBackdrop = modal.querySelector("#modal-backdrop");
      if (modalBackdrop) {
        modalBackdrop.addEventListener("click", closeModal);
      }

      function closeModal() {
        modal.classList.add("hidden");
        videoBody.src = ""; // Set the src of the iframe to an empty string to stop the video
      }
    }
  }
}

// price-range start
if (document.querySelector("#range-slider-1")) {
  window.onload = function () {
    slideOne();
    slideTwo();
  };

  let sliderOne = document.getElementById("range-slider-1");
  let sliderTwo = document.getElementById("range-slider-2");
  let displayValOne = document.getElementById("min-value");
  let displayValTwo = document.getElementById("max-value");
  let minGap = 0;
  let sliderTrack = document.querySelector(".slider-track");
  let sliderMaxValue = document.getElementById("range-slider-1").max;

  function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
  }
  function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
  }
  function fillColor() {
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #B0B0B0 ${percent1}% , #6D8C36 ${percent1}% , #6D8C36 ${percent2}%, #B0B0B0 ${percent2}%)`;
  }
}
// custom-range end

// image zoom start
function initZoomable() {
  /*
   * Constants
   */
  const Default = {
    initialZoom: 3,
    minZoom: 1.25,
    maxZoom: 4,
    zoomSpeed: 0.01,
  };

  /*
   * Function implementation
   */
  const zoomables = document.querySelectorAll(".zoomable");

  zoomables.forEach((element) => {
    let config = {};
    let zoomed = false;
    let initialZoomValue, zoom;

    function mergeConfig(config) {
      return {
        ...Default,
        ...(typeof config === "object" ? config : {}),
      };
    }

    function init() {
      config = mergeConfig(config);
      const { initialZoom, minZoom, maxZoom } = config;
      initialZoomValue = Math.max(Math.min(initialZoom, maxZoom), minZoom);
      zoom = initialZoomValue;

      const img = element.querySelector(".zoomable__img");
      img.draggable = false;
      element.style.setProperty("--zoom", initialZoomValue);

      addEventListeners();
    }

    function addEventListeners() {
      element.addEventListener("mouseover", handleMouseover);
      element.addEventListener("mousemove", handleMousemove);
      element.addEventListener("mouseout", handleMouseout);
      element.addEventListener("wheel", handleWheel);

      element.addEventListener("touchstart", handleTouchstart);
      element.addEventListener("touchmove", handleTouchmove);
      element.addEventListener("touchend", handleTouchend);
    }

    function handleMouseover() {
      if (zoomed) {
        return;
      }

      element.classList.add("zoomable--zoomed");
      zoomed = true;
    }

    function handleMousemove(evt) {
      if (!zoomed) {
        return;
      }

      const elPos = element.getBoundingClientRect();

      const percentageX = `${
        ((evt.clientX - elPos.left) * 100) / elPos.width
      }%`;
      const percentageY = `${
        ((evt.clientY - elPos.top) * 100) / elPos.height
      }%`;

      element.style.setProperty("--zoom-pos-x", percentageX);
      element.style.setProperty("--zoom-pos-y", percentageY);
    }

    function handleMouseout() {
      if (!zoomed) {
        return;
      }

      element.style.setProperty("--zoom", initialZoomValue);
      element.classList.remove("zoomable--zoomed");
      zoomed = false;
    }

    function handleWheel(evt) {
      if (!zoomed) {
        return;
      }

      evt.preventDefault();

      const newZoom = zoom + evt.deltaY * (config.zoomSpeed * -1);
      const { minZoom, maxZoom } = config;

      zoom = Math.max(Math.min(newZoom, maxZoom), minZoom);
      element.style.setProperty("--zoom", zoom);
    }

    function handleTouchstart(evt) {
      evt.preventDefault();
      handleMouseover();
    }

    function handleTouchmove(evt) {
      if (!zoomed) {
        return;
      }

      const elPos = element.getBoundingClientRect();

      let percentageX =
        ((evt.touches[0].clientX - elPos.left) * 100) / elPos.width;
      let percentageY =
        ((evt.touches[0].clientY - elPos.top) * 100) / elPos.height;

      percentageX = Math.max(Math.min(percentageX, 100), 0);
      percentageY = Math.max(Math.min(percentageY, 100), 0);

      element.style.setProperty("--zoom-pos-x", `${percentageX}%`);
      element.style.setProperty("--zoom-pos-y", `${percentageY}%`);
    }

    function handleTouchend() {
      handleMouseout();
    }

    init();
  });
}

initZoomable();
// image zoom end

// product cart start
function productQty() {
  const decreaseQtyBtns = document.querySelectorAll(".decreaseQty");
  const increaseQtyBtns = document.querySelectorAll(".increaseQty");
  const qtyInputs = document.querySelectorAll(".qtyValue");

  decreaseQtyBtns.forEach((decreaseQtyBtn, index) => {
    const qtyInput = qtyInputs[index];

    decreaseQtyBtn.addEventListener("click", () => {
      let currentQty = parseInt(qtyInput.value);
      if (currentQty > 1) {
        qtyInput.value = currentQty - 1;
        updateSubtotal(qtyInput);
        updateCartTotal();
      }
    });
  });

  increaseQtyBtns.forEach((increaseQtyBtn, index) => {
    const qtyInput = qtyInputs[index];

    increaseQtyBtn.addEventListener("click", () => {
      let currentQty = parseInt(qtyInput.value);
      qtyInput.value = currentQty + 1;
      updateSubtotal(qtyInput);
      updateCartTotal();
    });
  });

  function updateSubtotal(qtyInput) {
    const row = qtyInput.closest("div.grid");
    const productPriceElement = row.querySelector("#product-price");

    if (productPriceElement) {
      const productPrice = parseFloat(
        productPriceElement.textContent.replace("$", "")
      );
      const newSubtotal = productPrice * parseInt(qtyInput.value);
      const subtotalElement = row.querySelector("#subtotal-price");

      if (subtotalElement) {
        subtotalElement.textContent = newSubtotal.toFixed(2);
      }
    }
  }
}

function updateCartTotal() {
  const subtotalElements = document.querySelectorAll(".product-subtotal");
  let total = 0;

  subtotalElements.forEach((subtotalElement) => {
    const subtotal = parseFloat(subtotalElement.textContent);
    total += subtotal;
  });

  const flatRate = document.getElementById("flat-rate");
  const localPickup = document.getElementById("local-pickup");
  if (flatRate && localPickup) {
    total += parseFloat(flatRate.textContent); // Adding flat rate shipping cost
    total += parseFloat(localPickup.textContent); // Adding local pickup shipping cost
  }
  const totalElement = document.getElementById("total");
  if (totalElement) {
    totalElement.textContent = Number(total).toFixed(2);
  }
}

// packages start

// odometer custom start
function odometerPackage() {
  const odometerElements = document.querySelectorAll(".odometer");
  /**
   * Initializes odometer elements when they become visible in the viewport.
   *
   * @param {Array} entries - The array of IntersectionObserver entries.
   * @param {IntersectionObserver} observer - The IntersectionObserver instance.
   */
  function initOdometer(entries, observer) {
    // Loop through each IntersectionObserver entry
    entries.forEach((entry) => {
      // If the target element is visible in the viewport
      if (entry.isIntersecting) {
        // Select the odometer element within the target element
        const odometerElement = entry.target.querySelector(".odometer");
        // Get the value attribute from the odometer element
        const elementValue = Number(
          odometerElement.getAttribute("data-counter-value")
        );
        // Create a new Odometer instance
        const od = new Odometer({
          el: odometerElement, // Set the element to be the odometer element
          value: 0, // Set the initial value to 0
          format: "", // Use the default format
          theme: "digital", // Use the digital theme
        });
        // Update the odometer with the element value
        od.update(elementValue);
        // Stop observing the target element once it's initialized
        observer.unobserve(entry.target);
      }
    });
  }
  // Initialize IntersectionObserver for each odometer element
  odometerElements &&
    odometerElements.forEach((item) => {
      const observer = new IntersectionObserver(initOdometer);
      observer.observe(item.parentElement);
    });
}
// odometer custom end

// wow custom start
function wowPackage() {
  var wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animated", // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
  });
  wow.init();
}
// wow custom end

// scroll down start
const scrollToDownButton = document.getElementById("scroll-down");

// Scroll down by viewport height when the button is clicked
if (scrollToDownButton) {
  scrollToDownButton.addEventListener("click", function () {
    const viewportHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    window.scrollBy({
      top: viewportHeight,
      behavior: "smooth",
    });
  });
}
// scroll down end

// all dom content loaded functions start
window.addEventListener("DOMContentLoaded", function () {
  wowPackage();
  odometerPackage();
  navScrollAnimiation();
  popupVideoModal();
  preloader();
  scrollToTop();
  productQty();
  updateCartTotal();
  activeSubmenu();
  activeLink();
  currentYear();
});
// all dom content loaded functions start
