// preloader start
function preloader() {
  // Get the preloader element
  var preloader = document.querySelector(".preloader");

  if (preloader) {
    // Set a timeout to fade out the preloader after 3 seconds (3000 milliseconds)
    setTimeout(function () {
      // Animate opacity to 0 over 500 milliseconds
      preloader.style.transition = "opacity 0.5s ease";
      preloader.style.opacity = "0";

      // After the animation is complete, hide the preloader
      setTimeout(function () {
        preloader.style.display = "none";
      }, 500);
    }, 500); // Set the duration in milliseconds
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
    var fixedTop = document.querySelector("#header-nav");
    if (fixedTop) {
      // Check if fixedTop is not null
      if (window.scrollY > 50) {
        fixedTop.classList.add("header-animation", "shadow-2xl", "bg-white");
      } else {
        fixedTop.classList.remove("header-animation", "shadow-2xl", "bg-white");
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
  document.querySelector(".small-nav").classList.add("-translate-x-full");
}

// active class to the current link start
function activeLink() {
  const currentUrl = window.location.href;
  const navLinks = document.querySelectorAll("#header-nav ul li a");

  navLinks.forEach((link) => {
    if (link.href === currentUrl) {
      link.classList.add("text-o-1");
      const parentSubMenu = link.closest(".sub-menu");
      if (parentSubMenu) {
        parentSubMenu.querySelector("span").classList.add("text-o-1");
        parentSubMenu.querySelector("i").classList.add("text-o-1");
      }
    }
  });
}
// active class to the current link end

// active class submenu start
function activeSubmenu() {
  const currentUrl = window.location.href;
  const menuItems = document.querySelectorAll(".menu, .submenu");
  const submenuLinks = document.querySelectorAll(".submenu-link a");

  // Reset all menu items
  menuItems.forEach((item) => {
    item.classList.remove("active");
    const btn = item.querySelector(".submenu-btn");
    const icon = item.querySelector(".submenu-icon i");
    if (btn) btn.classList.remove("text-o-1");
    if (icon) icon.classList.remove("text-o-1", "-rotate-180");
  });

  // Check each submenu link
  submenuLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (currentUrl.includes(href)) {
      // Activate submenu link
      link.closest(".submenu-link").classList.add("text-o-1");

      // Activate parent submenu
      const parentSubmenu = link.closest(".submenu");
      if (parentSubmenu) {
        parentSubmenu.classList.add("active");
        const btn = parentSubmenu.querySelector(".submenu-btn");
        const icon = parentSubmenu.querySelector(".submenu-icon i");
        if (btn) btn.classList.add("text-o-1");
        if (icon) icon.classList.add("text-o-1", "-rotate-180");
      }
    }
  });

  // Check top-level menu items
  menuItems.forEach((item) => {
    const link = item.querySelector("a");
    if (link && currentUrl.includes(link.getAttribute("href"))) {
      item.classList.add("active");
    }
  });
}
// If using a single-page application, call activeSubmenu() after each route change
// active class submenu end

// mobile submenu collapse start
// Select all elements with the class 'sub-menu'
const subMenus = document.querySelectorAll(".sub-menu");

// Check if any .sub-menu elements are found
if (subMenus) {
  subMenus.forEach((menu) => {
    const submenu = menu.querySelector("ul");
    const collapseIcon = menu.querySelector(".collapse-icon");

    // Apply initial styles
    if (submenu) {
      submenu.style.maxHeight = "0";
      submenu.style.paddingTop = "0"; // Initial padding
      submenu.style.overflow = "hidden";
      submenu.style.transition =
        "max-height 0.5s ease-in-out, padding-top 0.5s ease-in-out"; // Smooth transition for both max-height and padding

      // Initial icon rotation
      if (collapseIcon) {
        collapseIcon.style.transition = "transform 0.5s ease-in-out"; // Smooth icon rotation
      }

      menu.addEventListener("click", function () {
        const isOpen = menu.classList.contains("open");

        // Close all open submenus except the one being clicked
        document.querySelectorAll(".sub-menu.open").forEach((openMenu) => {
          if (openMenu !== menu) {
            const openSubmenu = openMenu.querySelector("ul");
            const openCollapseIcon = openMenu.querySelector(".collapse-icon");
            if (openSubmenu) {
              openSubmenu.style.maxHeight = "0";
              openSubmenu.style.paddingTop = "0"; // Reset padding
            }
            if (openCollapseIcon) {
              openCollapseIcon.style.transform = "rotate(0deg)"; // Rotate icon back
            }
            openMenu.classList.remove("open");
          }
        });

        // Toggle the clicked submenu
        if (isOpen) {
          submenu.style.maxHeight = "0";
          submenu.style.paddingTop = "0"; // Reset padding
          if (collapseIcon) {
            collapseIcon.style.transform = "rotate(0deg)"; // Rotate icon back
          }
          menu.classList.remove("open");
        } else {
          submenu.style.maxHeight = submenu.scrollHeight + "px";
          submenu.style.paddingTop = "5px"; // Add padding
          if (collapseIcon) {
            collapseIcon.style.transform = "rotate(180deg)"; // Rotate icon for open state
          }
          menu.classList.add("open");
        }
      });
    }
  });
}
// mobile submenu collapse end

// navbar end

// Click to Scroll Top start
function scrollToTop() {
  const scrollToTopButton = document.getElementById("scrollToTop");

  function toggleScrollToTopButton() {
    if (window.scrollY >= 200) {
      scrollToTopButton.classList.add("show");
    } else {
      scrollToTopButton.classList.remove("show");
    }
  }

  // Toggle the button visibility on page load
  toggleScrollToTopButton();

  // Toggle the button visibility on scroll
  window.addEventListener("scroll", toggleScrollToTopButton);

  // Scroll to top when the button is clicked
  scrollToTopButton.addEventListener("click", function () {
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

// popupVideoModal start
function popupVideoModal() {
  const modalOpenBtn = document.getElementById("modal-open-btn");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modal = document.getElementById("modal");

  if (modal) {
    const videoIframe = modal.querySelector("iframe");

    if (videoIframe) {
      const originalIframeSrc = videoIframe.src; // Store the original iframe src

      // Open modal when modal open button is clicked
      if (modalOpenBtn) {
        modalOpenBtn.addEventListener("click", function () {
          modal.classList.remove("hidden");
          modal.classList.add("flex");
          videoIframe.src = originalIframeSrc; // Set the original iframe src when opening the modal
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
        videoIframe.src = ""; // Set the src of the iframe to an empty string to stop the video
      }
    }
  }
}
// popupVideoModal end

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
    sliderTrack.style.background = `linear-gradient(to right, #969F96 ${percent1}% , #18240A ${percent1}% , #18240A ${percent2}%, #969F96 ${percent2}%)`;
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
      }
    });
  });

  increaseQtyBtns.forEach((increaseQtyBtn, index) => {
    const qtyInput = qtyInputs[index];

    increaseQtyBtn.addEventListener("click", () => {
      let currentQty = parseInt(qtyInput.value);
      qtyInput.value = currentQty + 1;
    });
  });
}

