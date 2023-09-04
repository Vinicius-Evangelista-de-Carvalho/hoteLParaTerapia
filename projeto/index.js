var usuario = prompt("Ola usuario, digite seu nome: ");
ver_senha();

function ver_senha() {
    var senha = prompt("Digite sua senha: ");

    if (senha != 2678) {
        alert("Senha invalida...");
        ver_senha();
    }
}

var hotel = prompt("Bem vindo!! Por favor, digite o nome do hotel: ");
alert("O nome do Hotel e " + hotel);


function inicio() {

    var escolha = parseInt(prompt("Selecione uma opcao: " + "\n" + " 1.) Reserva de Quartos" + "\n" +
        " 2.) Cadastro de Hospedes" + "\n" + " 3.) Pesquisar e Cadastrar Hospedes " + "\n" + " 4.) Receber evento " + "\n" + " 5.) Hora de comer " + "\n" + " 6.) Auditorio " + "\n" + " 7.) Reserva de restaurante" + "\n" + " 8.) Abastecimento de Carros " + "\n" + " 9.) Manutencao ar-condicionado " + "\n" + " 10.) Sair"));

    switch (escolha) {
        case 1:
            reserva_quartos();
            break;
        case 2:
            cadastro_hospedes();
            break;
        case 3:
            opcoes_hospedes();
            break;
        case 4:
            receber_eventos();
            break;
        case 5:
            comer();
            break;
        case 6:
            auditorio();
            break;
        case 7:
            reserva_restaurante();
            break;
        case 8:
            abastecer_carros();
            break;
        case 9:
            manutencaoAr();
            break;
        case 10:
            sair();
            break;
        default:
            erro();
    }
}

function reserva_quartos() {
    alert('HOTEL ' + hotel + ' - RESERVA DE QUARTOS');
    var valorDiaria = parseFloat(prompt("Qual o valor padrao da diaria? "));
    var diasDiaria = parseInt(prompt("Quantas diarias serão necessarias? "));
    var media = valorDiaria * diasDiaria;

    if (isNaN(valorDiaria) || valorDiaria === '') {
        alert('Por favor, informe um numero.');
        reserva_quartos();

    } else if (valorDiaria <= 0) {
        alert("Operacao nao autorizada.");
        reserva_quartos();

    } else if (isNaN(diasDiaria) || diasDiaria === '') {
        alert('Por favor, informe um numero.');
        reserva_quartos();

    } else if (diasDiaria <= 0 || diasDiaria > 30) {
        alert("Operacao nao autorizada.");
        reserva_quartos();

    } else {
        alert("O valor de " + diasDiaria + " dias de hospedagem e de R$" + media);

    }

    var nomeHospede = prompt("Qual o nome do hospede?");
    var confirmaHospede = prompt(usuario + ", voce confirma a hospedagem para " + nomeHospede + " por " + diasDiaria + " dias? S/N");

    if (confirmaHospede == "N") {
        alert(usuario + ", reserva nao efetuada");
        inicio();

    } else if (confirmaHospede != "S" && confirmaHospede != "N") {
        alert(usuario + ", reserva nao efetuada");
        reserva_quartos();

    } else {
        alert(usuario + ", reserva efetuada para " + nomeHospede + ". O valor total e de R$" + media);
        inicio();

    }
}



function cadastro_hospedes() {
    alert('HOTEL ' + hotel + ' - CADASTRO DE HÓSPEDES');

    var lista_hospedes = [];
    var meia = 0;
    var gratuidade = 0;

    var valorDiaria = parseFloat(prompt("Qual o valor padrao da diaria?"));

    while (true) {
        var nomeHospedes = prompt("Qual o nome do Hospede?");
        if (nomeHospedes == 'PARE') {
            break;
        }

        var idadeHospedes = parseInt(prompt("Qual a idade do Hospede?"));

        if (nomeHospedes === '') {
            alert('Por favor, informe um nome.');

        } else if (idadeHospedes <= 0) {
            alert('Valor invalido.');

        } else if (isNaN(idadeHospedes) || idadeHospedes === '') {
            alert('Por favor, informe um numero.');

        } else {
            if (idadeHospedes < 6) {
                gratuidade += 1;
                alert(nomeHospedes + " cadastrada(o) com sucesso.3");

            } else if (60 < idadeHospedes) {
                meia += 1;
                valorDiaria / 2;
                lista_hospedes.push(valorDiaria);
                alert(nomeHospedes + " cadastrada(o) com sucesso.2");

            } else {
                lista_hospedes.push(valorDiaria);
                alert(nomeHospedes + " cadastrada(o) com sucesso.1");
            }

        }

    }

    var soma = 0;
    for (i = 0; i < lista_hospedes.length; i++) {
        soma += lista_hospedes[i];
    }

    alert(usuario + ", o total de hospedagens e: R$" + soma + "; " + gratuidade + "gratuidade(s); " + meia + " meia(s)");
    inicio();
}

