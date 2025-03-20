import Jatekter from "./Jatekter.js";
import Info from "./Info.js";

let JatekterElem = document.getElementsByClassName("jatekter")[0];
new Jatekter(JatekterElem);

let InfoELem = document.querySelector("body");
new Info(InfoELem);