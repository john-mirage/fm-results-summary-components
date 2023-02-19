class WebCardCategory extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById("template-web-card-category");
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
  }
}

export default WebCardCategory;