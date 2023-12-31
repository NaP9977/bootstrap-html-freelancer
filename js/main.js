/*l’esercitazione di oggi, valida come test tecnico, si chiama Bootstrap Freelancer
Il nome del repo è bootstrap-js-freelancer
Continuiamo l’esercizio Bootstrap Freelancer e aggiungiamo la componente js di interazione con l’utente.
Quando l’utente fa click sul bottone “send” del form, il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste.
Il prezzo orario per una commissione varia in questo modo:
- se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.5€ l’ora
- se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.3€ l’ora
- se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.6€
L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti:
- YHDNU32
- JANJC63
- PWKCN25
- SJDPO96
- POCIE24
Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale. 
Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido e 
il prezzo finale viene calcolato senza applicare sconti.
Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” 
(con 2 decimali e il simbolo dell’euro) in un apposito tag HTML appena sotto il bottone send.
Alcuni consigli
- Ricordatevi che se non state bene attenti, Javascript vi fa le magie con i tipi :faccia_leggermente_sorridente:
- Ricordatevi che il form ha un comportamento “strano” quando fate click sul bottone Send che è di tipo submit (type=submit).
Bonus:
Quando l’utente clicca sul pulsante “Send”, se il codice promozionale inserito non è valido, 
 facciamo diventare quest’ultimo di colore rosso.
Se il codice inserito è valido, dopo aver calcolato il prezzo scontato, 
eliminare quel codice dall’elenco dei codici sconto disponibili, in modo che non sia più utilizzabile. */
 
let button = document.getElementById("button");

let discountcodes = ["YHDNU32","JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]


button.addEventListener("click", function(event) {
  event.preventDefault();
  let prezzo = validateform();
  document.getElementById("form-options").innerHTML = "Il prezzo della commissione è " + prezzo;
});

function validateform() {
  let typeofwork = document.getElementById("formW").value;
  let ora = parseInt(document.getElementById("hours").value);
  let discount = document.getElementById("discount").value
 
  let option1 = document.getElementById("option1").value;
  let option2 = document.getElementById("option2").value;
  let option3 = document.getElementById("option3").value;

  if (typeofwork == option1) {
    return 20.5 * ora;
  } else if (typeofwork == option2) {
    return 15.3 * ora;
  } else {
    return 33.6 * ora;
  }

}


  for(i=0; i < discountcodes.lenght; i++){
    if(discountcodes[i] == discount){
        return prezzo = prezzo - 0.25 * prezzo ;
    }
    else{
    console.log("Codice non valido");
    }
return prezzo;
}





