const prompt = require('prompt-sync')();
const path = require("path");
const arquivoDoRanking = path.join(__dirname,"placar.json");
let numRodadas = 5;
let dica = 1;
let nome = prompt("Digite seu nome: ");
let premioAtual = 0;
let einsteinUsado = 0;

while(true)
{
    if (menu() === false)
    {
        break;
    }

    const todasPerguntas = [
    {
        pergunta: "Qual é o maior país em extensão territorial do mundo?",
        opcoes: ["a) China", "b) Canadá", "c) Rússia ", "p) Parar", "d) Dicas", "e) Chamará o Einstein"],
        resposta: "c"
    },
    {
        pergunta: "Em que ano ocorreu a Proclamação da República no Brasil?",
        opcoes: ["a) 1889", "b) 1822", "c) 1922", "p) Parar", "d) Dicas", "e) Chamará o Einstein"],
        resposta: "a"
    },
    {
        pergunta: "Qual organela celular né responsável pela respiração celular?",
        opcoes: ["a) Ribossomo", "b) Mitocôndria", "c) Lisossomo ", "p) Parar", "d) Dicas", "e) Chamará o Einstein"],
        resposta: "b"
    },
    {
        pergunta: "Qual é o valor de √49?",
        opcoes: ["a) 6", "b) 7", "c) 8 ", "p) Parar", "d) Dicas"],
        resposta: "b"
    },
    {
        pergunta: "Qual das frases está correta quanto ao uso da crase?",
        opcoes: ["a) Entreguei o presente à minha mãe.", "b) Entreguei o presente a minha mãe.", "c) Entreguei o presente à ela", "p) Parar", "d) Dicas", "e) Chamará o Einstein"],
        resposta: "a"
    },
    {
        pergunta: "Qual é o símbolo químico do sódio?",
        opcoes: ["a) So", "b) Na", "c) S ", "p) Parar", "d) Dicas", "e) Chamará o Einstein"],
        resposta: "b"
    },
    {
        pergunta: "Qual a unidade de medida da força no Sistema Internacional?",
        opcoes: ["a) Pascal", "b) Watt", "c) Newton ", "p) Parar", "d) Dicas", "e) Chamará o Einstein"],
        resposta: "c"
    },
    {
        pergunta: "Qual é o principal bioma da região Norte do Brasil?",
        opcoes: ["a) Cerrado", "b) Amazônia", "c) Pantanal ", "p) Parar" , "d) Dicas", "e) Chamará o Einstein"],
        resposta: "b"
    },
    {
        pergunta: "Quem foi o primeiro presidente do Brasil?",
        opcoes: ["a) Marechal Deodoro da Fonseca", "b) Getúlio Vargas", "c) Dom Pedro II ", "p) Parar", "d) Dicas", "e) Chamará o Einstein"],
        resposta: "a"
    },
    {
        pergunta: "Qual grupo de seres vivos realiza fotossíntese?",
        opcoes: ["a) Fungos", "b) Plantas", "c) Animais ", "p) Parar", "d) Dicas", "e) Chamará o Einstein"],
        resposta: "b"
    },
    {
        pergunta: "Qual é o resultado de 3² + 4²?",
        opcoes: ["a) 25", "b) 49", "c) 12 ", "p) Parar", "d) Dicas", "e) Chamará o Einstein"],
        
        resposta: "a"
    },
    {
        pergunta: "Qual das palavras abaixo está corretamente escrita?",
        opcoes: ["a) Exceção", "b) Exeção", "c) Eceção ", "p) Parar", "d) Dicas", "e) Chamará o Einstein"],
        resposta: "a"
    },
    {
        pergunta: "Quantos átomos de oxigênio existem na molécula de água (H₂O)?",
        opcoes: ["a) 1", "b) 2", "c) 3 ", "p) Parar", "d) Dicas", "e) Chamará o Einstein"],
        resposta: "a"
    },
    {
        pergunta: "O que acontece com um corpo em queda livre (desprezando o ar)?",
        opcoes: ["a) Ele desacelera", "b) Ele mantém velocidade constante", "c) Ele acelera constantemente", "p) Parar", "d) Dicas", "e) Chamará o Einstein"],
        resposta: "c"
    },
    {
        pergunta: "Qual acontecimento marcou o início da Segunda Guerra Mundial?",
        opcoes: ["a) Bombardeio de Pearl Harbor", "b) Invasão da Polônia pela Alemanha", "c) Queda do Muro de Berlim", "p) Parar", "d) Dicas", "e) Chamará o Einstein"],
        resposta: "b"
    }
    ];
    
    // Embaralhar perguntas
    embaralhamentoPerguntas(todasPerguntas);
    const perguntasSelecionadas = todasPerguntas.slice(0, 5);
    premiacao(premioAtual, dica);
    
    function embaralhamentoPerguntas(vetor) 
    {
        for (let i = vetor.length - 1; i > 0; i--) 
        {
            const j = Math.floor(Math.random() * (i + 1));
            [vetor[i], vetor[j]] = [vetor[j], vetor[i]];
        }
    }
    function menu()
    {
        let opcao = prompt("Você deseja: [1] Jogar, [2] Ver Placar e qualquer outra pra sair : ");
        if (opcao == 1)
        {
            bemVindoAoJogo();
        }

        else if(opcao == 2)
        {
            placar();
        }

        else
        {
            console.log("Até a próxima!!");
            return false;
        }
    }

    function premiacao(premioAtual)
    {
        const premios = [0, 2000, 10000, 20000, 100000, 1000000];
        let garantido = 0;

        for (let i = 0; i < perguntasSelecionadas.length; i++) 
        {
            const rodada = i + 1;
            const pergunta = perguntasSelecionadas[i];

            console.log(`\nJogador ${nome}, Rodada ${rodada} - Valendo R$ ${premios[i+1]}`);
            console.log(pergunta.pergunta);
            console.log(`Se parar, você receberá R$ ${premios[i]}`);
            console.log(`Se perder, você receberá R$ ${garantido}`);
            pergunta.opcoes.forEach(op => console.log(op));
            
            let resposta = prompt("Sua resposta (a, b, c, d ou p): ").toLowerCase();

            if (resposta === 'p') 
            {
                console.log(`\nVocê decidiu parar! Sai do jogo com R$ ${premioAtual}`);
                placarAtualizado(nome, rodada, premioAtual);
                break;
            }

            if (resposta === 'd')
            {
                dicaCartas(pergunta.resposta);
                resposta = prompt("Agora digite sua resposta real: ").toLowerCase();
            }

            if (resposta === 'e')
            {
                if(einsteinUsado == '1')
                {
                    console.log("Dica já foi usada!!");
                    resposta = prompt("Agora digite sua resposta real: ").toLowerCase();
                }

                else
                {
                    console.log(`"O einstein disse que a resposta era: ${pergunta.resposta}"`);
                    resposta = prompt("Agora digite sua resposta real: ").toLowerCase();
                    einsteinUsado = 1;
                }
            } 

            if (resposta === pergunta.resposta) 
            {
                console.log("Resposta correta!");
                premioAtual = premios[i]; // Atualiza o prêmio atual

                if (rodada === 2)
                {
                    garantido = 2000;
                    console.log("Você garantiu o prêmio mínimo de R$ 10.000!");
                }

                if (rodada === 3) 
                {
                    garantido = 10000;
                    console.log("Você garantiu o prêmio mínimo de R$ 20.000!");
                }

                if(rodada ===4)
                {
                    garantido = 0;
                    console.log("Você perdeu tudo!");
                }

                if (rodada === 5) 
                {
                    console.log("Você venceu o Jogo do Milhão e ganhou R$ 1.000.000!");
                    placarAtualizado(nome, rodada, premioAtual);
                }
            } 
            else 
            {
                console.log("Resposta errada!");
                console.log(`A resposta correta era: ${pergunta.resposta}`);
                console.log(`\nFim de jogo, ${nome}. Você sai com R$ ${garantido}.`);
                console.log(`Você saiu na rodada ${rodada}. Faltaram ${numRodadas - rodada} rodadas para o prêmio máximo.`);
                placarAtualizado(nome, rodada, garantido);
                break;
            }

            if (rodada < 5) {
                console.log(`\nParabéns, ${nome}! Você agora tem R$ ${premioAtual} em prêmios.`);
            }
        }
    }



    function placar() 
    {
        const fs = require("fs");
        // Isso explica caso o placar exista algum tipo de dado para exibir; Caso vazio, não exibe nada
        if (!fs.existsSync(arquivoDoRanking)) 
        {
            console.log("O placar está vazio!\n\n");
            prompt("");
        } 
        
        else 
        {
            try 
            {
                const dadosDoRanking = fs.readFileSync(arquivoDoRanking, "utf8");
                const rankingJogadores = JSON.parse(dadosDoRanking);
                console.log("-------<| Placar de líderes |>-------\n\n");
                rankingJogadores.forEach((player, posicao) => 
                {
                    console.log(`${posicao + 1}º Lugar:\n, Nome do jogador: ${player.nome};,
                    Rodada em que parou: ${player.rodada}ª;,
                    Premiação Total: R$ ${player.premio}\n\n`);
                });
            } 
            
            catch(error) 
            {
                console.error("Este arquivo gerou um erro. Erro gerado: ", error);
            }
        }
    }

    function placarAtualizado(playerName, rodadaAtual, premiacao) 
    {
        const fs = require("fs");
        const path = require("path");
        const arquivoDoRanking = path.join(__dirname, "placar.json");
        // essa variável históricoPlacar guarda as pontuações anteriores e ordena no placar
        let historicoPlacar = [];
        //objeto tipo player (acessado pelo player.)
        let player = 
        {
            nome: playerName,
            rodada: rodadaAtual,
            premio: premiacao
        }
        try 
        {
            if (fs.existsSync(arquivoDoRanking)) 
            {
                let dadosDoPlacar = fs.readFileSync(arquivoDoRanking, "utf8");
                if (dadosDoPlacar) 
                {
                    historicoPlacar = JSON.parse(dadosDoPlacar);
                }
            }
            historicoPlacar.push(player);
            historicoPlacar.sort((a, b) => b.premio - a.premio);
            let placarModificado = JSON.stringify(historicoPlacar, null, 2);
            fs.writeFileSync(arquivoDoRanking, placarModificado, "utf8");
        } 
        
        catch (error) 
        {
            console.error("Ocorreu um erro ao atualizar o placar: ", error);
        }
    }

    function dicaCartas(resposta) 
    {
        cartaVirada = Math.round(Math.random() * 3);
        opcaoEliminada = Math.round(Math.random());
        if(dica === '1')
        {
            console.log("Não existem mais dicas!!");
        }

        else
        {
            console.log("E a carta escolhida foooooiiiii (tatatataaaaaammmm)\n");
            dica = '1';
            if (cartaVirada == 0) 
            {
                console.log("Você não deu sorte, nenhuma carta foi eliminada")
            } 
            
            else if (cartaVirada == 1) 
            {
                console.log("Um A. Você eliminou uma opção!");
                if (resposta == "a") 
                {
                    if(opcaoEliminada == 0) 
                    {
                        console.log("A opção B é falsa.");
                    } 
                    
                    else 
                    {
                        console.log("A opção C é falsa.");
                    }
                } 

                else if (resposta == "b") 
                {
                    if(opcaoEliminada == 0) 
                    {
                        console.log("A opção A é falsa.");
                    } 
                    
                    else if(opcaoEliminada == 1) 
                    {
                        console.log("A opção C é falsa.");
                    }
                } 
                
                else 
                {
                    if(opcaoEliminada == 0) 
                    {
                        console.log("A opção A é falsa.");
                    }

                    else if(opcaoEliminada == 1) 
                    {
                        console.log("A opção B é falsa.");
                    }
                }
            } 
            
            else 
            {
                console.log("Um dois! Você eliminou duas opções!!");
                if (resposta == "a")
                {
                    console.log("As opções B e C são falsas.");
                }

                else if (resposta == "b")
                {
                    console.log("As opções A e C são falsas.");
                }
                else 
                {
                    console.log("As opções A e B são falsas.");
                }
            }
        }
    }

    function bemVindoAoJogo()
    {
        console.log(`\n Bem-vindo ao Jogo do Milhão, ${nome}!\n`);
    }
}