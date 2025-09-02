const emailImput = document.querySelector('#email');
const senhaImput = document.querySelector('#senha');
const emailError = document.querySelector('#email-error');
const senhaError = document.querySelector('#senha-error');

emailImput.addEventListener('input', () => {
    const email = emailImput.value;
    const isValid = email.includes("@");

    /* forma tradicional
    if (isValid) {
        emailError.style.display = "none";
        emailInput.classList.remove('error');
        } else {
            emailError.style.display = "block";
        emailInput.classList.add('error');
            }
    */
    // forma abreviada:
    emailError.style.display = isValid ? "none" : "block";
    emailImput.classList.toggle('error', !isValid);
});


senhaImput.addEventListener('input', () => {
    const senha = senhaImput.value;
    const isValid = senha.length >= 6;

    if (isValid) {
        senhaError.style.display = "none";
        senhaImput.classList.remove('error');
    } else {
        senhaError.style.display = "block";
        senhaImput.classList.add('error');
    }

    /* forma abreviada:
    senhaError.style.display = isValid ? "none" : "block";
    senhaImput.classList.toggle('error', !isValid);
    */
});
