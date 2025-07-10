export default function decorate(block) {
  const [title, description] = block.children;

  const section = document.createElement('section');
  section.className = 'test';

  if (title) {
    const h1 = document.createElement('h1');
    h1.textContent = title.textContent;
    section.appendChild(h1);
  }

  if (description) {
    const p = document.createElement('p');
    p.textContent = description.textContent;
    section.appendChild(p);
  }
//adding image to the hero('Yes i am using a hero')
  const imgCell = block.children[2];
if (imgCell) {
  const img = imgCell.querySelector('img');
  if (img) section.appendChild(img);
}

  block.innerHTML = '';
  block.appendChild(section);
}

