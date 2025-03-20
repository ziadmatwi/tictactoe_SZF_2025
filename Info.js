export default class Info {
    constructor(szElem){
        this.szElem = szElem;
    }

    megjelenit(jatekos){
        this.szElem.innerHTML = jatekos + "következik";
    }
}