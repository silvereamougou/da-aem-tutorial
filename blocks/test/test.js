export default function decorate(block) {
  const message = document.createElement('p');
  message.textContent = 'Hello from the test block!';
  block.appendChild(message);
}

