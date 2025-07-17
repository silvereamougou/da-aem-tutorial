export default function decorate(block) {
  const slides = [...block.children];

  const wrapper = document.createElement('div');
  wrapper.className = 'slider-wrapper';

  slides.forEach((slide) => {
    const [imgCell, titleCell, descCell] = slide.children;

    const slideDiv = document.createElement('div');
    slideDiv.className = 'slide';

    const img = imgCell.querySelector('img');
    if (img) {
      const image = img.cloneNode(true);
      slideDiv.appendChild(image);
    }

    if (titleCell?.textContent) {
      const title = document.createElement('h3');
      title.textContent = titleCell.textContent.trim();
      slideDiv.appendChild(title);
    }

    if (descCell?.textContent) {
      const desc = document.createElement('p');
      desc.textContent = descCell.textContent.trim();
      slideDiv.appendChild(desc);
    }

    wrapper.appendChild(slideDiv);
  });

  block.innerHTML = '';
  block.appendChild(wrapper);
}
