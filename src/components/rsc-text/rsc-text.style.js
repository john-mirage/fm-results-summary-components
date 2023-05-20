import pxToRem from "@utils/css";

const componentSheet = new CSSStyleSheet();
const displayLargeSheet = new CSSStyleSheet();
const titleLargeSheet = new CSSStyleSheet();
const titleMediumSheet = new CSSStyleSheet();
const bodyLargeSheet = new CSSStyleSheet();
const labelLargeSheet = new CSSStyleSheet();
const labelMediumSheet = new CSSStyleSheet();

componentSheet.replaceSync(`
  :host {
    font-weight: var(--text-font-weight);
    font-size: var(--text-font-size);
    line-height: var(--text-line-height);
  }
`);

displayLargeSheet.replaceSync(`
  :host {
    --text-font-weight: 800;
    --text-font-size: 56px;
    --text-line-height: 72px;
  }
  
  @container rsc-app (min-width: 736px) {
    :host {
      --text-font-size: 72px;
      --text-line-height: 88px;
    }
  }
`);

titleLargeSheet.replaceSync(`
  :host {
    --text-font-weight: 700;
    --text-font-size: 24px;
    --text-line-height: 32px;
  }

  @container rsc-app (min-width: 736px) {
    :host {
      --text-font-size: 32px;
      --text-line-height: 36px;
    }
  }
`);

titleMediumSheet.replaceSync(`
  :host {
    --text-font-weight: 700;
    --text-font-size: 18px;
    --text-line-height: 24px;
  }

  @container rsc-app (min-width: 736px) {
    :host {
      --text-font-size: 24px;
    }
  }
`);

bodyLargeSheet.replaceSync(`
  :host {
    --text-font-weight: 500;
    --text-font-size: 16px;
    --text-line-height: 24px;

    max-width: 260px;
  }

  @container rsc-app (min-width: 736px) {
    :host {
      --text-font-size: 18px;
      --text-line-height: 28px;
    }
  }
`);

labelLargeSheet.replaceSync(`
  :host {
    --text-font-weight: 700;
    --text-font-size: 18px;
    --text-line-height: 24px;
  }
`);

labelMediumSheet.replaceSync(`
  :host {
    --text-font-weight: 700;
    --text-font-size: 16px;
    --text-line-height: 24px;
  }

  @container rsc-app (min-width: 736px) {
    :host {
      --text-font-size: 18px;
    }
  }
`);

/*
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
*/

export {
  componentSheet,
  displayLargeSheet,
  titleLargeSheet,
  titleMediumSheet,
  bodyLargeSheet,
  labelLargeSheet,
  labelMediumSheet,
};
