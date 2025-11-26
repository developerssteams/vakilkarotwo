/* global Swiper, slideToggle, Marquee3k, imagesLoaded, Isotope, WOW, bootstrap */

/* ---------------------
   [Master JavaScript]
   Template Name: Lawgis - Law Firm and Attorney HTML Template
   Version: 1.0.0
   Author: Nano Theme
--------------------- */

/* ---------------------
   [Table of Contents]

   1. Core Features
      1.1 Sticky Header (sticky-header)
      1.2 Mobile Dropdown Menu (mobile-menu)
      1.3 Anchor Prevent Default (anchor-prevent)
      1.4 Search Form (search-form)
   2. Sliders & Carousels
      2.1 Service Slide (service-slide)
      2.2 Service Slide Two (service-slide-two)
      2.3 Portfolio Swiper (portfolio-swiper)
      2.4 Testimonial Slide (testimonial-slide)
      2.5 Testimonial Slide Two (testimonial-slide-two)
      2.6 Testimonial Slide Three (testimonial-slide-three)
      2.7 Hero Three Slide (hero-three-slide)
   3. UI Enhancements
      3.1 Category Slide (category-slide)
      3.2 Counter Up (counter-up)
      3.3 Scroll to Top (scroll-top)
      3.4 Video Popup
      3.5 Isotope
      3.6 Copyright Year
      3.7 WOW
      3.8 Animated Progress Bar
      3.9 Social Links
      3.10 Tooltip Activation
      3.11 Toast Activation
      3.12 Popover Activation
      3.13 Preloader
--------------------- */

// Enhanced function to reset mobile menu state - ensures mobile menu collapses on navigation
export function resetMobileMenuState() {
  const header = document.querySelector(".header-area");
  if (header) {
    header.classList.remove("mobile-menu-open");
  }

  // Reset Bootstrap collapse state for all navbar collapses
  const navbarCollapses = document.querySelectorAll(".navbar-collapse");
  navbarCollapses.forEach((navbarCollapse) => {
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
      navbarCollapse.classList.remove("collapsing");
      navbarCollapse.classList.add("collapse");

      // Also remove any inline styles that might be set by Bootstrap
      navbarCollapse.style.height = "";
      navbarCollapse.style.overflow = "";
      navbarCollapse.style.display = "";
    }
  });

  // Reset any dropdown menus that might be open
  const dropdownMenus = document.querySelectorAll(".lawgis-dd-menu");
  dropdownMenus.forEach((menu) => {
    if (menu.style.display === "block") {
      menu.style.display = "";
    }
  });

  // Reset navbar toggler aria-expanded state
  const navbarTogglers = document.querySelectorAll(".navbar-toggler");
  navbarTogglers.forEach((toggler) => {
    toggler.setAttribute("aria-expanded", "false");
  });

  // Force close any Bootstrap collapse instances if Bootstrap is available
  if (window.bootstrap && window.bootstrap.Collapse) {
    const collapseElements = document.querySelectorAll(".navbar-collapse");
    collapseElements.forEach((element) => {
      try {
        const bsCollapse = window.bootstrap.Collapse.getInstance(element);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      } catch (error) {
        // Silently handle any errors
      }
    });
  }

  // Additional cleanup for any remaining open states
  document.body.classList.remove("mobile-menu-open");
  document.documentElement.classList.remove("mobile-menu-open");
}

