/**
 * BillWise Pakistan — Legal & Privacy Interactive App
 * Handles:
 * - Theme toggling (Dark/Light) with local storage persistence
 * - Scrollspy navigation for Table of Contents
 * - Live search/filtering through legal clauses
 * - One-click deep link copying
 * - Print handling
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initScrollspy();
  initSearch();
  initCopyButtons();
  initPrintButton();
});

/* --------------------------------------------------------------------------
   1. Theme Management (Light / Dark)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const storedTheme = localStorage.getItem('billwise-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const currentTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const active = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = active === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('billwise-theme', newTheme);
      showToast(`Switched to ${newTheme} mode`);
    });
  }

  // Listen for OS system theme changes if user has no stored preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('billwise-theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.getElementById('themeIcon');
  if (icon) {
    if (theme === 'dark') {
      // Sun icon for switching to light
      icon.innerHTML = `<path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0l-1.414-1.414M7.05 7.05L5.636 5.636M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
    } else {
      // Moon icon for switching to dark
      icon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
    }
  }
}

/* --------------------------------------------------------------------------
   2. Scrollspy for Table of Contents
   -------------------------------------------------------------------------- */
function initScrollspy() {
  const sections = document.querySelectorAll('.policy-card[id]');
  const tocLinks = document.querySelectorAll('.toc-link');

  if (!sections.length || !tocLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-80px 0px -60% 0px',
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        tocLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/* --------------------------------------------------------------------------
   3. Search / Filter through policy clauses
   -------------------------------------------------------------------------- */
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const policyCards = document.querySelectorAll('.policy-card');
  const searchCounter = document.getElementById('searchCounter');

  if (!searchInput || !policyCards.length) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    let matchCount = 0;

    policyCards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      if (!query || text.includes(query)) {
        card.style.display = 'block';
        matchCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (searchCounter) {
      if (query) {
        searchCounter.textContent = `Showing ${matchCount} of ${policyCards.length} sections`;
        searchCounter.style.display = 'block';
      } else {
        searchCounter.style.display = 'none';
      }
    }
  });
}

/* --------------------------------------------------------------------------
   4. One-Click Copy Section Link
   -------------------------------------------------------------------------- */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-anchor-btn');

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const targetId = btn.getAttribute('data-target');
      if (!targetId) return;

      const url = `${window.location.origin}${window.location.pathname}#${targetId}`;
      navigator.clipboard.writeText(url).then(() => {
        showToast('Direct link copied to clipboard!');
      }).catch(() => {
        // Fallback
        const tempInput = document.createElement('input');
        tempInput.value = url;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast('Direct link copied to clipboard!');
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. Print Action
   -------------------------------------------------------------------------- */
function initPrintButton() {
  const printBtn = document.getElementById('printBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

/* --------------------------------------------------------------------------
   6. Toast Helper
   -------------------------------------------------------------------------- */
function showToast(message) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}
