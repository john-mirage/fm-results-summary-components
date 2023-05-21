import componentSheet from "./rsc-text.style";
import componentTemplate from "./rsc-text.template";

class RscText extends HTMLElement {
  #hasBeenMountedOnce = false;
  #slotElement;
  #currentVariantClassName;
  #currentColorClassName;

  static get observedAttributes() {
    return ["variant", "color"];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(componentTemplate.content.cloneNode(true));
    this.shadowRoot.adoptedStyleSheets = [componentSheet];
    this.#slotElement = shadowRoot.querySelector("slot");
  }

  get variant() {
    return this.getAttribute("variant");
  }

  get color() {
    return this.getAttribute("color");
  }

  set variant(newVariant) {
    if (typeof newVariant === "string") {
      this.setAttribute("variant", newVariant);
    } else {
      this.removeAttribute("variant");
    }
  }

  set color(newColor) {
    if (typeof newColor === "string") {
      this.setAttribute("color", newColor);
    } else {
      this.removeAttribute("color");
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
      this.#upgradeProperty("color");
      this.#hasBeenMountedOnce = true;
    }
  }

  #handleVariantClassName(className) {
    if (typeof this.#currentVariantClassName === "string") {
      this.#slotElement.classList.replace(
        this.#currentVariantClassName,
        className
      );
    } else {
      this.#slotElement.classList.add(className);
    }
  }

  #handleColorClassName(className) {
    if (typeof this.#currentColorClassName === "string") {
      this.#slotElement.classList.replace(
        this.#currentColorClassName,
        className
      );
    } else {
      this.#slotElement.classList.add(className);
    }
  }

  #handleVariant(newVariant) {
    switch (newVariant) {
      case "display-large": {
        this.#handleVariantClassName("text--display-large");
        this.#currentVariantClassName = "text--display-large";
        break;
      }
      case "title-large": {
        this.#handleVariantClassName("text--title-large");
        this.#currentVariantClassName = "text--title-large";
        break;
      }
      case "title-medium": {
        this.#handleVariantClassName("text--title-medium");
        this.#currentVariantClassName = "text--title-medium";
        break;
      }
      case "body-large": {
        this.#handleVariantClassName("text--body-large");
        this.#currentVariantClassName = "text--body-large";
        break;
      }
      case "label-large": {
        this.#handleVariantClassName("text--label-large");
        this.#currentVariantClassName = "text--label-large";
        break;
      }
      case "label-medium": {
        this.#handleVariantClassName("text--label-medium");
        this.#currentVariantClassName = "text--label-medium";
        break;
      }
      default: {
        if (typeof this.#currentVariantClassName === "string") {
          this.#slotElement.classList.remove(this.#currentVariantClassName);
        }
      }
    }
  }

  #handleColor(newColor) {
    switch (newColor) {
      case "on-primary": {
        this.#handleColorClassName("text--on-primary");
        this.#currentColorClassName = "text--on-primary";
        break;
      }
      case "on-primary-variant": {
        this.#handleColorClassName("text--on-primary-variant");
        this.#currentColorClassName = "text--on-primary-variant";
        break;
      }
      case "on-surface": {
        this.#handleColorClassName("text--on-surface");
        this.#currentColorClassName = "text--on-surface";
        break;
      }
      case "on-surface-variant": {
        this.#handleColorClassName("text--surface-variant");
        this.#currentColorClassName = "text--surface-variant";
        break;
      }
      case "on-secondary": {
        this.#handleColorClassName("text--on-secondary");
        this.#currentColorClassName = "text--on-secondary";
        break;
      }
      default: {
        if (typeof this.#currentColorClassName === "string") {
          this.#slotElement.classList.remove(this.#currentColorClassName);
        }
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
        case "color": {
          this.#handleColor(newValue);
          break;
        }
      }
    }
  }
}

customElements.define("rsc-text", RscText);

export default RscText;
