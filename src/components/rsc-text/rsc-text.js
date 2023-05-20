import {
  bodyLargeSheet,
  componentSheet,
  displayLargeSheet,
  labelLargeSheet,
  labelMediumSheet,
  titleLargeSheet,
  titleMediumSheet,
} from "./rsc-text.style";
import componentTemplate from "./rsc-text.template";

class RscText extends HTMLElement {
  #hasBeenMountedOnce = false;

  static get observedAttributes() {
    return ["variant"];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(componentTemplate.content.cloneNode(true));
  }

  get variant() {
    return this.getAttribute("variant");
  }

  set variant(newVariant) {
    if (typeof newVariant === "string") {
      this.setAttribute("variant", newVariant);
    } else {
      this.removeAttribute("variant");
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

  connectedCallback() {
    if (!this.#hasBeenMountedOnce) {
      this.#upgradeProperty("variant");
      this.#hasBeenMountedOnce = true;
    }
  }

  #handleVariant(newVariant) {
    switch (newVariant) {
      case "display-large": {
        this.shadowRoot.adoptedStyleSheets = [
          componentSheet,
          displayLargeSheet,
        ];
        break;
      }
      case "title-large": {
        this.shadowRoot.adoptedStyleSheets = [componentSheet, titleLargeSheet];
        break;
      }
      case "title-medium": {
        this.shadowRoot.adoptedStyleSheets = [componentSheet, titleMediumSheet];
        break;
      }
      case "body-large": {
        this.shadowRoot.adoptedStyleSheets = [componentSheet, bodyLargeSheet];
        break;
      }
      case "label-large": {
        this.shadowRoot.adoptedStyleSheets = [componentSheet, labelLargeSheet];
        break;
      }
      case "label-medium": {
        this.shadowRoot.adoptedStyleSheets = [componentSheet, labelMediumSheet];
        break;
      }
      default: {
        this.shadowRoot.adoptedStyleSheets = [componentSheet];
      }
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      switch (name) {
        case "variant": {
          this.#handleVariant(newValue);
          break;
        }
      }
    }
  }
}

customElements.define("rsc-text", RscText);

export default RscText;
