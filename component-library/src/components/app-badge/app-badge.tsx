import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-badge',
  shadow: true,
})
export class AppBadge {

  render() {
    return (
      <Host>
        Badge Component
      </Host>
    );
  }

}
