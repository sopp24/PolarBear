(function() {
    emailjs.init("LAVHROSudqGZXICfi"); 
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_jxh0b4e", "template_lc7riuf", this)
        .then(function() {
            alert('Votre message a été envoyé avec succès !');
        }, function(error) {
            alert('Échec de l\'envoi du message. Veuillez réessayer plus tard.');
            console.error('Erreur : ', error);
        });
});

