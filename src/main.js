import "./main.css";
import data from "@data/data.json";
import "@components/rsc-app";

const rscApp = document.querySelector("rsc-app");

if (rscApp) {
  setTimeout(() => {
    rscApp.data = data;
  }, 3000);
}
