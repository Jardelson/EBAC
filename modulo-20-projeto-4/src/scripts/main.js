document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.faq__questions__item__question');

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }

    function abreOuFechaResposta(elemento) {
        const classe = 'faq__questions__item--is-open';
        elemento.target.parentNode.classList.toggle(classe);
    }
});