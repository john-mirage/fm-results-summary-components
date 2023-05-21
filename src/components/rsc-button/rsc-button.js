import componentTemplate from "./rsc-button.template";
import componentSheet from "./rsc-button.style";

class RscButton extends HTMLElement {
  #hasBeenMountedOnce = false;
  #buttonElement;

  static get observedAttributes() {
    return ["disabled"];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(componentTemplate.content.cloneNode(true));
    this.shadowRoot.adoptedStyleSheets = [componentSheet];
    this.#buttonElement = shadowRoot.querySelector("button");
  }

  get disabled() {
    return this.hasAttribute("disabled");
  }

  set disabled(newDisabled) {
    if (newDisabled) {
      this.setAttribute("disabled", "");
    } else {
      this.removeAttribute("disabled");
    }
  }

  #upgradeProperty(propertyName) {
    if (typeof propertyName === "string") {
      if (this.hasOwnProperty(propertyName)) {
        let value = this[propertyName];
        delete this[propertyName];
        this[propertyName] = value;
      }
    } else {
      throw TypeError("The property name is not a string");
    }
  }

  #handleDisabledState(isDisabled) {
    if (isDisabled) {
      this.#buttonElement.setAttribute("disabled", "");
    } else {
      this.#buttonElement.removeAttribute("disabled");
    }
  }

  connectedCallback() {
    if (!this.#hasBeenMountedOnce) {
      this.#upgradeProperty("disabled");
      this.#hasBeenMountedOnce = true;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      switch (name) {
        case "disabled": {
          this.#handleDisabledState(typeof newValue === "string");
          break;
        }
      }
    }
  }
}

customElements.define("rsc-button", RscButton);

export default RscButton;
