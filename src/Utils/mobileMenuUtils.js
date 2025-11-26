import { resetMobileMenuState } from "./active.js";

/**
 * Simple utility to handle mobile menu click outside functionality
 * This works with Bootstrap's collapse component and the existing resetMobileMenuState function
 */
export const setupMobileMenuClickOutside = () => {
  const handleClickOutside = (event) => {
    // Find all navbar elements
    const navbars = document.querySelectorAll(".navbar");

    navbars.forEach((navbar) => {
      const navbarCollapse = navbar.querySelector(".navbar-collapse");

      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        // Check if click is outside this navbar
        if (!navbar.contains(event.target)) {
          // Close the mobile menu
          resetMobileMenuState();

          // Also close any open dropdown menus
          const openDropdowns = navbar.querySelectorAll(
            '.lawgis-dd-menu[style*="block"]'
          );
          openDropdowns.forEach((dropdown) => {
            dropdown.style.display = "";
          });
        }
      }
    });
  };

  const handleTouchStart = (event) => {
    // Handle touch events for mobile devices
    handleClickOutside(event);
  };

  const handleKeyDown = (event) => {
    // Close menu on Escape key
    if (event.key === "Escape") {
      const navbarCollapses = document.querySelectorAll(".navbar-collapse");
      navbarCollapses.forEach((collapse) => {
        if (collapse.classList.contains("show")) {
          resetMobileMenuState();
        }
      });
    }
  };

  // Add event listeners
  document.addEventListener("click", handleClickOutside, true);
  document.addEventListener("touchstart", handleTouchStart, true);
  document.addEventListener("keydown", handleKeyDown);

  // Return cleanup function
  return () => {
    document.removeEventListener("click", handleClickOutside, true);
    document.removeEventListener("touchstart", handleTouchStart, true);
    document.removeEventListener("keydown", handleKeyDown);
  };
};

/**
 * Enhanced mobile menu reset that also handles dropdowns
 */
export const enhancedMobileMenuReset = () => {
  // Use the existing reset function
  resetMobileMenuState();

  // Additional cleanup for dropdowns
  const openDropdowns = document.querySelectorAll(
    '.lawgis-dd-menu[style*="block"]'
  );
  openDropdowns.forEach((dropdown) => {
    dropdown.style.display = "";
  });

  // Reset any remaining mobile menu states
  const headers = document.querySelectorAll(".header-area");
  headers.forEach((header) => {
    header.classList.remove("mobile-menu-open");
  });
};
