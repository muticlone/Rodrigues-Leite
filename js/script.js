document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const navbarOverlay = document.querySelector(".navbar-overlay");
  const toggler = document.querySelector(".navbar-toggler");

  // =========================
  // 📌 NAV LINKS
  // =========================
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");

      if (menu.classList.contains("show")) {
        toggler.click();
      }

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
  // 📜 NAVBAR SCROLL
  // =========================
 

  // =========================
  // 🖱️ CLICK FORA
  // =========================
  document.addEventListener("click", (e) => {
    const isInsideMenu = menu.contains(e.target);
    const isToggler = e.target.closest(".navbar-toggler");

    if (!isInsideMenu && !isToggler && menu.classList.contains("show")) {
      toggler.click();
    }
  });

  // =========================
  // 📱 BOTÃO WHATSAPP FIXO
  // =========================
  const whatsappBtn = document.querySelector(".whatsapp-btn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      whatsappBtn.style.bottom = "30px";
      whatsappBtn.style.transform = "scale(0.95)";
    } else {
      whatsappBtn.style.bottom = "20px";
      whatsappBtn.style.transform = "scale(1)";
    }
  });

  // =========================
  // ✨ ANIMAÇÃO DO BOTÃO
  // =========================
  const btnAnimado = document.querySelector(".btn-whatsapp-animado");

  if (btnAnimado) {
    setTimeout(() => {
      btnAnimado.classList.add("show");
    }, 300);
  }
});


const textos = document.querySelectorAll('.scroll-text');

window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight;

  textos.forEach(el => {
    const rect = el.getBoundingClientRect();

    // 🔥 aumenta a área de animação (mais tempo visível)
    const start = windowHeight * 0.95; // antes 0.8
    const end = windowHeight * 0.3;    // antes 0.2

    let progresso = (start - rect.top) / (start - end);
    progresso = Math.max(0, Math.min(1, progresso));

    // 🔥 suavização mais forte (mais lento)
    progresso = Math.pow(progresso, 2);

    const textoOriginal = el.dataset.texto || el.innerText;
    el.dataset.texto = textoOriginal;

    const palavras = textoOriginal.split(" ");
    const total = palavras.length;

    // 🔥 deixa ainda mais gradual
    const mostrar = Math.floor(total * progresso);

    el.innerText = palavras.slice(0, mostrar).join(" ");

    // fade mais suave também
    el.style.opacity = 0.2 + (progresso * 0.8);
  });
});

const faq = document.getElementById("faq");

window.addEventListener("scroll", () => {
  const rect = faq.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // quando o topo do FAQ estiver visível
  if (rect.top < windowHeight * 0.85) {
    faq.classList.add("show");
  }
});

