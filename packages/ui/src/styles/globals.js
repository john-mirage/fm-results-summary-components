const globalSheet = new CSSStyleSheet();

globalSheet.replaceSync(`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  :host {
    display: block;
  }
`);

export default globalSheet;