// 1.1 Sticky Header
export default function initActiveScripts() {
  const navarToggler = document.querySelector(".navbar-toggler");
  const header = document.querySelector(".header-area");

  // Do not replace the toggler element – it breaks Bootstrap bindings.
  // Attach a single idempotent listener that only toggles the helper class.
  if (navarToggler) {
    if (!navarToggler.dataset.mobileMenuBound) {
      navarToggler.addEventListener("click", () => {
        if (header) {
          header.classList.toggle("mobile-menu-open");
        }
      });
      navarToggler.dataset.mobileMenuBound = "true";
    }
  }

  if (header) {
    function stickyNavigation() {
      if (window.pageYOffset > 10) {
        header.classList.add("sticky-on");
      } else {
        header.classList.remove("sticky-on");
      }
    }

    window.addEventListener("load", stickyNavigation);
    window.addEventListener("scroll", stickyNavigation);
  }

  // Call mobileDropdownMenu to initialize dropdown functionality
  mobileDropdownMenu();

  // 1.2 Mobile Dropdown Menu

  function mobileDropdownMenu() {
    const sbdropdown = document.querySelectorAll(".lawgis-dd");
    if (sbdropdown.length > 0) {
      const navUrl = document.querySelectorAll(".navbar-nav li ul");
      navUrl.forEach((url) => {
        // Check if dropdown-toggler already exists to avoid duplicates
        if (
          !url.previousElementSibling ||
          !url.previousElementSibling.classList.contains("dropdown-toggler")
        ) {
          url.insertAdjacentHTML(
            "beforebegin",
            '<div class="dropdown-toggler"><i class="bi bi-caret-down-fill"></i></div>'
          );
        }
      });

      const ddtrogglers = document.querySelectorAll(".dropdown-toggler");
      ddtrogglers.forEach((ddtoggler) => {
        // Remove any existing event listeners by cloning the element
        const newDdtoggler = ddtoggler.cloneNode(true);
        ddtoggler.parentNode.replaceChild(newDdtoggler, ddtoggler);

        // Add fresh event listener to the new element
        newDdtoggler.addEventListener("click", () => {
          const ddNext = newDdtoggler.nextElementSibling;
          slideToggle(ddNext, 300);
        });
      });
    }
  }
  // Call mobileDropdownMenu directly instead of on window load
  // window.addEventListener('load', mobileDropdownMenu);

  // 1.3 Anchor Prevent Default

  const anchors = document.querySelectorAll('a[to="#"]');
  anchors.forEach((anchor) => {
    anchor.addEventListener("click", (e) => e.preventDefault());
  });

  // 1.4 Search Form

  const searchButton = document.getElementById("searchButton");
  const searchClose = document.getElementById("searchClose");
  const searchFormPopup = document.querySelector(".search-form-popup");
  const searchOverlay = document.getElementById("searchOverlay");

  if (searchButton) {
    searchButton.addEventListener("click", () => {
      searchFormPopup.classList.add("open");
      searchOverlay.classList.add("open");
    });
    searchClose.addEventListener("click", () => {
      searchFormPopup.classList.remove("open");
      searchOverlay.classList.remove("open");
    });
  }

  // 2.1.0 Service Slide

  const serviceSwiper = document.querySelector(".service-swiper-slider");

  if (serviceSwiper) {
    new Swiper(".service-swiper-slider", {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".service-button-next",
        prevEl: ".service-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }

  // 2.2.0 Service Slide Two

  const serviceSwiperTwo = document.querySelector(".service-two-swiper");

  if (serviceSwiperTwo) {
    new Swiper(".service-two-swiper", {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".service-two-pagination",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }

  // 2.3.0 Portfolio Swiper

  const portfolioSwiper = document.querySelector(".case-study-two-swiper");

  if (portfolioSwiper) {
    new Swiper(".case-study-two-swiper", {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 60,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".case-study-two-pagination",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }

  // 2.4.0 Testimonial Slide

  const testimonialSwiper = document.querySelector(".testimonial-swiper");

  if (testimonialSwiper) {
    new Swiper(".testimonial-swiper", {
      loop: true,
      spaceBetween: 30,
      slidesPerView: 3,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".testimonial-pagination",
      },
      navigation: {
        nextEl: ".testimonial-button-next",
        prevEl: ".testimonial-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
  }

  // 2.5.0 Testimonial Slide Two

  const testimonialSwiperTwo = document.querySelector(
    ".testimonial-swiper-two"
  );

  if (testimonialSwiperTwo) {
    new Swiper(".testimonial-swiper-two", {
      loop: true,
      spaceBetween: 30,
      slidesPerView: 3,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".testimonial-pagination",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }

  // 2.6.0 Testimonial Slide Three

  const testimonialSwiperThree = document.querySelector(
    ".testimonial-swiper-three"
  );

  if (testimonialSwiperThree) {
    new Swiper(".testimonial-swiper-three", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      pagination: {
        el: ".testimonial-three-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          let names = [
            "Peggy Thompson",
            "Thelma Torp Sr.",
            "Luis Bechtelar",
            "Cornelius Parker",
          ];
          let descriptions = [
            "Product Manager",
            "Civil Lawyer",
            "Orchestrator",
            "Business Law Service",
          ];
          let images = ["55.jpg", "56.jpg", "57.jpg", "58.jpg"];

          return `<div class="${className} custom-bullet">
                            <img src="assets/img/bg-img/${images[index]}" alt="${names[index]}" class="custom-bullet-img">
                            <div class="bullet-info">
                                <span class="bullet-name">${names[index]}</span>
                                <span class="bullet-desc">${descriptions[index]}</span>
                            </div>
                        </div>`;
        },
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
  }

  // 2.7.0 Hero Three Slide

  const heroThreeSlide = document.querySelector(".hero-three-swiper");

  if (heroThreeSlide) {
    new Swiper(".hero-three-swiper", {
      loop: true,
      spaceBetween: 0,
      slidesPerView: 1,
      navigation: {
        nextEl: ".hero-three-button-next",
        prevEl: ".hero-three-button-prev",
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      speed: 800,
      on: {
        init: function (swiper) {
          const firstSlide = swiper.slides[swiper.activeIndex];
          firstSlide.classList.add("active-slide");
          animateSlide(firstSlide);
        },
        slideChangeTransitionStart: function (swiper) {
          swiper.slides.forEach((slide) => {
            const heroContent = slide.querySelector(".hero3-slide-content");
            if (heroContent) {
              heroContent.classList.remove("hero3-animate");
              heroContent
                .querySelectorAll("[data-fade-in-up]")
                .forEach((el) => {
                  el.style.opacity = "0";
                  el.style.transform = "translateY(40px)";
                });
            }
          });
        },
        slideChangeTransitionEnd: function (swiper) {
          const activeSlide = swiper.slides[swiper.activeIndex];
          activeSlide.classList.add("active-slide");
          animateSlide(activeSlide);
        },
      },
    });

    function animateSlide(slide) {
      const heroContent = slide.querySelector(".hero3-slide-content");
      if (!heroContent) return;

      heroContent.classList.add("hero3-animate");

      heroContent.querySelectorAll("[data-fade-in-up]").forEach((el) => {
        const delay = parseInt(el.getAttribute("data-animation-delay")) || 0;

        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";

        setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          el.style.transition =
            "opacity 0.8s ease-out, transform 0.8s ease-out";
        }, delay);
      });
    }
  }

  // 3.1 Catagory Slide

  const catagorySlide = document.getElementById("catagorySlide");

  if (catagorySlide) {
    Marquee3k.init();
  }

  // 3.2 Counter Up

  const counterElements = document.querySelectorAll(".counter");
  if (counterElements.length > 0) {
    const counterUp = window.counterUp.default;

    const callback = (entries) => {
      entries.forEach((entry) => {
        const counterElement = entry.target;
        if (
          entry.isIntersecting &&
          !counterElement.classList.contains("is-visible")
        ) {
          counterUp(counterElement, {
            duration: 2000,
            delay: 20,
          });
          counterElement.classList.add("is-visible");
        }
      });
    };

    const IO = new IntersectionObserver(callback, {
      threshold: 1,
    });
    counterElements.forEach((element) => IO.observe(element));
  }

  // 3.3 Scroll to Top

  const scrollButton = document.getElementById("scrollTopButton");
  const topDistance = 600;

  if (scrollButton) {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > topDistance ||
        document.documentElement.scrollTop > topDistance
      ) {
        scrollButton.classList.add("scrolltop-show");
        scrollButton.classList.remove("scrolltop-hide");
      } else {
        scrollButton.classList.add("scrolltop-hide");
        scrollButton.classList.remove("scrolltop-show");
      }
    });

    scrollButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });

    function updateScrollProgress() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
      scrollButton.style.setProperty("--scroll-progress", `${scrollPercent}%`);
    }

    window.addEventListener("scroll", updateScrollProgress);
  }

  // 3.4 Video Popup

  const videoPopup = document.getElementById("videoPopup");
  const videoFrame = document.getElementById("videoFrame");
  const closeBtn = document.getElementById("videoCloseButton");
  const videoBtns = document.querySelectorAll(".video-btn");

  if (closeBtn && videoBtns.length > 0) {
    videoBtns.forEach((button) => {
      button.addEventListener("click", function () {
        let videoUrl = this.getAttribute("data-video");

        if (videoUrl) {
          let separator = videoUrl.includes("?") ? "&" : "?";

          if (videoUrl.includes("youtu.be")) {
            let videoId = videoUrl.split("/").pop();
            videoUrl = `https://www.youtube.com/embed/${videoId}`;
          }

          if (videoUrl.includes("youtube.com/watch")) {
            let videoId = new URL(videoUrl).searchParams.get("v");
            videoUrl = `https://www.youtube.com/embed/${videoId}`;
          }

          if (
            videoUrl.includes("youtube.com") ||
            videoUrl.includes("vimeo.com")
          ) {
            videoUrl += `${separator}autoplay=1`;
          }

          videoFrame.src = videoUrl;
          videoFrame.setAttribute("allow", "autoplay; encrypted-media");
          videoPopup.style.display = "flex";
        }
      });
    });

    closeBtn.addEventListener("click", () => {
      videoPopup.style.display = "none";
      videoFrame.src = "";
    });

    window.addEventListener("click", (event) => {
      if (event.target === videoPopup) {
        videoPopup.style.display = "none";
        videoFrame.src = "";
      }
    });
  }

  // 3.5 Isotope

  document.addEventListener("DOMContentLoaded", function () {
    const grids = document.querySelectorAll(".lawgis-filter");

    if (grids.length > 0) {
      grids.forEach((grid) => {
        imagesLoaded(grid, () => {
          const iso = new Isotope(grid, {
            itemSelector: ".filter-item",
            percentPosition: true,
            masonry: {
              columnWidth: ".filter-item",
            },
          });

          const container = grid.closest(".lawgis-container");
          if (!container) return; // Safeguard

          const filtersElem = container.querySelector(".lawgis-filter-nav");
          if (!filtersElem) return; // Safeguard

          filtersElem.addEventListener("click", (event) => {
            if (!event.target.matches("button")) return;
            const filterValue = event.target.getAttribute("data-filter");
            iso.arrange({
              filter: filterValue,
            });
          });

          const radioButtonGroup = (buttonGroup) => {
            buttonGroup.addEventListener("click", (event) => {
              if (!event.target.matches("button")) return;
              buttonGroup.querySelector(".active").classList.remove("active");
              event.target.classList.add("active");
            });
          };

          radioButtonGroup(filtersElem);
        });
      });
    }
  });

  // 3.6 Copyright Year

  const year = document.getElementById("year");
  if (year) {
    const currentYear = new Date().getFullYear();
    year.textContent = currentYear;
  }

  // 3.7 WOW

  const wowjs = document.querySelectorAll(".wow").length;

  if (wowjs > 0) {
    new WOW().init();
  }

  // 3.8 Animated Progress Bar

  const progressSections = document.querySelectorAll(".progress-container");

  if (progressSections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let progressBar = entry.target.querySelector(".progress-fill");
            let percentage = progressBar.getAttribute("data-percentage");
            progressBar.style.width = percentage + "%";
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    progressSections.forEach((section) => observer.observe(section));
  }

  // 3.9 Social Links

  const triggers = document.querySelectorAll(".social-nav-trigger");

  if (triggers.length) {
    triggers.forEach((trigger) => {
      const lawyerCard = trigger.closest(".laywer-card");
      const socialNav = lawyerCard.querySelector(".lawyer-social-nav");
      const socialLinks = [...socialNav.querySelectorAll("a")].reverse();

      trigger.addEventListener("click", function () {
        this.classList.toggle("active");

        if (this.classList.contains("active")) {
          socialLinks.forEach((link, index) => {
            setTimeout(() => {
              link.classList.add("show");
            }, index * 150);
          });
        } else {
          socialLinks.forEach((link) => link.classList.remove("show"));
        }
      });
    });
  }

  // 3.10 Tooltip Activation

  let lawgisTooltip = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  let tooltipList = lawgisTooltip.map(function (sbTooltip) {
    return new bootstrap.Tooltip(sbTooltip);
  });

  // 3.11 Toast Activation

  let lawgisToast = [].slice.call(document.querySelectorAll(".toast"));
  let toastList = lawgisToast.map(function (sbToast) {
    return new bootstrap.Toast(sbToast);
  });
  toastList.forEach((toast) => toast.show());

  // 3.12 Popover Activation

  let lawgisPopover = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  let popoverList = lawgisPopover.map(function (sbPopover) {
    return new bootstrap.Popover(sbPopover);
  });

  // 3.13 Preloader

  let preloader = document.getElementById("preloader");

  if (preloader) {
    window.addEventListener("load", function () {
      let fadeOut = setInterval(function () {
        if (!preloader.style.opacity) {
          preloader.style.opacity = 1;
        }
        if (preloader.style.opacity > 0) {
          preloader.style.opacity -= 0.1;
        } else {
          clearInterval(fadeOut);
          preloader.remove();
        }
      }, 100);
    });
  }
}
