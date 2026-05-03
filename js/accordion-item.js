class MyAccordionItem extends HTMLElement {
  connectedCallback() {
    // Evita renderizar múltiplas vezes
    if (this.querySelector('.accordion-item')) return;

    const id = this.getAttribute('item-id') || `collapse-${Math.random().toString(36).slice(2, 9)}`;
    const title = this.getAttribute('title') || 'Título do Item';
    const parent = this.getAttribute('parent') || '#accordionExample';
    
    // Captura o conteúdo antes de limpar o innerHTML
    const originalContent = this.innerHTML;
    this.innerHTML = ''; 

    // Cria a estrutura usando fragmentos para melhor performance
    const template = document.createElement('div');
    template.className = 'accordion-item';
    template.innerHTML = `
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

    this.appendChild(template);

    const collapseEl = this.querySelector(`#${id}`);

    // Evento de scroll melhorado
    collapseEl.addEventListener('shown.bs.collapse', () => {
      // Pequeno delay para garantir que o layout estabilizou
      setTimeout(() => {
        const headerOffset = 100; // Aumentado um pouco para segurança
        const elementRect = collapseEl.previousElementSibling.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        
        window.scrollTo({
          top: absoluteElementTop - headerOffset,
          behavior: 'smooth',
        });
      }, 50); 
    });
  }
}

customElements.define('my-accordion-item', MyAccordionItem);