import Jatekter from "../Jatekter.js"


const TESZTLISTA = [

    {vart: "X",
    nev:"X nyert viszintesen",
    lista:[0,3,1,4,2]   
    },

    {vart: "X",
    nev:"X nyert függőlegesen",
    lista:[0,1,3,4,6]   
        },

    {vart: "X",
    nev:"X nyert átlósan",
    lista:[0,1,4,3,8]   
        },


    {vart: "O",
    nev:"O nyert viszintesen",
    lista:[3,0,4,1,7,2]   
    },

    {vart: "O",
    nev:"O nyert függőlegesen",
    lista:[1,0,4,3,5,6]   
        },
    {vart: "O",
    nev:"O nyert átlósan",
    lista:[1,0,3,4,5,8]   
        },
    
    {vart: "-",
    nev:"Nincs még nyertes",
    lista:[0,1]   
        },

    {vart: "-",
        nev:"Döntetlen!",
        lista:[0,1,2,3,5,4,6,8,7]   
            },
    {vart: "-",
        nev:"Üres",
        lista:[]   
            },
    
   

    




]






function tesztAutomatizalt(){
    const szElem=document.createElement("div");
    for (let index = 0; index < TESZTLISTA.length; index++) {
        const JATEKTER = new Jatekter(szElem);
        for (let j = 0; j < (TESZTLISTA[index].lista).length; j++) {
            window.dispatchEvent(new CustomEvent("kivalaszt", {detail : TESZTLISTA[index].lista[j]}))
        }
        console.assert(TESZTLISTA[index].vart === JATEKTER.gyozelemEllenorzes(), `várt: ${TESZTLISTA[index].vart}, kapott:${JATEKTER.gyozelemEllenorzes()} || elbukott teszteset: ${TESZTLISTA[index].nev}`);
        
    }



}


function tesztGyozelemEllenorzes_vizszintesenNyerX(){
    const szElem=document.createElement("div");
    const JATEKTER = new Jatekter(szElem);
    window.dispatchEvent(new CustomEvent("kivalaszt", {detail : 0}));
    window.dispatchEvent(new CustomEvent("kivalaszt", {detail : 3}));
    window.dispatchEvent(new CustomEvent("kivalaszt", {detail : 1}));
    window.dispatchEvent(new CustomEvent("kivalaszt", {detail : 4}));
    window.dispatchEvent(new CustomEvent("kivalaszt", {detail : 2}));
    let vart = "X";
    let kapott = JATEKTER.gyozelemEllenorzes();
    console.assert(vart === kapott, `várt: ${vart}, kapott:${kapott} elbukott a vízszintes`);
    console.log("Vízszintesen nyer")

}

tesztAutomatizalt()
