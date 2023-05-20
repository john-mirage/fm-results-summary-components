import pxToRem from "@utils/css";

const componentSheet = new CSSStyleSheet();

componentSheet.replaceSync(`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${pxToRem(8)};
  }

  .name:empty {
    margin-top: calc((var(--text-title-large-line-height) - var(--text-title-large-font-size)) / 2);
    margin-bottom: calc((var(--text-title-large-line-height) - var(--text-title-large-font-size)) / 2);
    width: 100%;
    max-width: ${pxToRem(96)};
    height: var(--text-title-large-font-size);
    color: transparent;
    background-color: var(--color-outline-on-primary);
    background-origin: content-box;
    border-radius: 9999px;
    animation: var(--_skeleton-animation);
  }

  .value:empty::before {
    content: "Your performance exceed 00% of the people conducting the test here!";
    display: inline;
    color: transparent;
    background-color: var(--color-outline-on-primary);
    border-radius: 9999px;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
    user-select: none;
    animation: var(--_skeleton-animation);
  }
`);

export default componentSheet;