function calculatePrices() {
  const productRows = document.querySelectorAll("tbody tr");
  let subtotal = 0;

  productRows.forEach((row) => {
    const priceElement = row.querySelector(".product-price");
    const quantityInput = row.querySelector(".qtyValue");
    const subtotalElement = row.querySelector(".product-subtotal");

    if (priceElement && quantityInput && subtotalElement) {
      const price = parseFloat(priceElement.textContent);
      const quantity = parseInt(quantityInput.value);
      const rowSubtotal = price * quantity;

      subtotalElement.textContent = rowSubtotal.toFixed(2);
      subtotal += rowSubtotal;
    }
  });

  const subtotalElement = document.getElementById("subtotal");
  const totalElement = document.getElementById("total");

  if (subtotalElement) {
    subtotalElement.textContent = subtotal.toFixed(2);
  }

  if (totalElement) {
    totalElement.textContent = subtotal.toFixed(2); // Assuming no additional fees for now
  }
}

function initializeCart() {
  productQty(); // Call the existing productQty function

  const quantityInputs = document.querySelectorAll(".qtyValue");
  quantityInputs.forEach((input) => {
    input.addEventListener("change", calculatePrices);
  });

  const quantityButtons = document.querySelectorAll(
    ".increaseQty, .decreaseQty"
  );
  quantityButtons.forEach((button) => {
    button.addEventListener("click", calculatePrices);
  });

  calculatePrices(); // Initial calculation
}

