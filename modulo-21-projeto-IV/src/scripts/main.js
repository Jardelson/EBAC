document.addEventListener('DOMContentLoaded', function () {

    const perguntas = document.querySelectorAll('.faq__question');

    perguntas.forEach(pergunta => {
        pergunta.addEventListener('click', function () {
            pergunta.parentNode.classList.toggle('faq__item--open');
        });
    });

});