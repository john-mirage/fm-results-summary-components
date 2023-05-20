import pxToRem from "@utils/css";

const componentSheet = new CSSStyleSheet();

componentSheet.replaceSync(`
  :host {
    --_button-width: 100%;
    --_button-height: ${pxToRem(56)};
    --_button-padding: ${pxToRem(8)} ${pxToRem(16)};
    --_button-border-radius: 9999px;
    --_button-background-color: var(--color-secondary);
    --_button-overlay-background-color: var(--color-primary);

    display: inline-block;
  }

  .button {
    position: relative;
    width: var(--_button-width);
    min-height: var(--_button-height);
    padding: var(--_button-padding);
    border-radius: var(--_button-border-radius);
    overflow: hidden;
    background-color: var(--_button-background-color);
    border: none;
  }

  .button:disabled {
    cursor: not-allowed;
  }

  .button:not(:disabled) {
    cursor: pointer;
  }
  
  .button__overlay {
    display: block;
    position: absolute;
    z-index: 10;
    inset: 0;
    visibility: hidden;
    opacity: 0;
    background: var(--_button-overlay-background-color);
  }

  .button__label {
    position: relative;
    z-index: 20;
  }

  @media screen and (hover: hover) {
    .button:not(:disabled):hover .button__overlay {
      visibility: visible;
      opacity: 1;
    }
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    .button__overlay {
      transition-property: visibility, opacity;
      transition-duration: 150ms;
    }
  }
`);

export default componentSheet;