function opcoes_hospedes() {

    var lista = [];

    while (true) {
        var escolha = parseInt(prompt('Selecione uma opcao 1.) cadastrar 2.) pesquisar 3.) sair'));

        if (escolha == '1') {
            var nome_hospede = prompt("Qual o nome do Hospede?");

            if (nome_hospede.length < 15) {
                alert("Hospede " + nome_hospede + " foi cadastrada(o) com sucesso!");
                lista.push(nome_hospede);

            } else {
                alert("Digite um nome com ate 15 caracteres");
            }
        }

        if (escolha == '2') {
            var pesquisa_hospede = prompt("Qual o nome do Hospede?");

            if (pesquisa_hospede == nome_hospede) {
                alert(nome_hospede + " foi encontrada(o)!");

            } else {
                alert("Hospede nao encontrada(o)");
            }
        }
        if (escolha == 3) {
            break;
        }
    }

    inicio();
}

function receber_eventos() {
    var duracao = prompt("Qual a duracao do evento em horas?");
    var garcoes = parseInt(prompt("Quantos garcons serao necessarios?"));
    var soma = duracao * 10.50;
    var final = soma * garcoes;

    alert("Custo total: " + final);

    var aceita = prompt("Gostaria de efetuar a reserva? S/N");

    while (aceita != 'S' && aceita != 'N') {
        alert("Digito invalido, tente novamente...")
        aceita = prompt("Gostaria de efetuar a reserva? S/N");

    }

    if (aceita == 'S') {
        alert(usuario + ", reserva efetuada com sucesso.");

    } else if (aceita == 'N') {
        alert(usuario + ", reserva nao efetuada.");

    }

    inicio();
}

function comer() {
    var numPessoas = parseInt(prompt("Qual o numero de convidados para o evento?"));
    var cafe = numPessoas * 0.2;
    var agua = numPessoas * 0.5;
    var salgado = numPessoas * 0.07;
    var total = (agua * 0.40) + (cafe * 0.80) + (salgado * 34);

    if (numPessoas > 350) {
        alert("quantidade de convidados superior a capacidade maxima.");
        comer();
    } else {
        alert("O evento precisara de " + cafe + " litros de cafe, " + agua + " litros de agua, " + parseInt(salgado * 100) + " salgados. O custo total do evento sera R$" + total.toFixed(2));

        var aceita = prompt("Gostaria de efetuar a reserva? S/N");

        while (aceita != 'S' && aceita != 'N') {
            alert("Digito invalido, tente novamente...");
            aceita = prompt("Gostaria de efetuar a reserva? S/N");

        }

        if (aceita == 'S') {
            alert(usuario + ", reserva efetuada com sucesso.");

        } else if (aceita == 'N') {
            alert(usuario + ", reserva nao efetuada.");

        }
    }
    inicio();
}

function auditorio() {
    var numPessoas = parseInt(prompt("Qual o numero de convidados para o seu evento?"));

    if (isNaN(numPessoas) || numPessoas == '') {
        alert("Por favor, informe um numero.");

    } else if (numPessoas <= 0) {
        alert("Numero invalido...");

    } else if (numPessoas < 220 && numPessoas > 1) {
        if (numPessoas > 150) {
            alert("Use o auditiorio Laranja (inclua mais " + (numPessoas - 150) + " cadeiras)");

        } else {
            alert("Use o auditorio Laranja.");
        }

    } else {
        if (numPessoas < 350) {
            alert("Use o auditorio Colorado");
        } else {
            alert("Quantidade de convidados superior a capacidade maxima.");
        }
    }
    var aceita = prompt("Gostaria de efetuar a reserva? S/N");

    while (aceita != 'S' && aceita != 'N') {
        alert("Digito invalido, tente novamente...");
        aceita = prompt("Gostaria de efetuar a reserva? S/N");

    }

    if (aceita == 'S') {
        alert(usuario + ", reserva efetuada com sucesso.");

    } else if (aceita == 'N') {
        alert(usuario + ", reserva nao efetuada.");

    }

    inicio();
}

