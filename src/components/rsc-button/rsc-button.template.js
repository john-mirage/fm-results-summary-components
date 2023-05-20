const componentTemplate = document.createElement("template");

componentTemplate.innerHTML = `
  <button class="button card__button" id="button" disabled>
    <span class="button__overlay"></span>
    <span class="button__label text text--label-large text--on-secondary">Continue</span>
  </button>
`;

export default componentTemplate;
