import Elem from "./Elem.js";
import Info from "./Info.js";

export default class Jatekter {
    #lista = ["", "", "", "", "", "", "", "", ""];
    #lepes = 0;

    constructor(szElem) {
        let infoPanel = document.querySelector("aside p")
        this.info = new Info(infoPanel)
        this.info.megjelenit("X")
        this.szElem = szElem;
        this.megjelenit();
        this.esemenykezelok();
    }
    setLista(lista) {
        this.#lista = lista
    }
    getLista() {
        return this.#lista
    }
    megjelenit() {
        for (let index = 0; index < this.#lista.length; index++) {
            const element = this.#lista[index];
            const KISELEM = new Elem(element, index, this.szElem);
        }
    }

    esemenykezelok() {
        window.addEventListener("kivalaszt", (event) => {

            if (this.#lepes % 2 === 0) {
                this.#lista[event.detail] = "X";
                this.info.megjelenit("O")
            } else {
                this.#lista[event.detail] = "O";
                this.info.megjelenit("X")
            }
            this.#lepes++;
            this.szElem.innerHTML = "";
            this.megjelenit();
            let gyoztes = this.gyozelemEllenorzes()
            //console.log(gyoztes)
            if (gyoztes != "-") {
                //console.log(`A győztes: ${gyoztes}`)
            }
        })
    }




    /* győzelem ellenőrzés */
    gyozelemEllenorzes() {
        let allapot = this.vizszintes_ell();
        allapot += this.fuggoleges_ell();
        allapot += this.atlo_ell();
        const ALLAPOT_TOMB = allapot.split("@");
        //   console.log(allapot);


        if (ALLAPOT_TOMB.indexOf("OOO") >= 0) {

            return "O";
        }
        if (ALLAPOT_TOMB.indexOf("XXX") >= 0) {
            return "X";
        }
        return "-";

    }

    vizszintes_ell() {
        let szoveg = "";
        for (let index = 1; index <= this.#lista.length; index++) {
            szoveg += this.#lista[index - 1];
            if (index % 3 === 0) {
                szoveg += "@";
            }
        }
        return szoveg;
    }

    fuggoleges_ell() {
        let szoveg = "";
        for (let index = 0; index < 3; index++) {
            for (let j = 0; j < 3 * 3; j += 3) {
                szoveg += this.#lista[index + j];
            }
            szoveg += "@";
        }
        return szoveg;
    }

    atlo_ell() {
        let szoveg = "";
        //   console.log(meret);
        // bal felső -> jobb alsó átló
        for (let index = 0; index < this.#lista.length; index += 3 + 1) {
            szoveg += this.#lista[index];
        }
        //jobb felső -> bal alsó átló
        szoveg += "@";
        for (
            let index = 3 - 1;
            index <= this.#lista.length - 3;
            index += 3 - 1
        ) {
            szoveg += this.#lista[index];
        }

        return szoveg
    }
}