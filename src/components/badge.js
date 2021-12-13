let Badge = class extends HTMLElement {
  constructor() {
    super();
    
    console.log('badge bundle');
  }
}

/**
 * Simplified usage. The real world example looks something like:
 * Badge = /*@__PURE__*/ wrapperFn(Badge);
 */
Badge = Badge;

export { Badge };
