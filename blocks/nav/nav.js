export default function decorate(block) {
  const navSection = document.createElement('nav');
  navSection.className = 'custom-nav';

  const row = block.querySelector('div');
  const cells = [...row.children];

  cells.forEach((cell) => {
    const links = cell.textContent.split('|').map(link => link.trim());

    links.forEach(linkText => {
      const a = document.createElement('a');
      a.textContent = linkText;
      a.href = `#${linkText.toLowerCase().replace(/\s+/g, '-')}`;
      navSection.appendChild(a);
    });
  });

  block.innerHTML = '';
  block.appendChild(navSection);
}
