"use strict"

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-for-discount');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);
    }

    let formValidate = form => {
        let error = 0;
        let formRequared = document.querySelectorAll('._req');

        for (let index = 0; index < formRequared.length; index++) {
            const input = formRequared[index];
        }
    };
}

);