const fontSheet = new CSSStyleSheet();

fontSheet.replaceSync(`
  @font-face {
    font-display: swap;
    font-family: "Hanken Grotesk";
    font-style: normal;
    font-weight: 500;
    src: url("@fonts/medium/hanken-grotesk-v5-latin-500.woff2") format("woff2"),
         url("@fonts/medium/hanken-grotesk-v5-latin-500.woff") format("woff");
  }

  /* hanken-grotesk-700 - latin */
  @font-face {
    font-display: swap;
    font-family: "Hanken Grotesk";
    font-style: normal;
    font-weight: 700;
    src: url("@fonts/bold/hanken-grotesk-v5-latin-700.woff2") format("woff2"),
         url("@fonts/bold/hanken-grotesk-v5-latin-700.woff") format("woff");
  }

  /* hanken-grotesk-800 - latin */
  @font-face {
    font-display: swap;
    font-family: "Hanken Grotesk";
    font-style: normal;
    font-weight: 800;
    src: url("@fonts/extra-bold/hanken-grotesk-v5-latin-800.woff2") format("woff2"),
         url("@fonts/extra-bold/hanken-grotesk-v5-latin-800.woff") format("woff");
  }

  :host {
    font-family:
      "Hanken Grotesk",
      ui-sans-serif,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      "Helvetica Neue",
      Arial,
      "Noto Sans",
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji";
  }
`);

export default fontSheet;
