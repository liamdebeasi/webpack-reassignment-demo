import { Badge } from './components-wrapper';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = Badge;

  return element;
}

document.body.appendChild(component());