class WebCard extends HTMLElement {
  #hasBeenMountedOnce = false;
  #categories = [];
  #webCardScore;
  #webCardCategories;

  constructor() {
    super();
    const template = document.getElementById("template-web-card");
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.append(template.content.cloneNode(true));
    this.#webCardScore = shadowRoot.querySelector("web-card-score");
    this.#webCardCategories = shadowRoot.querySelectorAll("web-card-category");
  }

  #categoryIsValid(category) {
    return (
      typeof category === "object" &&
      Object.getOwnPropertyNames(category).length === 4 &&
      typeof category.name === "string" &&
      typeof category.score === "number" &&
      typeof category.icon === "string" &&
      typeof category.color === "string"
    );
  }

  #categoriesAreValid(categories) {
    return (
      Array.isArray(categories) &&
      categories.length === 4 &&
      categories.every(this.#categoryIsValid)
    );
  }

  #handleCategories(newCategories) {
    if (newCategories) {
      this.#webCardCategories.forEach((webCardCategory, index) => {
        webCardCategory.name = newCategories[index].name;
        webCardCategory.score = String(newCategories[index].score);
        webCardCategory.icon = newCategories[index].icon;
        webCardCategory.color = newCategories[index].color;
      });
    } else {
      this.#webCardCategories.forEach((webCardCategory) => {
        webCardCategory.name = undefined;
        webCardCategory.score = undefined;
        webCardCategory.icon = undefined;
        webCardCategory.color = undefined;
      });
    }
  }

  #handleScore(newCategories) {
    if (newCategories) {
      const sum = newCategories.reduce((acc, cur) => acc + cur.score, 0);
      const average = Math.round(sum / newCategories.length);
      this.#webCardScore.score = String(average);
    } else {
      this.#webCardScore.score = undefined;
    }
  }

  get categories() {
    return this.#categories;
  }

  set categories(newCategories) {
    if (this.#categoriesAreValid(newCategories)) {
      this.#handleCategories(newCategories);
      this.#handleScore(newCategories);
    } else {
      this.#handleCategories();
      this.#handleScore();
    }
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
      this.#upgradeProperty("categories");
      this.#hasBeenMountedOnce = true;
    }
  }
}

export default WebCard;