const BMIData = [
    {name: "Maigreur", color: "midnightblue", range: [0, 18.5]},
    {name: "Bonne santé", color: "green", range: [18.5, 25]},
    {name: "Surpoids", color: "lightcoral", range: [25, 30]},
    {name: "Obésité modérée", color: "orange", range: [30, 35]},
    {name: "Obésité sévère", color: "crimson", range: [35, 40]},
    {name: "Obésité morbide", color: "purple", range: 40},
];

// IMC = poids en kg / taille² en m

const form = document.querySelector('form');

form.addEventListener("submit", handelForm);

function handelForm(e) {
    e.preventDefault();
    calculateBMI()
}

const inputs = document.querySelectorAll("input")  // selection des champs inputs récupéré en tableau avec le All


function calculateBMI() {
    const height = inputs[0].value; // creation des constantes en fonction des inputs. Ici le champ taille
    const weight = inputs[1].value; // input pour le poid

    if (!height || !weight || height <= 0 || weight <= 0) { // on vérifie si les champs sont bien remplis
        handelError()
        return;
    }

    const BMI = (weight / Math.pow(height / 100, 2)).toFixed(1) // création de la constante du calclul du BMI// la methode javascript pow() va permettre de mettre au carré l'element , le tofix(1) va nous permettre de ne garder que 1 chiffre apres la virgule

    showResult(BMI)  // afficher le résultat à partir de la fonction créée plus bas

}

const displayBMI = document.querySelector('.bmi-value');
const result = document.querySelector('.result');

function handelError() {
    displayBMI.textContent = "Wops";
    displayBMI.style.color = "inherit"; // on remet la couleur d'origin (noir) si il y a une faute dans une seconde recherche
    result.textContent = "Remplissez correctement les imputs."
}

function showResult(BMI) {  // fonction d'affichage du résultat
    const rank = BMIData.find(data => {
        if (BMI >= data.range[0] && BMI < data.range[1]) return data; // va parcourir les element du tableau BMIData pour voir dans quel catégorie on se trouve
        else if (typeof data.range === 'number' && BMI >= data.range) return data; // prise en charge des valeurs n'existants pas dans le tableau par exemple si le BMI est sup a 40
    })

    displayBMI.textContent = BMI;       // on change le contenu de la réponse en fonction du résultat
    displayBMI.style.color = `${rank.color}` // texte avec expression JS rank.color qui correspond a la couleur de chaque resultats
    result.textContent = `Résultat : ${rank.name}`
}

