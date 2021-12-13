import { Badge } from './components-wrapper';

function component() {
  const element = document.createElement('div');

  element.innerHTML = Badge;

  return element;
}

document.body.appendChild(component());