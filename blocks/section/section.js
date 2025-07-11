export default function decorate(block) {
  // Clear block content
  block.textContent = '';

  // Section One: background image + overlay text
  const sectionOne = document.createElement('section');
  sectionOne.className = 'section-one';

  // Background image div
  const bgDiv = document.createElement('div');
  bgDiv.className = 'background-image';
  bgDiv.style.backgroundImage = 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80")';
  sectionOne.appendChild(bgDiv);

  // Overlay text container
  const overlay = document.createElement('div');
  overlay.className = 'overlay-text';

  const h1 = document.createElement('h1');
  h1.textContent = 'Welcome to Section One';

  const p = document.createElement('p');
  p.textContent = 'This is some overlay text on top of the background image.';

  overlay.appendChild(h1);
  overlay.appendChild(p);
  sectionOne.appendChild(overlay);

  // Section Two: simple content block
  const sectionTwo = document.createElement('section');
  sectionTwo.className = 'section-two';

  const h1Two = document.createElement('h1');
  h1Two.textContent = 'Simple Section Two';

  const pTwo = document.createElement('p');
  pTwo.textContent = 'This section has no background image, just text and a button.';

  const btn = document.createElement('button');
  btn.textContent = 'Click Me';
  btn.addEventListener('click', () => alert('Button clicked!'));

  sectionTwo.appendChild(h1Two);
  sectionTwo.appendChild(pTwo);
  sectionTwo.appendChild(btn);

  // Append both sections to the block
  block.appendChild(sectionOne);
  block.appendChild(sectionTwo);
}
