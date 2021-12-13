let Badge = class extends HTMLElement {
  constructor() {
    super();
    
    console.log('badge bundle');
  }
}

/**
 * Simplified usage. The real world example looks something like:
 * Badge = [PURE comment] wrapperFn(Badge);
 */
Badge = Badge;

export { Badge };
