// Création de la variable qui stock l'indice de l'image
let indiceActuelleImage = 0

// Création de la variable qui stock l'indice de l'avis
let indiceActuelleAvis = 0

// Variable qui stock toutes les images dans le HTML
const images = document.querySelectorAll('#scrollable img')

//Récupération des variables qui forment l'avis dans le HTML
const nom = document.getElementById("nom")
const note = document.getElementById("note")
const avisRedige = document.getElementById("avis")

// Création d'une liste qui stock les avis
const avis = [
    ["Marie Dupont", "⭐⭐⭐⭐⭐", "Une expérience culinaire exceptionnelle ! J'ai récemment visité Steak Haven avec des amis et nous avons été enchantés. Les steaks étaient parfaitement grillés, tendres et savoureux. Le service était impeccable, le personnel était chaleureux et attentif à nos besoins. L'ambiance était parfaite pour une soirée décontractée. Je recommande vivement le Steak Haven pour tous les amoureux de la bonne viande et d'une atmosphère conviviale."],
    ["Pierre Leclerc", "⭐⭐⭐⭐", "Une expérience gustative agréable ! Steak Haven propose une sélection de steaks délicieux. J'ai particulièrement apprécié la variété des sauces disponibles pour accompagner les steaks. Le service était rapide et le personnel sympathique. Une adresse à recommander pour les amateurs de viande."],
    ["Sophie Martin", "⭐⭐⭐⭐⭐", "Le paradis des carnivores ! Steak Haven offre une expérience culinaire inoubliable. Les steaks sont divinement préparés, fondants en bouche. Le personnel est très professionnel, et l'ambiance est parfaite pour une soirée spéciale. Si vous recherchez une excellente viande, ne cherchez pas plus loin !"],
    ["Thomas Durand", "⭐⭐⭐", "Bonne adresse pour les amateurs de viande. Steak Haven propose des steaks de qualité, bien que la cuisson aurait pu être meilleure. Le service était correct, mais l'attente était un peu longue. Dans l'ensemble, une expérience satisfaisante, mais peut-être pas exceptionnelle."]
]


// Fonction qui permet de changer l'avis quand le bouton suivant est cliqué
function avisSuivant() {
    if (indiceActuelleAvis === 3) {
        indiceActuelleAvis = 0
    }
    else {
        indiceActuelleAvis++
    }
    changerAvis()
}

// Fonction qui permet de changer l'avis quand le bouton précédent est cliqué
function avisPrecedent() {
    if (indiceActuelleAvis === 0) {
        indiceActuelleAvis = 3
    }
    else {
        indiceActuelleAvis--
    }

    changerAvis()
}


//Changement de l'indice quand bouton est cliqué
function imagePrecedente() {
    if(indiceActuelleImage == 0) {
        indiceActuelleImage = images.length
    }
    changerImage(indiceActuelleImage - 1)
}
function imageSuivante() {
    if(indiceActuelleImage == images.length-1) {
        indiceActuelleImage = 0
    }
    changerImage(indiceActuelleImage + 1)
}

//Fonction qui permet de changer l'avis grâce à l'indice actuelle
function changerAvis() {

    nom.innerText = avis[indiceActuelleAvis][0]
    note.innerText = avis[indiceActuelleAvis][1]
    avisRedige.innerText = avis[indiceActuelleAvis][2]

}

//Fonction qui permet de changer l'image grâce à l'indice actuelle
function changerImage(indice) {
    indiceActuelleImage = indice
    
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = i === indiceActuelleImage ? 'block' : 'none'
    }
}

// Appel de la fonction pour changer l'image    
changerImage(indiceActuelleImage)
changerAvis(indiceActuelleAvis)