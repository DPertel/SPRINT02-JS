# SPRINT02-JS

TURMA 1ESR

- Deivison Pertel – RM 550803
- Eduardo Akira Murata – RM 98713
- Guilherme Jacob Soares da Costa – RM 84581
- Fabrizio El Ajouri Romano – RM 550410
- Wesley Souza de Oliveira – RM 97874
---

### LifeSustent - Monitoramento Ambiental em Tempo Real
Este programa tem como objetivo monitorar a qualidade da umidade, do ar e da sonoridade em cidades inteligentes. Ele fornece mensagens de orientação com base nas leituras inseridas pelo usuário.

---

## Execução
Para executar o programa, siga os passos abaixo:

Abra o arquivo HTML em um navegador.
O programa exibirá uma mensagem de boas-vindas e instruções.
Insira os valores solicitados para umidade do ar, nível de monóxido de carbono e volume.
O programa fornecerá mensagens relacionadas a cada condição inserida.
Após cada análise, escolha se deseja realizar outra análise (digite 's') ou sair do programa (digite 'n').
Observação: Certifique-se de ter o JavaScript habilitado no seu navegador para executar o programa corretamente.

---

## Funcionalidades
O programa possui as seguintes funcionalidades:

### Monitoramento da Umidade do Ar:

A função transmitir_mensagem_umidade recebe um valor de umidade e retorna uma mensagem relacionada à qualidade da umidade.
As faixas de umidade são definidas da seguinte forma:
Umidade > 80: "A umidade está alta. Certifique-se de se manter hidratado."
50 <= Umidade <= 80: "A umidade está em um nível ideal, segundo a OMS. Aproveite o dia!"
20 <= Umidade < 50: "A umidade está em um nível de atenção, segundo a OMS."
Umidade < 20: "A umidade está baixa. É um nível compatível com o do Deserto do Saara, por exemplo. Tenha cuidado com o ressecamento da pele."

### Monitoramento do Monóxido de Carbono:

A função transmitir_mensagem_monoxido recebe um valor de monóxido de carbono e retorna uma mensagem relacionada à qualidade do ar.
As faixas de monóxido de carbono são definidas da seguinte forma:
Monóxido >= 50: "Há níveis perigosos de monóxido de carbono no ar. Evite a exposição prolongada."
30 <= Monóxido < 50: "Há uma quantidade moderada de monóxido de carbono no ar. Mantenha-se atento."
Monóxido < 30: "A quantidade de monóxido de carbono está dentro dos níveis seguros."

### Monitoramento do Volume:

A função transmitir_mensagem_volume recebe um valor de volume e retorna uma mensagem relacionada à sonoridade.
As faixas de volume são definidas da seguinte forma:
Volume >= 85: "O volume está muito alto. Proteja seus ouvidos utilizando protetores auriculares."
60 <= Volume < 85: "O volume está em um nível moderado. Aprecie a música!"
Volume < 60: "O volume está dentro dos limites seguros."
Interação com o Usuário:

A função verifica_num solicita um valor numérico ao usuário e verifica se é um número inteiro válido.
O programa exibe uma mensagem de boas-vindas e instruções para o usuário através do console e de um alerta.
O usuário é solicitado a inserir a umidade do ar, o nível de monóxido de carbono e o volume.
Com base nas leituras inseridas, o programa chama as funções correspondentes para obter as mensagens relacionadas à umidade, ao monóxido de carbono e ao volume.
As mensagens são exibidas tanto no console quanto na página web através da função escreveLinha.
Após cada análise, o usuário pode escolher se deseja realizar outra análise ou sair do programa.
