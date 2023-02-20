class WebCardScore extends HTMLElement {
  #hasBeenMountedOnce = false;
  #scoreElement;

  static get observedAttributes() {
    return ["score"];
  }

  constructor() {
    super();
    const template = document.getElementById("template-web-card-score");
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
    this.#scoreElement = shadowRoot.querySelector('[data-js="score"]');
  }

  get score() {
    return this.getAttribute("score") ?? undefined;
  }

  set score(newScore) {
    if (typeof newScore === "string") {
      this.setAttribute("score", newScore);
    } else {
      this.removeAttribute("score");
    }
  }

  #handleScore(newScore) {
    this.#scoreElement.textContent = typeof newScore === "string" ? newScore : "";
  }

  #upgradeProperty(prop) {
    if (this.hasOwnProperty(prop)) {
      let value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  }

  connectedCallback() {
    if (!this.#hasBeenMountedOnce) {
      this.#upgradeProperty("score");
      this.#hasBeenMountedOnce = true;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      switch (name) {
        case "score": {
          this.#handleScore(newValue);
          break;
        }
        default: {
          throw new Error(`The ${name} attribute is not valid`);
        }
      }
    }
  }
}

export default WebCardScore;