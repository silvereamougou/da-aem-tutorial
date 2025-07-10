export default function decorate(block) {
  // Loop through each row (each accordion item)
  [...block.children].forEach((row) => {
    const [titleEl, contentEl] = row.children;

    const accordionItem = document.createElement('div');
    accordionItem.className = 't-accordion-item';

    const button = document.createElement('button');
    button.className = 't-accordion-title';
    button.innerHTML = titleEl.innerHTML;

    const content = document.createElement('div');
    content.className = 't-accordion-content';
    content.innerHTML = contentEl.innerHTML;

    // Toggle accordion
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      content.classList.toggle('show');
    });

    accordionItem.appendChild(button);
    accordionItem.appendChild(content);
    block.appendChild(accordionItem);
  });

  // Clear original table content
  [...block.children].slice(0, block.children.length / 2).forEach((child) => child.remove());
}
