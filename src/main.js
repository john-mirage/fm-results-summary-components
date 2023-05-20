import "./main.css";
import data from "@data/data.json";
import "@components/fm-results-summary";

const fmResultsSummary = document.querySelector("fm-results-summary");
if (fmResultsSummary) {
  setTimeout(() => (fmResultsSummary.data = data), 3000);
}
