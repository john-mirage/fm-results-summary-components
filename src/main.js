import "./main.css";
import data from "@data/data.json";
import "@components/rsc-app";
import "@components/rsc-text";

const rscApp = document.querySelector("rsc-app");
const rscText = document.querySelector("rsc-text");

if (rscApp) {
  setTimeout(() => {
    rscApp.data = data;
    rscText.variant = "label-large";
  }, 3000);
}
