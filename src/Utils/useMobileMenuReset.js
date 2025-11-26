import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { resetMobileMenuState } from "./active.js";
import { setupMobileMenuClickOutside } from "./mobileMenuUtils.js";

/**
 * Custom hook to automatically reset mobile menu state when navigating between pages
 * and handle click-outside functionality to close mobile menu
 */
export const useMobileMenuReset = () => {
  const location = useLocation();

  useEffect(() => {
    // Reset mobile menu immediately when location changes
    resetMobileMenuState();

    // Also reset after a small delay to catch any delayed state changes
    const timer = setTimeout(() => {
      resetMobileMenuReset();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    // Initialize click outside handler for mobile menu
    const cleanup = setupMobileMenuClickOutside();

    // Cleanup function
    return cleanup;
  }, []);
};

/**
 * Enhanced mobile menu reset function that handles edge cases
 */
export const resetMobileMenuReset = () => {
  // Reset all possible mobile menu states
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

      // Remove any inline styles that might be set by Bootstrap
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

  // Force close any Bootstrap collapse instances
  if (window.bootstrap) {
    const collapseElements = document.querySelectorAll(".navbar-collapse");
    collapseElements.forEach((element) => {
      const bsCollapse = window.bootstrap.Collapse.getInstance(element);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    });
  }
};
