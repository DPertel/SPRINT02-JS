//Função para coletar e verificar o nível de úmidade.
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

//Função para coletar e verificar o nível de monóxido de carbono.
function transmitir_mensagem_monoxido(monoxido) {
    if (monoxido >= 50) {
        return "Há níveis perigosos de monóxido de carbono no ar. Evite a exposição prolongada.";
    } else if (monoxido >= 30 && monoxido < 50) {
        return "Há uma quantidade moderada de monóxido de carbono no ar. Mantenha-se atento.";
    } else {
        return "A quantidade de monóxido de carbono está dentro dos níveis seguros.";
    }
}

//Função para coletar e verificar o nível de sonoridade.
function transmitir_mensagem_volume(volume) {
    if (volume >= 85) {
        return "O volume está muito alto. Proteja seus ouvidos utilizando protetores auriculares.";
    } else if (volume >= 60 && volume < 85) {
        return "O volume está em um nível moderado. Aprecie a música!";
    } else {
        return "O volume está dentro dos limites seguros.";
    }
}

//Função para coletar, verificar e forçar o usuário a digitar um número.
function verifica_num(frase) {
    let num1 = prompt(frase);
    while (!Number.isInteger(parseInt(num1))) {
        num1 = prompt(frase);
    }
    return parseInt(num1);
}

//Função para escrever a mensagem na página do usuário.
function escreveLinha(frase) {
    document.write(frase);
    document.write("<br>");
    document.write("<br>");
}

let bool = true;

//Mensagem de boas-vindas ao usuário.
console.log("=".repeat(100));
console.log("Bem-vindo a LifeSustent. Monitoramento Ambiental em tempo real.\nAqui vamos verificar qualidade da umidade, do ar e da sonoridade em cidades inteligentes.");
console.log("=".repeat(100));

alert("Bem-vindo a LifeSustent. Monitoramento Ambiental em tempo real.\nAqui vamos verificar qualidade da umidade, a qualidade do ar e da sonoridade em cidades inteligentes.");

//Todo o programa executado dentro de um "While" para caso ele queira realizar outra vez a verificação dos níveis de qualidades.
while (bool) {
    console.log("");
    let umidade = verifica_num("Digite a umidade do ar (em %): ");
    let monoxido = verifica_num("Digite o nível de monóxido de carbono (em ppm): ");
    let volume = verifica_num("Digite o volume em decibéis: ");

    let mensagem_umidade = transmitir_mensagem_umidade(umidade);
    let mensagem_monoxido = transmitir_mensagem_monoxido(monoxido);
    let mensagem_volume = transmitir_mensagem_volume(volume);

    console.log("");
    console.log("=".repeat(100));
    console.log("De acordo com os dados de nosso banco de dados, com apoio das informações divulgadas da OMS e OSHA:");
    escreveLinha("");
    escreveLinha("=".repeat(100));
    escreveLinha("De acordo com os dados de nosso banco de dados, com apoio das informações divulgadas da OMS e OSHA:");

    console.log(mensagem_umidade);
    escreveLinha(mensagem_umidade);

    escreveLinha(mensagem_monoxido);
    console.log(mensagem_monoxido);

    escreveLinha(mensagem_volume);
    console.log(mensagem_volume);

    console.log("=".repeat(100));
    escreveLinha("=".repeat(100));

    let sair = prompt("\nVocê deseja realizar outra análise (s/n)? ");
    while (sair !== "s" && sair !== "n") {
        sair = prompt("\nVocê deseja realizar outra análise (s/n)? ");
    }

    if (sair === "s") {
        bool = true;
    } else {
        escreveLinha("\nObrigado por utilizar nosso serviço!\nVocê saiu.")
        console.log("\nObrigado por utilizar nosso serviço!\nVocê saiu.");
        bool = false;
    }
}
