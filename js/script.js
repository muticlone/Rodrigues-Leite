document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const navbarOverlay = document.querySelector(".navbar-overlay");
  const toggler = document.querySelector(".navbar-toggler");
  const overlay = document.querySelector(".navbar-overlay-bg");
  const whatsappBtn = document.querySelector(".whatsapp-btn");
  const btnAnimado = document.querySelector(".btn-whatsapp-animado");
  const contact = document.querySelector("#contact");
  const hasBootstrapCollapse = Boolean(
    window.bootstrap && window.bootstrap.Collapse,
  );

  if (menu && toggler && !hasBootstrapCollapse) {
    toggler.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("show");

      toggler.setAttribute("aria-expanded", String(isOpen));

      if (overlay) {
        overlay.classList.toggle("active", isOpen);
      }
    });
  }

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (menu && toggler && menu.classList.contains("show")) {
        setTimeout(() => toggler.click(), 100);
      }
    });
  });

  document.addEventListener("click", (e) => {
    if (!menu || !toggler) return;

    const isInsideMenu = menu.contains(e.target);
    const isToggler = e.target.closest(".navbar-toggler");

    if (!isInsideMenu && !isToggler && menu.classList.contains("show")) {
      toggler.click();
    }
  });

  const handleScroll = () => {
    if (navbarOverlay) {
      navbarOverlay.classList.toggle("scrolled", window.scrollY > 30);
    }

    if (whatsappBtn) {
      if (window.scrollY > 100) {
        whatsappBtn.style.bottom = "30px";
        whatsappBtn.style.transform = "scale(0.95)";
      } else {
        whatsappBtn.style.bottom = "20px";
        whatsappBtn.style.transform = "scale(1)";
      }
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  if (btnAnimado) {
    setTimeout(() => {
      btnAnimado.classList.add("show");
    }, 300);
  }

  if (menu && overlay) {
    if (hasBootstrapCollapse) {
      menu.addEventListener("show.bs.collapse", () => {
        overlay.classList.add("active");
      });

      menu.addEventListener("hide.bs.collapse", () => {
        overlay.classList.remove("active");
      });
    }

    overlay.addEventListener("click", () => {
      if (toggler && menu.classList.contains("show")) {
        toggler.click();
      }

      overlay.classList.remove("active");
    });
  }

  const revealElements = document.querySelectorAll(".scroll-text, .scroll-img");
  const faq = document.querySelector("#faq");

  if (revealElements.length) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  }

  if (faq && window.innerWidth < 768) {
    faq.classList.add("show");
  } else if (faq) {
    const faqObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
        });
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px 18% 0px",
      },
    );

    faqObserver.observe(faq);
  }

  if (contact) {
    const contactObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          contact.classList.toggle("show", entry.isIntersecting);
        });
      },
      {
        threshold: 0.2,
      },
    );

    contactObserver.observe(contact);
  }
});
