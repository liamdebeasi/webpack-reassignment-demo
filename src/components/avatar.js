let Avatar = class extends HTMLElement {
  constructor() {
    super();
    
    console.log('avatar bundle');
  }
}

/**
 * Simplified usage. The real world example looks something like:
 * Avatar = [PURE comment] wrapperFn(Avatar);
 */
Avatar = Avatar;

export { Avatar };
