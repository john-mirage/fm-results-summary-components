const componentTemplate = document.createElement("template");

componentTemplate.innerHTML = `
  <div class="section section--result">
    <h1 class="text text--title-medium text--on-primary-variant card__title">Your result</h1>
    <rsc-score></rsc-score>
    <rsc-performance></rsc-performance>
  </div>
  <div class="section section--summary">
    <h2 class="title">Summary</h2>
    <ul class="topics"></ul>
    <rsc-button></rsc-button>
  </div>
`;

export default componentTemplate;
