import pxToRem from "@utils/css";

const componentSheet = new CSSStyleSheet();

componentSheet.replaceSync(`
  :host {
    --_button-width: 100%;
    --_button-height: ${pxToRem(56)};
    --_button-padding: ${pxToRem(8)} ${pxToRem(24)};
    --_button-border-radius: 9999px;
    --_button-background-color: var(--color-secondary);
    --_button-overlay-background-color: var(--color-primary);

    display: block;
    width: 100%;
  }

  button {
    position: relative;
    width: var(--_button-width);
    min-height: var(--_button-height);
    padding: var(--_button-padding);
    border-radius: var(--_button-border-radius);
    overflow: hidden;
    background-color: var(--_button-background-color);
    border: none;
  }

  button:disabled {
    cursor: not-allowed;
  }

  button:not(:disabled) {
    cursor: pointer;
  }
  
  span {
    position: absolute;
    z-index: 10;
    inset: 0;
    display: block;
    visibility: hidden;
    opacity: 0;
    background: var(--_button-overlay-background-color);
  }

  slot {
    position: relative;
    z-index: 20;
    display: block;
  }

  @media screen and (hover: hover) {
    button:not(:disabled):hover span {
      visibility: visible;
      opacity: 1;
    }
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    span {
      transition-property: visibility, opacity;
      transition-duration: 150ms;
    }
  }
`);

export default componentSheet;