function reserva_restaurante() {
    var dia = prompt("Qual o dia do seu evento?");
    var hora = parseInt(prompt("Qual a hora do seu evento?"));

    if (dia == 'segunda' || dia == 'terca' || dia == 'quarta' || dia == 'quinta' || dia == 'sexta') {
        if (hora < 7 || hora > 23) {
            alert("Restaurante indisponivel");
            reserva_restaurante();
        }
    } else if (dia == 'sabado' || dia == 'domingo') {
        if (hora < 7 || hora > 15) {
            alert("Restaurante indisponivel");
            reserva_restaurante();
        }
    } else {
        alert("Restaurante indisponivel");
        reserva_restaurante();
    }

    var nomeRestaurante = prompt("Qual o nome da empresa?");
    alert("Restaurante reservado para " + nomeRestaurante + ". " + dia + " as " + hora + ".");

    inicio()
}

function abastecer_carros() {
    alert('HOTEL ' + hotel + ' - ABASTECER');
    var WayneAlcool = parseFloat(prompt("Qual o valor do alcool na Wayne Oil?"));
    var WayneGasolina = parseFloat(prompt("Qual o valor da gasolina na Wayne Oil?"));
    var StarkAlcool = parseFloat(prompt("Qual o valor do alcool na Stark Petrol?"));
    var StarkGasolina = parseFloat(prompt("Qual o valor da gasolina na Stark Petrol?"));

    var total_WayneAlcool = WayneAlcool * 42;
    var total_WayneGasolina = WayneGasolina * 42;
    var total_StarkAlcool = StarkAlcool * 42;
    var total_StarkGasolina = StarkGasolina * 42;

    var desconto_WayneAlcool_StarkGasolina = total_WayneAlcool + total_StarkGasolina * 30 / 100;
    var desconto_WayneAlcool_StarkGasolina = total_WayneAlcool + total_WayneGasolina * 30 / 100;
    var desconto_StarkAlcool_StarkGasolina = total_StarkAlcool + total_StarkGasolina * 30 / 100;
    var desconto_StarkAlcool_WayneGasolina = total_StarkAlcool + total_WayneGasolina * 30 / 100;

    if (total_WayneGasolina > total_StarkGasolina && desconto_StarkAlcool_StarkGasolina > total_StarkGasolina && desconto_WayneAlcool_StarkGasolina > total_StarkGasolina) {
        alert(usuario + ", e mais barato abastecer com gasolina no posto Stark Petrol.");

    } else if (total_StarkGasolina > total_WayneGasolina && desconto_StarkAlcool_WayneGasolina > total_WayneGasolina && desconto_WayneAlcool_StarkGasolina > total_WayneGasolina) {
        alert(usuario + ", e mais barato abastecer com gasolina no posto Wayne Oil.");

    } else if (total_StarkAlcool > total_WayneAlcool && total_StarkGasolina > desconto_WayneAlcool_StarkGasolina && total_WayneGasolina > desconto_WayneAlcool_StarkGasolina) {
        alert(usuario + ", e mais barato abastecer com alcool no posto Wayne Oil.");

    } else {
        alert(usuario + ", e mais barato abastecer com alcool no posto Stark Petrol");
    }


    inicio();
}

function manutencaoAr() {
    alert('HOTEL ' + hotel + ' - MANUTENCAO AR CONDICIONADO');
    var empresas = [];
    var valores = [];

    do {
        var nomeEmpresa = prompt("Qual o nome da empresa?");
        var valorAparelho = parseFloat(prompt("Qual o valor por aparelho"));
        var quantAparelho = parseInt(prompt("Qual a quantidade de aparelhos?"));
        var porcent = parseInt(prompt("Qual a porcentagem de desconto?"));
        var numMin = parseInt(prompt("Qual o numero minimo de aparelhos para conseguir o desconto?"));
        var valorTotal;
        if (quantAparelho >= numMin) {
            valorTotal = (valorAparelho * quantAparelho) - (valorAparelho * quantAparelho * porcent / 100);

        } else {
            valorTotal = valorAparelho * quantAparelho;
        }

        empresas.push(nomeEmpresa);
        valores.push(valorTotal);
        alert("O servico de " + nomeEmpresa + " custara R$" + valorTotal);
        var escolha = prompt("Deseja informar novos dados, " + usuario + "? (S/N)");
    } while (escolha == 'S')

    var menor = 1000000000000000;
    var NomEmpresa = "";

    for (i = 0; i < valores.length; i++) {
        if (valores[i] < menor) {
            menor = valores[i];
            NomEmpresa = empresas[i];
        }
        
        if (i == valores.length - 1) {
            alert("O orcamento menor e o " + NomEmpresa + " por R$" + menor);
        }
    }
    inicio();
}

function erro() {
    alert('Por favor, informe um numero entre 1 e 4');
    inicio();
}

function sair() {
    var confirma = confirm('Voce deseja sair?');
    if (confirma) {
        alert(nome + ", foi um prazer ter voce por aqui!!");
        window.close();
    } else {
        inicio();
    }
}

inicio();