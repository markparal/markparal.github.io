// Theme management functionality
(function() {
  'use strict';

  // Theme configuration
  const THEMES = {
    light: {
      icon: '🌙',
      name: 'light'
    },
    dark: {
      icon: '☀️',
      name: 'dark'
    }
  };

  // DOM elements
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const html = document.documentElement;
  const hamburger = document.getElementById('hamburger');
  const navbarLinks = document.getElementById('navbar-links');
  const mobileOverlay = document.getElementById('mobile-overlay');

  // Initialize theme
  function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme && THEMES[savedTheme]) {
      setTheme(savedTheme);
    } else {
      // Always default to dark mode
      setTheme('dark');
    }
  }

  // Set theme
  function setTheme(theme) {
    if (!THEMES[theme]) return;
    
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
    
    // Dispatch custom event for other scripts
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  }

  // Update theme icon
  function updateThemeIcon(theme) {
    if (themeIcon && THEMES[theme]) {
      themeIcon.textContent = THEMES[theme].icon;
    }
  }

  // Toggle theme
  function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  // Mobile menu functionality
  function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navbarLinks.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
  }

  function closeMobileMenu() {
    hamburger.classList.remove('active');
    navbarLinks.classList.remove('active');
    mobileOverlay.classList.remove('active');
  }

  // Event listeners
  function setupEventListeners() {
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }

    // Mobile menu event listeners
    if (hamburger) {
      hamburger.addEventListener('click', toggleMobileMenu);
    }

    if (mobileOverlay) {
      mobileOverlay.addEventListener('click', closeMobileMenu);
    }

    // Close mobile menu when clicking on a link
    if (navbarLinks) {
      const links = navbarLinks.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
      });
    }

    // Close mobile menu on window resize (if screen becomes larger)
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        closeMobileMenu();
      }
    });

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      // Only auto-switch if user hasn't manually set a preference
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'dark';
        setTheme(newTheme);
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initTheme();
      setupEventListeners();
    });
  } else {
    initTheme();
    setupEventListeners();
  }

  // Expose functions globally for debugging
  window.themeManager = {
    setTheme,
    toggleTheme,
    getCurrentTheme: () => html.getAttribute('data-theme')
  };

})(); 