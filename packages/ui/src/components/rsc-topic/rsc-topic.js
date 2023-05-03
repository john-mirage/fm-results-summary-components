class RscTopic extends HTMLElement {
  #hasBeenCalledOnce = false;

  static get observedAttributes() {
    return ["name"];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(componentTemplate.content.cloneNode(true));
    shadowRoot.adoptedStyleSheets = [globalSheet, colorSheet, fontSheet, componentSheet];
  }

  get name() {
    return this.getAttribute("name");
  }

  set name(newName) {
    if (typeof newName === "string") {
      this.setAttribute("name", newName);
    } else {
      this.removeAttribute("name");
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
    if (!this.#hasBeenCalledOnce) {
      this.#upgradeProperty("name");
      this.#hasBeenCalledOnce = true;
    }
  }

  #handleName(newName) {
    switch (newName) {
      case "reaction": {
        this.#svgElement.innerHTML = `
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.25"
            d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"
          />
        `;
        break;
      }
      case "memory": {
        this.#svgElement.innerHTML = `
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.25"
            d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"
          />
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.25"
            d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"
          />
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.25"
            d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"
          />
        `;
        break;
      }
      case "verbal": {
        this.#svgElement.innerHTML = `
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.25"
            d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"
          />
        `;
        break;
      }
      case "visual": {
        this.#svgElement.innerHTML = `
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.25"
            d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"
          />
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.25"
            d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"
          />
        `;
        break;
      }
      default: {
        this.#svgElement.replaceChildren();
        console.warn("The icon name is not valid");
      }
    }
  }

  attributeChangedCallback(name, oldvalue, newValue) {
    if (oldvalue !== newValue) {
      switch (name) {
        case "name": {
          this.#handleName(newValue);
          break;
        }
      }
    }
  }
}

export default RscTopic;
