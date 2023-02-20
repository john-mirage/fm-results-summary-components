import "./main.css";

import WebCard from "./components/web-card";
import WebCardCategory from "./components/web-card-category";
import WebCardButton from "./components/web-card-button";
import WebCardScore from "./components/web-card-score";

customElements.define("web-card", WebCard);
customElements.define("web-card-score", WebCardScore);
customElements.define("web-card-category", WebCardCategory);
customElements.define("web-card-button", WebCardButton);