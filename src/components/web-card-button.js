class WebCardButton extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById("template-web-card-button");
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
  }
}

export default WebCardButton;