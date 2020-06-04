const submitButton = document.querySelector(".form-contact__button");
const form = document.contactForm;

form.addEventListener("focusin", e => {
    let field = e.target.closest("[placeholder]");
    if (!field) return;

    const placeholder = field.placeholder;
    field.removeAttribute("placeholder");

    field.onblur = () => {
        field.placeholder = placeholder;
        field.onblur = null;
    }
});

submitButton.addEventListener("click", e => {
    e.preventDefault();
    form.submit();
});



