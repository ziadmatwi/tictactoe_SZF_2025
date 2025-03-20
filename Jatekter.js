import Elem from "./Elem.js";
import Info from "./Info.js";

export default class Jatekter{
    #lista = ["","","","","","","","",""];
    #lepes=0;

    constructor(szElem){
        let infoPanel = document.querySelector("aside")
        this.info = new Info(infoPanel)
        this.info.megjelenit("X")
        this.szElem = szElem;
        this.megjelenit();
        this.esemenykezelok();
    }

    megjelenit(){
        for (let index = 0; index < this.#lista.length; index++) {
            const element = this.#lista[index];
            const KISELEM = new Elem(element, index, this.szElem);
        }
    }

    esemenykezelok(){
        window.addEventListener("kivalaszt", (event)=>{
            console.log(event.detail)
            if(this.#lepes%2 === 0){
                this.#lista[event.detail]="X";
                this.info.megjelenit("O")
            }else{
                this.#lista[event.detail]="O";
                this.info.megjelenit("X")
            }
            this.#lepes++;
            this.szElem.innerHTML="";
            this.megjelenit();
        }) 
    }
}