import pxToRem from "@utils/css";

const componentSheet = new CSSStyleSheet();

componentSheet.replaceSync(`
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
    --_skeleton-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    --_skeleton-background-color: var(--color-outline);

    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    container-type: inline-size;
    container-name: rsc-app;
  }
  .text {
    --text-font-family: var(--font-stack);

    --text-display-large-font-weight: 800;
    --text-display-large-font-size: 56px;
    --text-display-large-line-height: 72px;

    --text-title-large-font-weight: 700;
    --text-title-large-font-size: 24px;
    --text-title-large-line-height: 32px;

    --text-title-medium-font-weight: 700;
    --text-title-medium-font-size: 18px;
    --text-title-medium-line-height: 24px;

    --text-body-large-font-weight: 500;
    --text-body-large-font-size: 16px;
    --text-body-large-line-height: 24px;

    --text-label-large-font-weight: 700;
    --text-label-large-font-size: 18px;
    --text-label-large-line-height: 24px;

    --text-label-medium-font-weight: 700;
    --text-label-medium-font-size: 16px;
    --text-label-medium-line-height: 24px;

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
    --_card-border-radius: 2rem; /* 32px */

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
    padding-top: 24px;
    padding-left: 32px;
    padding-right: 32px;
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
    padding-bottom: 40px;
  }
  .card__section--summary {
    padding-bottom: 32px;
  }
  .card__title {
    margin-bottom: 24px;
  }
  .card__list {
    margin: 0 0 24px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 16px;
    width: 100%;
    padding: 0;
    list-style: none;
  }
  .performance {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  .performance__name:empty {
    margin-top: calc((var(--text-title-large-line-height) - var(--text-title-large-font-size)) / 2);
    margin-bottom: calc((var(--text-title-large-line-height) - var(--text-title-large-font-size)) / 2);
    width: 100%;
    max-width: 6rem;
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
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 140px;
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
    height: 56px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 12px;
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
    margin-right: 16px;
    justify-content: flex-start;
    gap: 12px;
  }
  .category__section--right {
    flex: 0 0 auto;
    justify-content: flex-end;
    gap: 8px;
  }
  .category__icon-container {
    flex: 0 0 auto;
    width: 20px;
    height: 20px;
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
    width: 2rem;
    height: var(--text-label-medium-font-size);
    border-radius: 9999px;
  }
  .category__score-max-value {
    flex: 0 0 auto;
  }
  .button {
    --_button-width: 100%;
    --_button-height: 56px;
    --_button-padding: 8px 16px;
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
      --text-display-large-font-size: 72px;
      --text-display-large-line-height: 88px;
      --text-title-medium-font-size: 24px;
      --text-title-large-font-size: 32px;
      --text-title-large-line-height: 36px;
      --text-body-large-font-size: 18px;
      --text-body-large-line-height: 28px;
      --text-label-medium-font-size: 18px;
    }
    .card {
      flex-direction: row;
      align-items: stretch;
      max-width: 736px;
      border-radius: var(--_card-border-radius);
    }
    .card__section {
      padding: 40px;
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
      margin-bottom: 36px;
    }
    .card__section--summary .card__title {
      margin-bottom: 28px;
    }
    .card__list {
      margin: 0 0 40px 0;
    }
    .card__button {
      margin-top: auto;
    }
    .performance {
      gap: 14px;
    }
    .score {
      margin-bottom: 28px;
      gap: 4px;
      width: 200px;
      height: 200px;
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
