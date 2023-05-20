const componentTemplate = document.createElement("template");

componentTemplate.innerHTML = `
  <div class="section section--left">
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"></svg>
    <p class="name></p>
  </div>
  <div class="section section--right">
    <p class="value"></p>
    <p class="max-value">/ 100</p>
  </div>
`;

export default componentTemplate;
