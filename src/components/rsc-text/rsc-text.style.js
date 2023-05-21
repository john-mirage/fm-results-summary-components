import pxToRem from "@utils/css";

const componentSheet = new CSSStyleSheet();

componentSheet.replaceSync(`
  .text {
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

  .text--on-secondary {
    color: var(--color-on-secondary);
  }

  .text--on-surface {
    color: var(--color-on-surface);
  }
  
  .text--on-surface-variant {
    color: var(--color-on-surface-variant);
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
  }
`);

export default componentSheet;
