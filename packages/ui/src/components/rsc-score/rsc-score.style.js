import pxToRem from "@utils/css";

const componentSheet = new CSSStyleSheet();

componentSheet.replaceSync(`
  :host {
    margin-bottom: ${pxToRem(24)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${pxToRem(140)};
    height: ${pxToRem(140)};
    border-radius: 9999px;
    background: var(--color-primary-variant);
  }

  .value {
    flex: 0 0 auto;
  }

  .value:empty {
    margin-top: calc((var(--text-display-large-line-height) - var(--text-display-large-font-size)) / 2);
    margin-bottom: calc((var(--text-display-large-line-height) - var(--text-display-large-font-size)) / 2);
    width: var(--text-display-large-font-size);
    height: var(--text-display-large-font-size);
    padding: calc(var(--text-display-large-font-size) / 8);
    background: var(--color-on-primary);
    border-radius: 9999px;
    --_m:
      conic-gradient(#0000,#000),
      linear-gradient(#000 0 0) content-box;
    -webkit-mask: var(--_m);
            mask: var(--_m);
    -webkit-mask-composite: source-out;
            mask-composite: subtract;
    animation: load 1s linear infinite;
  }
`);

export default componentSheet;
