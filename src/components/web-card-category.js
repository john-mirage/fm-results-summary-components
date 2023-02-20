class WebCardCategory extends HTMLElement {
  #hasBeenMountedOnce = false;
  #iconMap = new Map();
  #iconElement;
  #categoryElement;
  #scoreElement;

  static get observedAttributes() {
    return ["category", "score", "icon"];
  }

  constructor() {
    super();
    const template = document.getElementById("template-web-card-category");
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
    this.#iconElement = shadowRoot.querySelector('[data-js="icon"]');
    this.#categoryElement = shadowRoot.querySelector('[data-js="category"]');
    this.#scoreElement = shadowRoot.querySelector('[data-js="score"]');
  }

  get category() {
    return this.getAttribute("category") ?? undefined;
  }

  set category(newCategory) {
    if (typeof newCategory === "string") {
      this.setAttribute(newCategory);
    } else {
      this.removeAttribute("category");
    }
  }

  get score() {
    return this.getAttribute("score") ?? undefined;
  }

  set score(newScore) {
    if (typeof newScore === "string") {
      this.setAttribute(newScore);
    } else {
      this.removeAttribute("score");
    }
  }

  get icon() {
    return this.getAttribute("icon") ?? undefined;
  }

  set icon(newIcon) {
    if (typeof newIcon === "string") {
      this.setAttribute(newIcon);
    } else {
      this.removeAttribute("icon");
    }
  }

  #getIcon(iconName) {
    if (typeof iconName === "string") {
      if (!this.#iconMap.has(iconName)) {
        const template = document.getElementById(`template-icon-${iconName}`);
        if (template) {
          this.#iconMap.set(iconName, template.content.cloneNode(true));
        } else {
          throw new Error(`The icon template for ${iconName} do not exist`);
        }
      }
      return this.#iconMap.get(iconName);
    } else {
      throw new TypeError("The icon name is not a string");
    }
  }

  #handleCategory(newCategory) {
    this.#categoryElement.textContent = typeof newCategory === "string" ? newCategory : "";
  }

  #handleScore(newScore) {
    this.#scoreElement.textContent = typeof newScore === "string" ? newScore : "";
  }

  #handleIcon(newIcon) {
    this.#iconElement.replaceChildren(typeof newIcon === "string" ? this.#getIcon(newIcon) : undefined);
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
      this.#upgradeProperty("category");
      this.#upgradeProperty("score");
      this.#upgradeProperty("icon");
      this.#upgradeProperty("color");
      this.#hasBeenMountedOnce = true;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      switch (name) {
        case "category": {
          this.#handleCategory(newValue);
          break;
        }
        case "score": {
          this.#handleScore(newValue);
          break;
        }
        case "icon": {
          this.#handleIcon(newValue);
          break;
        }
        default: {
          throw new Error(`The ${name} attribute is not valid`);
        }
      }
    }
  }
}

export default WebCardCategory;