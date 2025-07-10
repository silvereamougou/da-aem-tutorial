export default function decorate(block) {
  const [title, description] = block.children;

  const section = document.createElement('section');
  section.className = 'test';

  if (title?.textContent) {
    const h1 = document.createElement('h1');
    h1.textContent = title.textContent.trim();
    section.appendChild(h1);
  }

  if (description?.textContent) {
    const p = document.createElement('p');
    p.textContent = description.textContent.trim();
    section.appendChild(p);
  }

  // Adding image to the hero ('Yes I am using a hero')
  const imgCell = block.children[2];
  const img = imgCell?.querySelector('img');
  if (img) {
    section.appendChild(img.cloneNode(true));
  }

  block.innerHTML = '';
  block.appendChild(section);
}

