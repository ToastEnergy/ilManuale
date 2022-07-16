let rule = 0;
let removed = false;

const rules = [
    {
        title: "Il Manuale",
        video: "assets/hocagato.webm",
        description:
            "Questo manuale contiene le tecnice essenziali per giocare a Fortnite.",
    },
    {
        title: "Atterraggio",
        video: "assets/regole/Regola1.webm",
        description:
            "L'atterraggio è una parte fondamentale della partita. Mai atterrare nel punto indicato dai tuoi compagni di squadra, atterra ad almeno 1km da esso.",
    },
    {
        title: "Loot",
        video: "assets/regole/Regola2.webm",
        description:
            "Per portare la tua squadra alla vittoria è necessario del loot di prima classe. " +
            "Le casse non vanno assolutamente aperte in quanto inutili, l'unico loot utilizzabile su Fortnite è quello verde raccolto da terra " +
            "(le armi grigie e rarità superiori sono troppo forti)",
    },
    {
        title: "Attrezzi",
        video: "assets/regole/Regola3.webm",
        description:
            "Per la tua attività di meccanico è necessario raccogliere diversi attrezzi, il tuo inventario dovrà essere composto per la maggior parte da acchiappamucche, pneumatici da fuoristrada, Taniche di benzina e torce da riparazioni.",
    },
    {
        title: "Automobili",
        video: "assets/regole/Regola4.webm",
        description:
            "Per poter giocare è necessario avere una vasta flotta di automibili, trovane il più possibile e prenditene cura con interventi di manutenzione ordinaria (benzina, riparazione) e potenziamenti vari.",
    },
    {
        title: "La Tanica",
        video: "assets/regole/Regola5.webm",
        description:
            "La Tanica è l'elemento più importante del gioco, se trovata in giro va sempre presa a discapito di altri oggetti più forti (come le armi verdi).",
    },
    {
        title: "La Ferrari",
        video: "assets/regole/Regola6.webm",
        description:
            "Ogni volta che trovi un'auto rossa, è necessario che narri a tutta la tua squadra come una volta fosse frutto di una vera collaborazione con Ferrari, " +
            "i tuoi compagni ne saranno annoiati dopo la seconda volta e non ti aiuteranno più nei fight, proprio quello che vuoi.",
    },
    {
        title: "Sfoggia le tue abilità da piromane",
        video: "assets/regole/Regola7.webm",
        description:
            "Mentre i tuoi compagni provano a rubarti il compito di meccanico, dai fuoco a tutta la loro attrezzatura.",
    },
    {
        title: "Ferma tutte le amicizie",
        video: "assets/regole/Regola8.webm",
        description:
            "I tuoi amici provano a farsi amici gli npc della mappa per sostituirti? Falli litigare e raccogli il loro loot.",
    },
    {
        title: "Non è mai il momento sbagliato per regolare le impostazioni",
        video: "assets/regole/Regola9.webm",
        description:
            "Non è mai il momento sbagliato per modificare i comandi o cambiare la risoluzione del gioco.",
    },
    {
        title: "Nessuna macchina verrà lasciata indietro",
        video: "assets/regole/Regola10.webm",
        description:
            "Nessuna macchina verrà lasciata indietro, anche in caso di fuoco nemico la priorità numero 1 deve essere riparare le macchine rotte.",
    },
    {
        title: "Lo scudo è nemico",
        video: "assets/regole/Regola11.webm",
        description:
            "Mai lasciarsi andare a qualche sorso di scudo, e se qualcuno prova a forzarvi all'assunzione di esso tramite splash, scappate.",
    },
];

const updatePage = (action = null) => {
    if (action) {
        action === "forward" ? rule++ : rule--;
    }

    if (rule >= rules.length) rule = 1;
    if (rule <= 0) rule = rules.length - 1;

    updateContent();
};

const updateContent = () => {
    const title = document.getElementById("title");
    const body = document.getElementById("body");
    const currentPage = document.getElementById("currentPage");
    const video = document.getElementById("video");
    if (!removed) {
        document.getElementById("rules").remove();
        document.getElementById("b2").remove();
        removed = true;
    }
    currentPage.innerText = rule;
    title.innerText = rules[rule].title;
    video.src = rules[rule].video;
    video.volume = 0;
    body.innerText = rules[rule].description;
};

window.addEventListener("load", () => {
    const url = new URL(window.location.href);
    const ruleParam = url.searchParams.get("r");
    ruleInt = parseInt(ruleParam);
    if (ruleInt) {
        rule = ruleInt;
        updateContent();
    }
});
