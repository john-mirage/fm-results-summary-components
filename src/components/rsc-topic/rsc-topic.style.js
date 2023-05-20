import pxToRem from "@utils/css";

const componentSheet = new CSSStyleSheet();

componentSheet.replaceSync(`
  :host {
    --topic-color-hue: 224;
    --topic-color-saturation: 30%;
    --topic-color-lightness: 27%;
    --topic-color: hsl(var(--topic-color-hue), var(--topic-color-saturation), var(--topic-color-lightness));
    --topic-background-color: hsla(var(--topic-color-hue), var(--topic-color-saturation), var(--topic-color-lightness), 5%);

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: ${pxToRem(56)};
    padding-left: ${pxToRem(16)};
    padding-right: ${pxToRem(16)};
    border-radius: ${pxToRem(12)};
    background-color: var(--topic-background-color);
    color: var(--topic-color);
  }

  :host([name="reaction"]) {
    --topic-color-hue: 0;
    --topic-color-saturation: 100%;
    --topic-color-lightness: 67%;
  }

  :host([name="memory"]) {
    --topic-color-hue: 40;
    --topic-color-saturation: 100%;
    --topic-color-lightness: 56%;
  }

  :host([name="verbal"]) {
    --topic-color-hue: 166;
    --topic-color-saturation: 100%;
    --topic-color-lightness: 36%;
  }

  :host([name="visual"]) {
    --topic-color-hue: 234;
    --topic-color-saturation: 85%;
    --topic-color-lightness: 45%;
  }

  .section {
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 0;
  }

  .section--left {
    flex: 1;
    margin-right: ${pxToRem(16)};
    justify-content: flex-start;
    gap: ${pxToRem(12)};
  }

  .section--right {
    flex: 0 0 auto;
    justify-content: flex-end;
    gap: ${pxToRem(8)};
  }

  .icon {
    flex: 0 0 auto;
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
  }

  .icon:empty {
    animation: var(--_skeleton-animation);
    background-color: var(--_skeleton-background-color);
    border-radius: 9999px;
  }

  .name {
    flex: 0 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .name:empty {
    animation: var(--_skeleton-animation);
    background-color: var(--_skeleton-background-color);
    width: 100%;
    height: var(--text-body-large-font-size);
    border-radius: 9999px;
  }

  .value {
    flex: 1;
  }

  .value:empty {
    display: inline-block;
    animation: var(--_skeleton-animation);
    background-color: var(--_skeleton-background-color);
    width: ${pxToRem(32)};
    height: var(--text-label-medium-font-size);
    border-radius: 9999px;
  }

  .max-value {
    flex: 0 0 auto;
  }
`);

export default componentSheet;
