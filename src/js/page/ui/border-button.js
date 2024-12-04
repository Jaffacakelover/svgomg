import FloatingActionButton from './floating-action-button.js';

export default class BorderButton extends FloatingActionButton {
  constructor() {
    const title = 'Preview with border';

    super({
      title,
      iconSvg:
        // prettier-ignore
        '<svg aria-hidden="true" class="icon" viewBox="0 0 24 24">' +
          '<path fill="currentColor" d="M17.5 3h-11c-1 0-2 1-2 2v14c0 1 1 2 2 2h11c1 0 2-1 2-2V5c0-1-1-2-2-2Zm0 16h-11V5h11v14Z"/>' +
        '</svg>',
    });
  }

  onClick(event) {
    super.onClick(event);

    if (this.container.classList.contains('active')) {
      this.container.classList.remove('active');
      document.documentElement.classList.remove('bg-border');
    } else {
      this.container.classList.add('active');
      document.documentElement.classList.add('bg-border');
    }
  }
}
