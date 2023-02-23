class FmResultsSummary extends HTMLElement {
  #hasBeenMountedOnce = false;
  #iconMap = new Map();
  #data;
  #categoryElements;
  #globalScoreElement;
  #performanceNameElement;
  #performanceValueElement;
  #buttonElement;

  constructor() {
    super();
    const template = document.getElementById("template-fm-results-summary");
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(template.content.cloneNode(true));
    this.#categoryElements = this.shadowRoot.querySelectorAll('[data-js="category"]');
    this.#globalScoreElement = this.shadowRoot.getElementById("global-score");
    this.#performanceNameElement = this.shadowRoot.getElementById("performance-name");
    this.#performanceValueElement = this.shadowRoot.getElementById("performance-value");
    this.#buttonElement = this.shadowRoot.getElementById("button");
  }

  #getIcon(iconName) {
    if (typeof iconName === "string") {
      if (!this.#iconMap.has(iconName)) {
        const template = this.shadowRoot.getElementById(`template-category-${iconName}-icon`);
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

  #resultIsValid(result) {
    return (
      typeof result === "number" &&
      result >= 0 &&
      result <= 100
    );
  }

  #resultsAreValid(results) {
    return (
      Array.isArray(results) &&
      results.every(this.#resultIsValid)
    );
  }

  #dataAreValid(data) {
    return (
      data.hasOwnProperty("categories") &&
      data.hasOwnProperty("results") &&
      this.#categoriesAreValid(data.categories) &&
      this.#resultsAreValid(data.results)
    );
  }

  #handleCategories() {
    if (this.data) {
      this.#categoryElements.forEach((categoryElement, categoryIndex) => {
        const iconContainerElement = categoryElement.querySelector('[data-js="category-icon-container"]');
        const nameElement = categoryElement.querySelector('[data-js="category-name"]');
        const scoreElement = categoryElement.querySelector('[data-js="category-score"]');
        const iconElement = this.#getIcon(this.data.categories[categoryIndex].icon);
        iconContainerElement.replaceChildren(iconElement);
        nameElement.textContent = this.data.categories[categoryIndex].name;
        scoreElement.textContent = String(this.data.categories[categoryIndex].score);
        categoryElement.dataset.color = this.data.categories[categoryIndex].color;
      });
    } else {
      this.#categoryElements.forEach((categoryElement) => {
        const iconContainerElement = categoryElement.querySelector('[data-js="category-icon-container"]');
        const nameElement = categoryElement.querySelector('[data-js="category-name"]');
        const scoreElement = categoryElement.querySelector('[data-js="category-score"]');
        iconContainerElement.replaceChildren();
        nameElement.textContent = "";
        scoreElement.textContent = "";
        categoryElement.removeAttribute("data-color");
      });
    }
  }
  
  #getPerformanceName(score) {
    if (typeof score === "number") {
      if (score <= 50) {
        return "Not bad";
      } else if (score <= 80) {
        return "Great";
      } else if (score <= 100) {
        return "Impressive";
      } else {
        throw new Error("The score cannot be higher than 100");
      }
    } else {
      throw new TypeError("The score is not a number");
    }
  }

  #handlePerformance(score) {
    if (this.data && typeof score === "number") {
      const numberOfPeople = this.data.results.length;
      const numberOfPeopleBelowScore = this.data.results.filter((result) => result < score).length;
      const percentage = Math.round((numberOfPeopleBelowScore * 100) / numberOfPeople);
      this.#performanceNameElement.textContent = this.#getPerformanceName(percentage);
      this.#performanceValueElement.textContent = `Your performance exceed ${String(percentage)}% of the people conducting the test here!`;
    } else {
      this.#performanceNameElement.textContent = "";
      this.#performanceValueElement.textContent = "";
    }
  }

  #handleScore() {
    if (this.data) {
      const sum = this.data.categories.reduce((acc, cur) => acc + cur.score, 0);
      const average = Math.round(sum / this.data.categories.length);
      this.#globalScoreElement.textContent = String(average);
      return average;
    } else {
      this.#globalScoreElement.textContent = "";
      return undefined;
    }
  }

  get data() {
    return this.#data;
  }

  set data(newData) {
    if (this.#dataAreValid(newData)) {
      this.#data = newData;
      this.#handleCategories();
      const score = this.#handleScore();
      this.#handlePerformance(score);
      this.#buttonElement.removeAttribute("disabled");
    } else {
      this.#data = undefined;
      this.#handleCategories();
      const score = this.#handleScore();
      this.#handlePerformance(score);
      this.#buttonElement.setAttribute("disabled", "");
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
      this.#upgradeProperty("data");
      this.#hasBeenMountedOnce = true;
    }
  }
}

export default FmResultsSummary;