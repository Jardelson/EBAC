$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('#nova-tarefa').val();

        if (novaTarefa.trim() !== '') {

            $('#lista-tarefas').append(
                `<li>${novaTarefa}</li>`
            );

            $('#nova-tarefa').val('');
        }
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('concluida');
    });

});