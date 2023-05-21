import pxToRem from "@utils/css";

const componentSheet = new CSSStyleSheet();

componentSheet.replaceSync(`
  @font-face {
    font-display: swap;
    font-family: "Hanken Grotesk";
    font-style: normal;
    font-weight: 500;
    src: url("@fonts/hanken-grotesk-v5-latin-500.woff2") format("woff2"),
      url("@fonts/hanken-grotesk-v5-latin-500.woff") format("woff");
  }

  /* hanken-grotesk-700 - latin */
  @font-face {
    font-display: swap;
    font-family: "Hanken Grotesk";
    font-style: normal;
    font-weight: 700;
    src: url("@fonts/hanken-grotesk-v5-latin-700.woff2") format("woff2"),
      url("@fonts/hanken-grotesk-v5-latin-700.woff") format("woff");
  }

  /* hanken-grotesk-800 - latin */
  @font-face {
    font-display: swap;
    font-family: "Hanken Grotesk";
    font-style: normal;
    font-weight: 800;
    src: url("@fonts/hanken-grotesk-v5-latin-800.woff2") format("woff2"),
      url("@fonts/hanken-grotesk-v5-latin-800.woff") format("woff");
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @keyframes load {
    to { transform: rotate(1turn) }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: .5; }
  }

  :host {
    --color-very-light-blue: hsl(221, 100%, 96%);
    --color-light-blue: hsl(241, 100%, 89%);
    --color-blue: hsl(241, 81%, 54%);
    --color-purple: hsl(252, 100%, 67%);
    --color-white: hsl(0, 0%, 100%);
    --color-dark-navy: hsl(224, 30%, 27%);
    --color-dark-blue: hsl(256, 72%, 46%);
    --color-gray: hsl(236, 8%, 63%);
    --color-light-gray: hsl(236, 8%, 86%);
    --color-shadow: hsla(224, 82%, 58%, 15%);
    --color-moderate-blue: hsl(241, 81%, 66%);

    --color-surface: var(--color-white);
    --color-on-surface: var(--color-dark-navy);
    --color-on-surface-variant: var(--color-gray);
    --color-primary: linear-gradient(
      to bottom,
      var(--color-purple),
      var(--color-blue)
    );
    --color-primary-variant: linear-gradient(
      to bottom,
      var(--color-dark-blue),
      transparent
    );
    --color-on-primary: var(--color-white);
    --color-on-primary-variant: var(--color-light-blue);
    --color-secondary: var(--color-dark-navy);
    --color-on-secondary: var(--color-white);
    --color-on-secondary-variant: var(--color-light-blue);
    --color-outline: var(--color-light-gray);
    --color-outline-on-primary: var(--color-moderate-blue);
    --_skeleton-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    --_skeleton-background-color: var(--color-outline);

    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    container-type: inline-size;
    container-name: rsc-app;
    font-family: "Hanken Grotesk", ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
  }

  .text {
    --text-font-family: var(--font-stack);

    --text-display-large-font-weight: 800;
    --text-display-large-font-size: ${pxToRem(56)};
    --text-display-large-line-height: ${pxToRem(72)};

    --text-title-large-font-weight: 700;
    --text-title-large-font-size: ${pxToRem(24)};
    --text-title-large-line-height: ${pxToRem(32)};

    --text-title-medium-font-weight: 700;
    --text-title-medium-font-size: ${pxToRem(18)};
    --text-title-medium-line-height: ${pxToRem(24)};

    --text-body-large-font-weight: 500;
    --text-body-large-font-size: ${pxToRem(16)};
    --text-body-large-line-height: ${pxToRem(24)};

    --text-label-large-font-weight: 700;
    --text-label-large-font-size: ${pxToRem(18)};
    --text-label-large-line-height: ${pxToRem(24)};

    --text-label-medium-font-weight: 700;
    --text-label-medium-font-size: ${pxToRem(16)};
    --text-label-medium-line-height: ${pxToRem(24)};

    margin-top: 0;
    margin-bottom: 0;
    font-family: var(--text-font-family);
  }

  .text--display-large {
    font-weight: var(--text-display-large-font-weight);
    font-size: var(--text-display-large-font-size);
    line-height: var(--text-display-large-line-height);
  }

  .text--title-large {
    font-weight: var(--text-title-large-font-weight);
    font-size: var(--text-title-large-font-size);
    line-height: var(--text-title-large-line-height);
  }

  .text--title-medium {
    font-weight: var(--text-title-medium-font-weight);
    font-size: var(--text-title-medium-font-size);
    line-height: var(--text-title-medium-line-height);
  }

  .text--body-large {
    max-width: 260px;
    font-weight: var(--text-body-large-font-weight);
    font-size: var(--text-body-large-font-size);
    line-height: var(--text-body-large-line-height);
  }

  .text--label-large {
    font-weight: var(--text-label-large-font-weight);
    font-size: var(--text-label-large-font-size);
    line-height: var(--text-label-large-line-height);
  }

  .text--label-medium {
    font-weight: var(--text-label-medium-font-weight);
    font-size: var(--text-label-medium-font-size);
    line-height: var(--text-label-medium-line-height);
  }

  .text--on-primary {
    color: var(--color-on-primary);
  }

  .text--on-primary-variant {
    color: var(--color-on-primary-variant);
  }

  .text--on-surface {
    color: var(--color-on-surface);
  }

  .text--on-secondary {
    color: var(--color-on-secondary);
  }

  .text--on-surface {
    color: var(--color-on-surface);
  }

  .text--on-surface-variant {
    color: var(--color-on-surface-variant);
  }

  .card {
    --_card-border-radius: ${pxToRem(32)};

    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    border-radius: var(--_card-border-radius);
    background-color: var(--color-surface);
    box-shadow: 0 30px 60px var(--color-shadow);
  }

  .card__section {
    flex: 1;
    width: 100%;
    padding-top: ${pxToRem(24)};
    padding-left: ${pxToRem(32)};
    padding-right: ${pxToRem(32)};
  }

  .card__section--result {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 0;
    background: var(--color-primary);
    border-bottom-left-radius: var(--_card-border-radius);
    border-bottom-right-radius: var(--_card-border-radius);
    text-align: center;
    padding-bottom: ${pxToRem(40)};
  }

  .card__section--summary {
    padding-bottom: ${pxToRem(32)};
  }

  .card__title {
    margin-bottom: ${pxToRem(24)};
  }

  .card__list {
    margin: 0 0 ${pxToRem(24)}; 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: ${pxToRem(16)};
    width: 100%;
    padding: 0;
    list-style: none;
  }

  .performance {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${pxToRem(8)};
  }

  .performance__name:empty {
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

  .performance__value:empty::before {
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

  .score {
    box-sizing: border-box;
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

  .score__value {
    flex: 0 0 auto;
  }

  .score__value:empty {
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
    box-sizing: border-box;
    animation: load 1s linear infinite;
  }

  .category {
    --_category-color-hue: 224;
    --_category-color-saturation: 30%;
    --_category-color-lightness: 27%;
    --_category-color: hsl(var(--_category-color-hue), var(--_category-color-saturation), var(--_category-color-lightness));
    --_category-background-color: hsla(var(--_category-color-hue), var(--_category-color-saturation), var(--_category-color-lightness), 5%);

    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: ${pxToRem(56)};
    padding-left: ${pxToRem(16)};
    padding-right: ${pxToRem(16)};
    border-radius: ${pxToRem(12)};
    background-color: var(--_category-background-color);
    color: var(--_category-color);
  }

  .category[data-color="red"] {
    --_category-color-hue: 0;
    --_category-color-saturation: 100%;
    --_category-color-lightness: 67%;
  }

  .category[data-color="yellow"] {
    --_category-color-hue: 40;
    --_category-color-saturation: 100%;
    --_category-color-lightness: 56%;
  }

  .category[data-color="green"] {
    --_category-color-hue: 166;
    --_category-color-saturation: 100%;
    --_category-color-lightness: 36%;
  }

  .category[data-color="blue"] {
    --_category-color-hue: 234;
    --_category-color-saturation: 85%;
    --_category-color-lightness: 45%;
  }
  
  .category__section {
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 0;
  }

  .category__section--left {
    flex: 1;
    margin-right: ${pxToRem(16)};
    justify-content: flex-start;
    gap: ${pxToRem(12)};
  }

  .category__section--right {
    flex: 0 0 auto;
    justify-content: flex-end;
    gap: ${pxToRem(8)};
  }

  .category__icon-container {
    flex: 0 0 auto;
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    color: var(--_card-category-color);
  }

  .category__icon-container:empty {
    animation: var(--_skeleton-animation);
    background-color: var(--_skeleton-background-color);
    border-radius: 9999px;
  }

  .category__icon {
    width: 100%;
    height: 100%;
  }

  .category__name {
    flex: 0 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .category__name:empty {
    animation: var(--_skeleton-animation);
    background-color: var(--_skeleton-background-color);
    width: 100%;
    height: var(--text-body-large-font-size);
    border-radius: 9999px;
  }

  .category__score-value {
    flex: 1;
  }

  .category__score-value:empty {
    display: inline-block;
    animation: var(--_skeleton-animation);
    background-color: var(--_skeleton-background-color);
    width: ${pxToRem(32)};
    height: var(--text-label-medium-font-size);
    border-radius: 9999px;
  }

  .category__score-max-value {
    flex: 0 0 auto;
  }

  .button {
    --_button-width: 100%;
    --_button-height: ${pxToRem(56)};
    --_button-padding: ${pxToRem(8)} ${pxToRem(16)};
    --_button-border-radius: 9999px;
    --_button-background-color: var(--color-secondary);
    --_button-overlay-background-color: var(--color-primary);

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

  @container (min-width: 376px) {
    .card {
      max-width: 376px;
    }
  }

  @container (min-width: 736px) {
    .text {
      --text-display-large-font-size: ${pxToRem(72)};
      --text-display-large-line-height: ${pxToRem(88)};
      --text-title-medium-font-size: ${pxToRem(24)};
      --text-title-large-font-size: ${pxToRem(32)};
      --text-title-large-line-height: ${pxToRem(36)};
      --text-body-large-font-size: ${pxToRem(18)};
      --text-body-large-line-height: ${pxToRem(28)};
      --text-label-medium-font-size: ${pxToRem(18)};
    }

    .card {
      flex-direction: row;
      align-items: stretch;
      max-width: 736px;
      border-radius: var(--_card-border-radius);
    }

    .card__section {
      padding: ${pxToRem(40)};
    }

    .card__section--result {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: var(--_card-border-radius);
      border-bottom-right-radius: var(--_card-border-radius);
    }

    .card__section--summary {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-width: 0;
    }

    .card__section--result .card__title {
      margin-bottom: ${pxToRem(36)};
    }

    .card__section--summary .card__title {
      margin-bottom: ${pxToRem(28)};
    }

    .card__list {
      margin: 0 0 ${pxToRem(40)} 0;
    }

    .card__button {
      margin-top: auto;
    }

    .performance {
      gap: ${pxToRem(14)};
    }

    .score {
      margin-bottom: ${pxToRem(28)};
      gap: ${pxToRem(4)};
      width: ${pxToRem(200)};
      height: ${pxToRem(200)};
    }
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
