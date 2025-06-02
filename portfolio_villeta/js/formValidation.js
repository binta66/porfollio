// Récupération des éléments de formulaire
var form = document.getElementById("contactForm");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var messageInput = document.getElementById("message");

var message = document.getElementById("message");
var wordCount = document.getElementById("word-count");
var maxWords = 300;

message.addEventListener("input", function() {
    var words = this.value.split(" ");
    wordCount.innerHTML = words.length-1 + " mots/300";

    if (words.length > maxWords) {
    wordCount.style.color = "red";
    message.value = words.slice(0, maxWords).join(" ");
    } else {
    wordCount.style.color = "black";
    }
});

// Fonction de validation du formulaire
function validateForm() {
    // Réinitialisation des erreurs
    nameInput.setCustomValidity("");
    emailInput.setCustomValidity("");
    messageInput.setCustomValidity("");

    // Validation du nom
    if (nameInput.value.trim() == "") {
        nameInput.setCustomValidity("Veuillez entrer votre nom.");
        return false;
    }

    // Validation de l'adresse e-mail
    if (emailInput.value.trim() == "") {
        emailInput.setCustomValidity("Veuillez entrer votre adresse e-mail.");
        return false;
    }
    var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.setCustomValidity("Veuillez entrer une adresse e-mail valide.");
        return false;
    }

    // Validation du message
    if (messageInput.value.trim() == "") {
        messageInput.setCustomValidity("Veuillez entrer votre message.");
        return false;
    }

    // Si tout est valide, soumettre le formulaire
    return true;
}

// Soumission du formulaire
form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
        // Envoi des données au script de traitement côté serveur
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "submit-form.php");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("name=" + nameInput.value + "&email=" + emailInput.value + "&message=" + messageInput.value);
    }
});
