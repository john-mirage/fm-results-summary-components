const componentTemplate = document.createElement("template");

componentTemplate.innerHTML = `
  <button class="button" disabled>
    <span class="button__overlay"></span>
    <span class="button__label">Continue</span>
  </button>
`;

export default componentTemplate;
