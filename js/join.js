document.getElementById("message").hidden = true

function recupererCV(event) {
    // Empêcher le comportement par défaut du formulaire
    event.preventDefault()

    //Récupération des données du formulaire 
    let formulaire = document.getElementById("formulaire")
    let nom = document.getElementById("prenom_nom")
    let mail = document.getElementById("mail")
    let numero = document.getElementById("telephone")
    let CV = document.getElementById("cv")
    let horaire = document.getElementById("horaire")
    let messageValidation = document.getElementById("message");


    //Affichage du message de validation
    messageValidation.innerText = "Merci " + nom.value + ", votre demande d'embauche a bien été retransmise à nos équipes !\nA bientôt !";
    messageValidation.hidden = false

    //Cacher le formulaire
    formulaire.style.display = "none"
}
