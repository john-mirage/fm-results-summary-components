const componentTemplate = document.createElement("template");

componentTemplate.innerHTML = `
  <slot class="text"></slot>
`;

export default componentTemplate;
