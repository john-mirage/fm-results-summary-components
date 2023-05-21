import "./main.css";
import data from "@data/data.json";
import "@components/rsc-app";
import "@components/rsc-button";
import "@components/rsc-text";

const rscApp = document.querySelector("rsc-app");

if (rscApp) {
  setTimeout(() => {
    rscApp.data = data;
  }, 3000);
}
