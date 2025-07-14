const prompt = require('prompt-sync')();
let numRodadas = 5;
let nome = prompt("Digite seu nome: ");

console.log(`\n Bem-vindo ao Jogo do Milhão, ${nome}!\n`);
while(true)
{
    let opcao = prompt("Você deseja: [1] Jogar, [2] Sair: ");

    if(opcao != 1)
    {
        console.log("Até a próxima!!");
        return false;
    }


    const todasPerguntas = [
    {
        pergunta: "Qual é o maior país em extensão territorial do mundo?",
        opcoes: ["a) China", "b) Canadá", "c) Rússia ", "p) Para parar", ],
        resposta: "c"
    },
    {
        pergunta: "Em que ano ocorreu a Proclamação da República no Brasil?",
        opcoes: ["a) 1889", "b) 1822", "c) 1922", "p) Para parar"],
        resposta: "a"
    },
    {
        pergunta: "Qual organela celular né responsável pela respiração celular?",
        opcoes: ["a) Ribossomo", "b) Mitocôndria", "c) Lisossomo ", "p) Para parar"],
        resposta: "b"
    },
    {
        pergunta: "Qual é o valor de √49?",
        opcoes: ["a) 6", "b) 7", "c) 8 ", "p) Para parar"],
        resposta: "b"
    },
    {
        pergunta: "Qual das frases está correta quanto ao uso da crase?",
        opcoes: ["a) Entreguei o presente à minha mãe.", "b) Entreguei o presente a minha mãe.", "c) Entreguei o presente à ela", "p) Para parar"],
        resposta: "a"
    },
    {
        pergunta: "Qual é o símbolo químico do sódio?",
        opcoes: ["a) So", "b) Na", "c) S ", "p) Para parar"],
        resposta: "b"
    },
    {
        pergunta: "Qual a unidade de medida da força no Sistema Internacional?",
        opcoes: ["a) Pascal", "b) Watt", "c) Newton ", "p) Para parar"],
        resposta: "c"
    },
    {
        pergunta: "Qual é o principal bioma da região Norte do Brasil?",
        opcoes: ["a) Cerrado", "b) Amazônia", "c) Pantanal ", "p) Para parar"],
        resposta: "b"
    },
    {
        pergunta: "Quem foi o primeiro presidente do Brasil?",
        opcoes: ["a) Marechal Deodoro da Fonseca", "b) Getúlio Vargas", "c) Dom Pedro II ", "p) Para parar"],
        resposta: "a"
    },
    {
        pergunta: "Qual grupo de seres vivos realiza fotossíntese?",
        opcoes: ["a) Fungos", "b) Plantas", "c) Animais ", "p) Para parar"],
        resposta: "b"
    },
    {
        pergunta: "Qual é o resultado de 3² + 4²?",
        opcoes: ["a) 25", "b) 49", "c) 12 ", "p) Para parar"],
        resposta: "a"
    },
    {
        pergunta: "Qual das palavras abaixo está corretamente escrita?",
        opcoes: ["a) Exceção", "b) Exeção", "c) Eceção ", "p) Para parar"],
        resposta: "a"
    },
    {
        pergunta: "Quantos átomos de oxigênio existem na molécula de água (H₂O)?",
        opcoes: ["a) 1", "b) 2", "c) 3 ", "p) Para parar"],
        resposta: "a"
    },
    {
        pergunta: "O que acontece com um corpo em queda livre (desprezando o ar)?",
        opcoes: ["a) Ele desacelera", "b) Ele mantém velocidade constante", "c) Ele acelera constantemente", "p) Para parar"],
        resposta: "c"
    },
    {
        pergunta: "Qual acontecimento marcou o início da Segunda Guerra Mundial?",
        opcoes: ["a) Bombardeio de Pearl Harbor", "b) Invasão da Polônia pela Alemanha", "c) Queda do Muro de Berlim", "p) Para parar"],
        resposta: "b"
    }
    ];

    // Embaralhar perguntas
    function embaralhamentoPerguntas(vetor) 
    {
    for (let i = vetor.length - 1; i > 0; i--) 
        {
        const j = Math.floor(Math.random() * (i + 1));
        [vetor[i], vetor[j]] = [vetor[j], vetor[i]];
    }
    }

    embaralhamentoPerguntas(todasPerguntas);
    const perguntasSelecionadas = todasPerguntas.slice(0, 5);

    const premios = [1000, 5000, 10000, 50000, 1000000];
    let premioAtual = 0;
    let garantido = 0;

    for (let i = 0; i < perguntasSelecionadas.length; i++) 
    {
        const rodada = i + 1;
        const pergunta = perguntasSelecionadas[i];

        console.log(`\n Rodada ${rodada} - Valendo R$ ${premios[i]}`);
        console.log(pergunta.pergunta);
        pergunta.opcoes.forEach(op => console.log(op));
        
        const resposta = prompt("Sua resposta (a, b, c ou p): ").toLowerCase();
        if (resposta === 'p') 
        {
            console.log(`\n Você decidiu parar! Sai do jogo com R$ ${premioAtual}`);
            break;
        }
        if (resposta === pergunta.resposta) 
            {
            console.log(" Resposta correta!");
            premioAtual = premios[i];
            
            if(rodada === 2)
            {
                garantido = 5000;
                console.log("Você garantiu o prêmio mínimo de R$ 5.000!");
            }
            if (rodada === 3) 
            {
                garantido = 10000;
                console.log("Você garantiu o prêmio mínimo de R$ 10.000!");
            }
            
            if (rodada === 4) 
            {
                garantido = 0;
                console.log("Você perdeu todo o valor!");

            }

            if (rodada === 5) 
            {
                console.log("Você venceu o Jogo do Milhão e ganhou R$ 1.000.000!");
                opcao ==1;
            }

        } 
        else 
        {
            console.log("Resposta errada!");
            console.log(`A resposta correta era: ${pergunta.resposta}`);
            console.log(`\n Fim de jogo, ${nome}. Você sai com R$ ${garantido}.`);
            console.log(`"Você saiu na rodada ${rodada}!", faltaram ${numRodadas-rodada}!!`);
            break;
        }
    }
    console.log(`\n Parabéns, ${nome}! Você terminou com R$ ${premioAtual} em prêmios.`);
}