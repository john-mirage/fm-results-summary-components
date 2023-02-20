class WebCardScore extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById("template-web-card-score");
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
  }
}

export default WebCardScore;