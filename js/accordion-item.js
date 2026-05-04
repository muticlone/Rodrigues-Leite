class MyAccordionItem extends HTMLElement {
  connectedCallback() {
    if (this.querySelector(".accordion-item")) return;

    const id =
      this.getAttribute("item-id") ||
      `collapse-${Math.random().toString(36).slice(2, 9)}`;

    const title = this.getAttribute("title") || "Titulo do Item";
    const parent = this.getAttribute("parent") || "#accordionExample";

    const originalContent = this.innerHTML;
    this.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.className = "accordion-item";

    wrapper.innerHTML = `
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed w-100 text-start"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#${id}"
          aria-expanded="false"
          aria-controls="${id}"
        >
          ${title}
        </button>
      </h2>

      <div
        id="${id}"
        class="accordion-collapse collapse"
        data-bs-parent="${parent}"
      >
        <div class="accordion-body">
          ${originalContent}
        </div>
      </div>
    `;

    this.appendChild(wrapper);

    const collapseEl = this.querySelector(`#${id}`);

    if (!collapseEl) return;

    collapseEl.addEventListener("show.bs.collapse", () => {
      setTimeout(() => {
        const header = collapseEl.previousElementSibling;
        if (!header) return;

        const rect = header.getBoundingClientRect();
        const offset = window.innerWidth < 768 ? 58 : 100;
        const targetTop = rect.top + window.pageYOffset - offset;

        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: "smooth",
        });
      }, 60);
    });
  }
}

customElements.define("my-accordion-item", MyAccordionItem);
