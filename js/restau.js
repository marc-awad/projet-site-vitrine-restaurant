// Initialisation de la carte au coordonnées de "La Défense"
let maCarte = L.map('map').setView([48.891686, 2.236109], 12)

// Ajouter les motifs de carte qu'il y a derriere
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
}).addTo(maCarte)


// Ajouter le marqueur pour le restaurant à La Défense
let resto1 = L.marker([48.891686, 2.236109]).addTo(maCarte)
resto1.bindPopup("<b>Steak Haven</b><br />La Defense").openPopup()

// Ajouter le marqueur pour le restaurant à Courbevoie
let resto2 = L.marker([48.896621, 2.242705]).addTo(maCarte)
resto2.bindPopup("<b>Steak Haven</b><br />Courbevoie").openPopup()

// Ajouter le marqueur pour le restaurant à Nanterre
let resto3 = L.marker([48.906485, 2.216217]).addTo(maCarte)
resto3.bindPopup("<b>Steak Haven</b><br />Nanterre").openPopup()
