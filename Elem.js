export default class Elem{
    #adat;
    #index;
    constructor(adat, index, szElem){
        this.#adat = adat;
        this.#index = index;
        this.szElem = szElem;
        this.megjelenit();

        this.elem = document.querySelector(".elem:last-child");
        this.elem.addEventListener("click", ()=>{
            if(this.#adat === ""){
                const e = new CustomEvent("kivalaszt", {detail : this.#index});  
                window.dispatchEvent(e);
            }
        });
    }

    megjelenit(){
        let html = `<div class = "elem">
                        ${this.#adat}
                    </div>`;
        this.szElem.insertAdjacentHTML("beforeend", html);
    }
}