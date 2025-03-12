document.getElementById("surveyForm").addEventListener("submit", function(event) {
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let errorMessages = [];

    if (nombre.length < 3) {
        errorMessages.push("El nombre debe tener al menos 3 caracteres.");
    }

    if (!validateEmail(email)) {
        errorMessages.push("Por favor, introduce un correo electrónico válido.");
    }

    if (telefono !== "" && !validatePhone(telefono)) {
        errorMessages.push("Por favor, introduce un número de teléfono válido.");
    }

    if (errorMessages.length > 0) {
        alert(errorMessages.join("\n"));
        event.preventDefault();
    }
});

function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    let re = /^\+?[0-9]{7,15}$/;
    return re.test(phone);
}

// Control de visualización de secciones
let sections = document.querySelectorAll("fieldset");
let currentSection = 0;
sections.forEach((section, index) => {
    if (index !== 0) {
        section.style.display = "none";
    }
});

document.getElementById("nombre").addEventListener("input", checkFirstSection);
document.getElementById("email").addEventListener("input", checkFirstSection);
document.getElementById("telefono").addEventListener("input", checkFirstSection);

function checkFirstSection() {
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    
    if (nombre.length >= 3 && validateEmail(email)) {
        showNextSection();
    }
}

function showNextSection() {
    if (currentSection < sections.length - 1) {
        currentSection++;
        sections[currentSection].style.display = "block";
    }
}
