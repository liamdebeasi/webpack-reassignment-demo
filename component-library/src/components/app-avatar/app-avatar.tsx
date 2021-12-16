import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-avatar',
  shadow: true,
})
export class AppAvatar {

  render() {
    return (
      <Host>
        Avatar Component
      </Host>
    );
  }

}
