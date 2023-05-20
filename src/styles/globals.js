const globalSheet = new CSSStyleSheet();

globalSheet.replaceSync(`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`);

export default globalSheet;
