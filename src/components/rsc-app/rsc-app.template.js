const componentTemplate = document.createElement("template");

componentTemplate.innerHTML = `
  <div class="card">
    <div class="card__section card__section--result">
      <h1 class="text text--title-medium text--on-primary-variant card__title">Your result</h1>
      <div class="score">
        <p class="score__value text text--display-large text--on-primary" id="global-score"></p>
        <p class="score__max-value text text--label-medium text--on-primary-variant">of 100</p>
      </div>
      <div class="performance">
        <h2 class="performance__name text text--title-large text--on-primary" id="performance-name"></h2>
        <p class="performance__value text text--body-large text--on-primary-variant" id="performance-value"></p>
      </div>
    </div>
    <div class="card__section card__section--summary">
      <h2 class="text text--title-medium text--on-surface card__title">Summary</h2>
      <ul class="card__list">
        <li class="category" data-js="category">
          <div class="category__section category__section--left">
            <div class="category__icon-container" data-js="category-icon-container"></div>
            <p class="category__name text text--body-large text--on-category" data-js="category-name"></p>
          </div>
          <div class="category__section category__section--right">
            <p class="category__score-value text text--label-medium text--on-surface" data-js="category-score"></p>
            <p class="category__score-max-value text text--label-medium text--on-surface-variant">/ 100</p>
          </div>
        </li>
        <li class="category" data-js="category">
          <div class="category__section category__section--left">
            <div class="category__icon-container" data-js="category-icon-container"></div>
            <p class="category__name text text--body-large text--on-category" data-js="category-name"></p>
          </div>
          <div class="category__section category__section--right">
            <p class="category__score-value text text--label-medium text--on-surface" data-js="category-score"></p>
            <p class="category__score-max-value text text--label-medium text--on-surface-variant">/ 100</p>
          </div>
        </li>
        <li class="category" data-js="category">
          <div class="category__section category__section--left">
            <div class="category__icon-container" data-js="category-icon-container"></div>
            <p class="category__name text text--body-large text--on-category" data-js="category-name"></p>
          </div>
          <div class="category__section category__section--right">
            <p class="category__score-value text text--label-medium text--on-surface" data-js="category-score"></p>
            <p class="category__score-max-value text text--label-medium text--on-surface-variant">/ 100</p>
          </div>
        </li>
        <li class="category" data-js="category">
          <div class="category__section category__section--left">
            <div class="category__icon-container" data-js="category-icon-container"></div>
            <p class="category__name text text--body-large text--on-category" data-js="category-name"></p>
          </div>
          <div class="category__section category__section--right">
            <p class="category__score-value text text--label-medium text--on-surface" data-js="category-score"></p>
            <p class="category__score-max-value text text--label-medium text--on-surface-variant">/ 100</p>
          </div>
        </li>
      </ul>
      <rsc-button disabled class="card__button">
        <rsc-text variant="label-large" color="on-secondary">Continue</rsc-text>
      </rsc-button>
    </div>
  </div>
  <template id="template-category-reaction-icon">
    <svg class="category__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"/>
    </svg>
  </template>
  <template id="template-category-memory-icon">
    <svg class="category__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"/>
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"/>
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"/>
    </svg>
  </template>
  <template id="template-category-verbal-icon">
    <svg class="category__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"/>
    </svg>
  </template>
  <template id="template-category-visual-icon">
    <svg class="category__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"/>
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"/>
    </svg>
  </template>
`;

export default componentTemplate;
