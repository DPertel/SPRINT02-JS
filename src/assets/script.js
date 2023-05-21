function buttonClick(){
    let umidade = document.getElementById('umidade').value
    let monoxido = document.getElementById('monoxido').value
    let volume = document.getElementById('volume').value
    let umidadeAnswer = transmitir_mensagem_umidade(umidade);
    let monoxidoAnswer = transmitir_mensagem_monoxido(monoxido);
    let volumeAnswer = transmitir_mensagem_volume(volume);

    if (umidade == "" || monoxido == ""|| volume == "") {
        alert("Por favor, preencha todos os campos")
    }else if(isNaN(umidade) || isNaN(monoxido) || isNaN(volume)) {
        umidade = ''
        monoxido = ''
        volume = ''
        alert("Por favor, todos os campos devem ser um número")
    } else {
        alert(umidadeAnswer)
        alert(monoxidoAnswer)
        alert(volumeAnswer)
    }
}

function transmitir_mensagem_umidade(umidade) {
    if (umidade > 80) {
        return "A umidade está alta. Certifique-se de se manter hidratado.";
    } else if (umidade >= 50 && umidade <= 80) {
        return "A umidade está em um nível ideal, segundo a OMS. Aproveite o dia!";
    } else if (umidade >= 20 && umidade < 50) {
        return "A umidade está em um nível de atenção, segundo a OMS.";
    } else {
        return "A umidade está baixa. É um nível compatível com o do Deserto do Saara, por exemplo. Tenha cuidado com o ressecamento da pele.";
    }
}

function transmitir_mensagem_monoxido(monoxido) {
    if (monoxido >= 50) {
        return "Há níveis perigosos de monóxido de carbono no ar. Evite a exposição prolongada.";
    } else if (monoxido >= 30 && monoxido < 50) {
        return "Há uma quantidade moderada de monóxido de carbono no ar. Mantenha-se atento.";
    } else {
        return "A quantidade de monóxido de carbono está dentro dos níveis seguros.";
    }
}

function transmitir_mensagem_volume(volume) {
    if (volume >= 85) {
        return "O volume está muito alto. Proteja seus ouvidos utilizando protetores auriculares.";
    } else if (volume >= 60 && volume < 85) {
        return "O volume está em um nível moderado. Aprecie a música!";
    } else {
        return "O volume está dentro dos limites seguros.";
    }
}
