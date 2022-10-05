const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];


const form = document.querySelector(".quiz-form");
form.addEventListener("submit", handelsubmit)

function handelsubmit(e) {
    e.preventDefault()  // prevenir le comportement par defaut donc l'appui multiple sur valider

    const results = [];

    const radiobuttons = document.querySelectorAll("input[type=radio]:checked") // on va aller chercher tous les bouttons radio qui sont checkés

    radiobuttons.forEach((radiobutton, index) => {
        radiobutton.value === responses[index] ? results.push(true) : results.push(false);
    })  // pour chaque réponses donnée avec les radios buttons , si le resultat correspond a celui du tableau alors true , sinon false.


    /*    console.log(radiobuttons);
        console.log(results)*/

    showResult(results)
}

const titleResult = document.querySelector(".result h2")
const markResult = document.querySelector(".mark")
const helpResult = document.querySelector(".help")

function showResult(results) {
    const errorsNumber = results.filter(el => el === false).length; // Va retourner un nouveau tablau avec les elements qui retourne true car le filter va enlever les elements false et on fait un length a la fin pour avoir le nombre d'éléments dans le tablau

    console.log(errorsNumber)

    switch (errorsNumber) {
        case 0:
            titleResult.textContent = `✔️ Bravo, c'est un sans faute ! ✔️`;
            helpResult.textContent = "Quelle culture ...";
            helpResult.style.display = "block";  // modification du display none en css
            markResult.innerHTML = "Score : <span>5 / 5</span>";
            markResult.style.display = "block";
            break;
        case 1:
            titleResult.textContent = `✨ Vous y êtes presque ! ✨`;
            helpResult.textContent =
                "Retentez une autre réponse dans la case rouge, puis re-validez !";
            helpResult.style.display = "block";
            markResult.innerHTML = "Score : <span>4 / 5</span>";
            markResult.style.display = "block";
            break;
        case 2:
            titleResult.textContent = `✨ Encore un effort ... 👀`;
            helpResult.textContent =
                "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            helpResult.style.display = "block";
            markResult.innerHTML = "Score : <span>3 / 5</span>";
            markResult.style.display = "block";
            break;
        case 3:
            titleResult.textContent = `👀 Il reste quelques erreurs. 😭`;
            helpResult.textContent =
                "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            helpResult.style.display = "block";
            markResult.innerHTML = "Score : <span>2 / 5</span>";
            markResult.style.display = "block";
            break;
        case 4:
            titleResult.textContent = `😭 Peut mieux faire ! 😭`;
            helpResult.textContent =
                "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            helpResult.style.display = "block";
            markResult.innerHTML = "Score : <span>1 / 5</span>";
            markResult.style.display = "block";
            break;
        case 5:
            titleResult.textContent = `👎 Peut mieux faire ! 👎`;
            helpResult.style.display = "block";
            helpResult.textContent =
                "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            markResult.style.display = "block";
            markResult.innerHTML = "Score : <span>0 / 5</span>";
            break;

        default:
            titleResult.textContent = "Wops, cas innatendu.";
    }
}

