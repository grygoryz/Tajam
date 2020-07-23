const contactForm = {
    form:  document.contactForm,
    submitButton: document.querySelector(".form-contact__button")
};

const subscribeForm = {
    form: document.subscribeForm,
    submitButton: document.querySelector(".subscribe-form__submit")
};

initForms(contactForm, subscribeForm);

function initForms(...forms) {
    forms.forEach(({form, submitButton}) => {
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
    })
}



