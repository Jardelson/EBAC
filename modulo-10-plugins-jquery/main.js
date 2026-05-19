$(document).ready(function () {
    $('#carousel-images').slick({
        autoplay: true,
        arrows: false
    });

    $('#telefone').mask('(00) 00000-0000');

    $('#cpf').mask('000.000.000-00');

    $('nav a').click(function (evento) {
        evento.preventDefault();

        const destino = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(destino).offset().top - 80
        }, 800);
    });

    $('.lista-veiculos button').click(function () {
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#interesse').val(nomeVeiculo);

        $('html, body').animate({
            scrollTop: $('#contato').offset().top - 80
        }, 800);
    });

    $('#form-contato').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            mensagem: {
                required: true
            },
            interesse: {
                required: true
            }
        },

        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira um e-mail válido',
            telefone: 'Por favor, insira seu telefone',
            cpf: 'Por favor, insira seu CPF',
            mensagem: 'Por favor, escreva uma mensagem',
            interesse: 'Por favor, selecione um veículo'
        },

        submitHandler: function (form) {
            alert('Mensagem enviada com sucesso!');
            form.reset();
        },

        invalidHandler: function () {
            alert('Por favor, preencha os campos corretamente.');
        }
    });
});