// Only initialize the cart if we're on a page with cart elements
if (document.querySelector(".qtyValue")) {
  document.addEventListener("DOMContentLoaded", initializeCart);
}
// product cart end

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

// all dom content loaded functions start
window.addEventListener("DOMContentLoaded", function () {
  wowPackage();
  odometerPackage();
  navScrollAnimiation();
  popupVideoModal();
  preloader();
  scrollToTop();
  productQty();
  activeSubmenu();
  activeLink();
  currentYear();
});
// all dom content loaded functions start

document.addEventListener("DOMContentLoaded", function () {
  // Flatpickr initialization for date picker
  flatpickr("#datePicker", {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "d-m-Y",
  });

  // Flatpickr initialization for time picker
  flatpickr("#timePicker", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "h:i K", // "h:i K" shows time in 12-hour format with AM/PM
    time_24hr: false, // Set to false for 12-hour format with AM/PM
  });
});

// Animate button with icon start
function buttonOne(button) {
  let original = button.querySelector(".original");
  let wordsContainer = button.querySelector(".words");
  let buttonText, iconClass;

  // If the button doesn't have the 'original' and 'words' divs, create them
  if (!original) {
    buttonText = button.textContent.trim();
    const icon = button.querySelector("i");
    iconClass = icon ? icon.className : button.dataset.icon;

    // Create 'original' div
    original = document.createElement("div");
    original.className = "original";
    original.innerHTML = button.innerHTML;

    // Create 'words' container div
    wordsContainer = document.createElement("div");
    wordsContainer.className = "words";

    // Clear the button and append new elements
    button.textContent = "";
    button.appendChild(original);
    button.appendChild(wordsContainer);
  } else {
    buttonText = original.textContent.trim();
    iconClass = button.dataset.icon;
  }

  // Clear existing content in words container
  wordsContainer.innerHTML = "";

  // Split text into words
  const words = buttonText.split(" ");
  words.forEach((word, wordIndex) => {
    // Create a div for each word
    const wordDiv = document.createElement("div");
    wordDiv.className = "letters";

    // Create spans for each letter in the word
    word.split("").forEach((char, charIndex) => {
      const charSpan = document.createElement("span");
      charSpan.textContent = char;
      charSpan.style.setProperty("--char-index", charIndex);
      wordDiv.appendChild(charSpan);
    });

    // Append the word div to the words container
    wordsContainer.appendChild(wordDiv);

    // Add spacing between words
    if (wordIndex < words.length - 1) {
      wordDiv.style.marginRight = "0.5em"; // Adjust spacing as needed
    }
  });

  // Add icon if it exists
  if (iconClass) {
    const iconDiv = document.createElement("div");
    iconDiv.className = "letters";
    const iconSpan = document.createElement("span");
    iconSpan.className = `icon ${iconClass}`;
    iconSpan.style.setProperty("--char-index", buttonText.length);
    iconDiv.appendChild(iconSpan);
    wordsContainer.appendChild(iconDiv);

    // Ensure the original div has the icon
    if (!original.querySelector("i")) {
      const originalIcon = document.createElement("i");
      originalIcon.className = iconClass;
      original.appendChild(originalIcon);
    }
  }
}

// Apply to all btn-primary and btn-secondary buttons
document.querySelectorAll(".btn-primary, .btn-secondary").forEach(buttonOne);
