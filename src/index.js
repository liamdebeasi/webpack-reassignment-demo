import { AppBadge } from './components-wrapper';

function component() {
  const element = document.createElement('div');

  element.innerHTML = AppBadge;

  return element;
}

document.body.appendChild(component());