document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const navbarOverlay = document.querySelector(".navbar-overlay");
  const toggler = document.querySelector(".navbar-toggler");

  // =========================
  // 📌 FECHAR AO CLICAR NO LINK + SCROLL SUAVE
  // =========================
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");

      // fecha menu (forma mais confiável: simular clique no botão)
      if (menu.classList.contains("show")) {
        toggler.click();
      }

      // scroll suave para seção
      if (targetId && targetId.startsWith("#")) {
        const target = document.querySelector(targetId);

        if (target) {
          e.preventDefault();

          setTimeout(() => {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 150);
        }
      }
    });
  });

  // =========================
  // 📜 EFEITO SCROLL NAVBAR
  // =========================
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      navbarOverlay.classList.add("scrolled");
    } else {
      navbarOverlay.classList.remove("scrolled");
    }
  });

  // =========================
  // 🖱️ FECHAR AO CLICAR FORA
  // =========================
  document.addEventListener("click", (e) => {
    const isInsideMenu = menu.contains(e.target);
    const isToggler = e.target.closest(".navbar-toggler");

    if (!isInsideMenu && !isToggler && menu.classList.contains("show")) {
      toggler.click();
    }
  });
});

const btn = document.querySelector(".whatsapp-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    btn.style.bottom = "30px";
    btn.style.transform = "scale(0.95)";
  } else {
    btn.style.bottom = "20px";
    btn.style.transform = "scale(1)";
  }
});