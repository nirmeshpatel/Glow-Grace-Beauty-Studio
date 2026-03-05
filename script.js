(function () {
  document.body.classList.add('motion-ready');

  const navbar = document.querySelector('.navbar');
  const navLinks = Array.from(document.querySelectorAll('.nav-link[href^="#"]'));
  const sections = Array.from(document.querySelectorAll('main section[id], header[id]'));
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const galleryToggleBtn = document.getElementById('galleryToggleBtn');
  const hiddenGalleryItems = Array.from(document.querySelectorAll('#galleryGrid .gallery-item-hidden'));
  const navCollapseEl = document.getElementById('parlourNav');
  const navCollapse = navCollapseEl && window.bootstrap ? new window.bootstrap.Collapse(navCollapseEl, { toggle: false }) : null;

  function setNavState() {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }

    if (scrollTopBtn) {
      scrollTopBtn.style.display = window.scrollY > 320 ? 'inline-flex' : 'none';
    }
  }

  function updateActiveLink() {
    const navOffset = (navbar ? navbar.offsetHeight : 72) + 28;
    let currentSection = sections[0] ? sections[0].id : '';

    sections.forEach(function (section) {
      if (window.scrollY >= section.offsetTop - navOffset) {
        currentSection = section.id;
      }
    });

    navLinks.forEach(function (link) {
      const isActive = link.getAttribute('href') === '#' + currentSection;
      link.classList.toggle('active', isActive);
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth < 992 && navCollapse) {
        navCollapse.hide();
      }
    });
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              const delay = entry.target.getAttribute('data-delay');
              if (delay) {
                entry.target.style.transitionDelay = delay + 'ms';
              }
              entry.target.classList.add('active');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      revealEls.forEach(function (el) {
        revealObserver.observe(el);
      });
    } else {
      revealEls.forEach(function (el) {
        el.classList.add('active');
      });
    }
  }

  if (galleryToggleBtn) {
    if (!hiddenGalleryItems.length) {
      galleryToggleBtn.style.display = 'none';
    } else {
      galleryToggleBtn.addEventListener('click', function () {
        const isExpanded = galleryToggleBtn.getAttribute('aria-expanded') === 'true';
        hiddenGalleryItems.forEach(function (item) {
          item.classList.toggle('show', !isExpanded);
        });
        galleryToggleBtn.setAttribute('aria-expanded', String(!isExpanded));
        galleryToggleBtn.textContent = isExpanded ? 'See More' : 'See Less';
      });
    }
  }

  window.addEventListener('scroll', function () {
    setNavState();
    updateActiveLink();
  });

  window.addEventListener('load', function () {
    setNavState();
    updateActiveLink();
  });
})();
