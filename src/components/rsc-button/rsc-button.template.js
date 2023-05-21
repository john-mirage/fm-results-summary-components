const componentTemplate = document.createElement("template");

componentTemplate.innerHTML = `
  <button>
    <span></span>
    <slot></slot>
  </button>
`;

export default componentTemplate;
