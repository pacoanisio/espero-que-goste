document.addEventListener("DOMContentLoaded", function () {


    /* ==================================================
       MÚSICAS
    ================================================== */

    const rodadas = [

        {
            musicas: [

                {
                    nome: "All I Need",
                    artista: "Radiohead",
                    correta: true,
                    link: "https://music.youtube.com/watch?v=FM7ALFsOH4g&si=nT5MnfqFW2ka_bDR"
                },

                {
                    nome: "Jigsaw Falling Into Place",
                    artista: "Radiohead",
                    correta: false,
                    link: "https://music.youtube.com/watch?v=CvjRlYpXS5U&si=tR7fobczXlczoqBu"
                }

            ]
        },


        {
            musicas: [

                {
                    nome: "Echoes",
                    artista: "Incubus",
                    correta: true,
                    link: "https://music.youtube.com/watch?v=gmJQvCS1T3c&si=YEQz55RtTF9wdltC"
                },

                {
                    nome: "Stellar",
                    artista: "Incubus",
                    correta: false,
                    link: "https://music.youtube.com/watch?v=_qQdnilFIw8&si=CqCWRVPye1I7nzor"
                }

            ]
        },


        {
            musicas: [

                {
                    nome: "I Could Die For You",
                    artista: "Red Hot Chili Peppers",
                    correta: false,
                    link: "https://music.youtube.com/watch?v=5hEjkH2DF5c&si=mp4iSPvWKxJCj8v6"
                },

                {
                    nome: "My Kind of Woman",
                    artista: "Mac DeMarco",
                    correta: true,
                    link: "https://music.youtube.com/watch?v=88mooKbT61A&si=ovStWFeVHxaSyiMR"
                }

            ]
        }

    ];



    /* ==================================================
       IMAGENS
    ================================================== */

    const imagens = {

        rodada1Acerto:
            "https://github.com/user-attachments/assets/75cefa6c-c86e-4290-9cdb-84002393f115",

        rodada1Erro:
            "https://github.com/user-attachments/assets/2f3b6cca-c595-4a16-ab30-cc79dba2fa54",

        rodada2Acerto:
            "https://github.com/user-attachments/assets/bc216878-bda4-4da1-90cd-d565ba19e604",

        rodada2Erro:
            "https://github.com/user-attachments/assets/ba712dae-8568-40f9-aaf4-8b71be4d5323",

        rodada3:
            "https://github.com/user-attachments/assets/00a58494-e49d-43ec-8423-fa0f76443381"

    };



    /* ==================================================
       PLACAR
    ================================================== */

    let acertos = 0;

    let erros = 0;



    /* ==================================================
       MÚSICA SELECIONADA
    ================================================== */

    let musicaSelecionada = null;

    let rodadaAtual = 0;



    /* ==================================================
       TELAS
    ================================================== */

    const telas = {

        inicio:
            document.getElementById("inicio"),

        regras:
            document.getElementById("regras"),

        rodada1:
            document.getElementById("rodada1"),

        rodada2:
            document.getElementById("rodada2"),

        rodada3:
            document.getElementById("rodada3"),

        final1:
            document.getElementById("final1"),

        final2:
            document.getElementById("final2"),

        final:
            document.getElementById("final")

    };



    /* ==================================================
       BOTÕES
    ================================================== */

    const btnSimbora =
        document.getElementById("btnSimbora");

    const btnComecar =
        document.getElementById("btnComecar");

    const btnContinuar =
        document.getElementById("btnContinuar");

    const btnIrMensagem =
        document.getElementById("btnIrMensagem");



    /* ==================================================
       PLACAR DURANTE O JOGO
    ================================================== */

    const placarDuranteJogo =
        document.getElementById(
            "placarDuranteJogo"
        );



    /* ==================================================
       MOSTRAR TELA
    ================================================== */

    function mostrarTela(tela) {

        Object.values(telas).forEach(
            function (elemento) {

                elemento.classList.add(
                    "escondido"
                );

            }
        );


        tela.classList.remove(
            "escondido"
        );

    }



    /* ==================================================
       ATUALIZAR PLACAR
    ================================================== */

    function atualizarPlacar() {

        const acertosDuranteJogo =
            document.getElementById(
                "acertosDuranteJogo"
            );


        const errosDuranteJogo =
            document.getElementById(
                "errosDuranteJogo"
            );


        const placarAcertos =
            document.getElementById(
                "placarAcertos"
            );


        const placarErros =
            document.getElementById(
                "placarErros"
            );


        acertosDuranteJogo.textContent =
            acertos;


        errosDuranteJogo.textContent =
            erros;


        placarAcertos.textContent =
            acertos;


        placarErros.textContent =
            erros;

    }



    /* ==================================================
       CRIAR RODADA
    ================================================== */

    function criarRodada(numeroRodada) {


        rodadaAtual =
            numeroRodada;


        musicaSelecionada =
            null;


        const numeroTela =
            numeroRodada + 1;


        const rodada =
            rodadas[numeroRodada];


        const container =
            document.getElementById(
                "opcoesRodada" + numeroTela
            );


        const resultado =
            document.getElementById(
                "resultado" + numeroTela
            );


        const btnEscolher =
            document.getElementById(
                "btnEscolher" + numeroTela
            );


        const btnProximo =
            document.getElementById(
                "btnProximo" + numeroTela
            );



        /* Limpa */

        container.innerHTML = "";

        resultado.innerHTML = "";



        /* Esconde botões */

        btnEscolher.classList.add(
            "escondido"
        );

        btnEscolher.disabled =
            true;


        btnProximo.classList.add(
            "escondido"
        );



        /* ==================================================
           CRIA CARTÕES
        ================================================== */

        rodada.musicas.forEach(
            function (musica) {


                const bloco =
                    document.createElement(
                        "div"
                    );


                bloco.className =
                    "opcaoMusica";



                /* NOME */

                const nome =
                    document.createElement(
                        "span"
                    );


                nome.className =
                    "nomeMusica";


                nome.textContent =
                    musica.nome;



                /* ARTISTA */

                const artista =
                    document.createElement(
                        "span"
                    );


                artista.className =
                    "artista";


                artista.textContent =
                    musica.artista;



                /* ==================================================
                   OUVIR
                ================================================== */

                const ouvir =
                    document.createElement(
                        "a"
                    );


                ouvir.className =
                    "linkMusica";


                ouvir.href =
                    musica.link;


                ouvir.target =
                    "_blank";


                ouvir.rel =
                    "noopener noreferrer";


                ouvir.textContent =
                    "▶ Ouvir música";



                /* ==================================================
                   SELECIONAR
                ================================================== */

                const selecionar =
                    document.createElement(
                        "button"
                    );


                selecionar.type =
                    "button";


                selecionar.className =
                    "btnSelecionar";


                selecionar.textContent =
                    "SELECIONAR";



                selecionar.addEventListener(
                    "click",
                    function () {


                        /* Remove seleção anterior */

                        container
                            .querySelectorAll(
                                ".opcaoMusica"
                            )
                            .forEach(
                                function (item) {

                                    item.classList.remove(
                                        "selecionada"
                                    );

                                }
                            );


                        /* Seleciona este */

                        bloco.classList.add(
                            "selecionada"
                        );


                        /* Guarda música */

                        musicaSelecionada =
                            musica;


                        /* Mostra ESCOLHER */

                        btnEscolher.classList.remove(
                            "escondido"
                        );


                        btnEscolher.disabled =
                            false;

                    }
                );



                /* Monta cartão */

                bloco.appendChild(
                    nome
                );

                bloco.appendChild(
                    artista
                );

                bloco.appendChild(
                    ouvir
                );

                bloco.appendChild(
                    selecionar
                );


                container.appendChild(
                    bloco
                );

            }
        );

    }



    /* ==================================================
       CONFIRMAR ESCOLHA
    ================================================== */

    function confirmarEscolha() {


        if (
            musicaSelecionada === null
        ) {

            return;

        }


        const numeroTela =
            rodadaAtual + 1;


        const container =
            document.getElementById(
                "opcoesRodada" + numeroTela
            );


        const btnEscolher =
            document.getElementById(
                "btnEscolher" + numeroTela
            );


        const btnProximo =
            document.getElementById(
                "btnProximo" + numeroTela
            );



        /* Impede nova escolha */

        container
            .querySelectorAll(
                ".btnSelecionar"
            )
            .forEach(
                function (botao) {

                    botao.disabled =
                        true;

                }
            );


        btnEscolher.disabled =
            true;



        /* ==================================================
           PLACAR
        ================================================== */

        if (
            musicaSelecionada.correta
        ) {

            acertos++;

        } else {

            erros++;

        }


        atualizarPlacar();



        /* ==================================================
           MOSTRA RESULTADO
        ================================================== */

        mostrarResultado(
            musicaSelecionada.correta,
            rodadaAtual
        );



        /* Mostra próximo */

        btnProximo.classList.remove(
            "escondido"
        );

    }



    /* ==================================================
       MOSTRAR RESULTADO
    ================================================== */

    function mostrarResultado(
        acertou,
        numeroRodada
    ) {


        const resultado =
            document.getElementById(
                "resultado" +
                (numeroRodada + 1)
            );


        let imagem;



        if (
            numeroRodada === 0
        ) {

            imagem =
                acertou
                    ? imagens.rodada1Acerto
                    : imagens.rodada1Erro;

        }


        else if (
            numeroRodada === 1
        ) {

            imagem =
                acertou
                    ? imagens.rodada2Acerto
                    : imagens.rodada2Erro;

        }


        else {

            imagem =
                imagens.rodada3;

        }



        resultado.innerHTML = `

            <img
                src="${imagem}"
                class="imagem"
                alt="Resultado da rodada"
            >

        `;

    }



    /* ==================================================
       SIMBORA
    ================================================== */

    btnSimbora.addEventListener(
        "click",
        function () {

            mostrarTela(
                telas.regras
            );

        }
    );



    /* ==================================================
       COMEÇAR
    ================================================== */

    btnComecar.addEventListener(
        "click",
        function () {


            acertos = 0;

            erros = 0;


            atualizarPlacar();


            placarDuranteJogo.classList.remove(
                "escondido"
            );


            criarRodada(0);


            mostrarTela(
                telas.rodada1
            );

        }
    );



    /* ==================================================
       ESCOLHER - RODADA 1
    ================================================== */

    document
        .getElementById("btnEscolher1")
        .addEventListener(
            "click",
            confirmarEscolha
        );



    /* ==================================================
       ESCOLHER - RODADA 2
    ================================================== */

    document
        .getElementById("btnEscolher2")
        .addEventListener(
            "click",
            confirmarEscolha
        );



    /* ==================================================
       ESCOLHER - RODADA 3
    ================================================== */

    document
        .getElementById("btnEscolher3")
        .addEventListener(
            "click",
            confirmarEscolha
        );



    /* ==================================================
       PRÓXIMO - RODADA 1
    ================================================== */

    document
        .getElementById("btnProximo1")
        .addEventListener(
            "click",
            function () {

                criarRodada(1);

                mostrarTela(
                    telas.rodada2
                );

            }
        );



    /* ==================================================
       PRÓXIMO - RODADA 2
    ================================================== */

    document
        .getElementById("btnProximo2")
        .addEventListener(
            "click",
            function () {

                criarRodada(2);

                mostrarTela(
                    telas.rodada3
                );

            }
        );



    /* ==================================================
       PRÓXIMO - RODADA 3
    ================================================== */

    document
        .getElementById("btnProximo3")
        .addEventListener(
            "click",
            function () {


                /*
                 * Depois da terceira rodada:
                 * pergunta antes da revelação final.
                 */

                placarDuranteJogo.classList.add(
                    "escondido"
                );


                mostrarTela(
                    telas.final1
                );

            }
        );



    /* ==================================================
       CONTINUAR - PERGUNTA
    ================================================== */

    btnContinuar.addEventListener(
        "click",
        function () {

            atualizarPlacar();


            mostrarTela(
                telas.final2
            );

        }
    );



    /* ==================================================
       CONTINUAR - MENSAGEM
    ================================================== */

    btnIrMensagem.addEventListener(
        "click",
        function () {


            mostrarTela(
                telas.final
            );


            const video =
                document.getElementById(
                    "videoFinal"
                );


            if (video) {

                video.currentTime = 0;


                video.play().catch(
                    function () {

                        /*
                         * O navegador pode bloquear
                         * autoplay em alguns casos.
                         *
                         * Como o vídeo está muted,
                         * normalmente funciona.
                         */

                    }
                );

            }

        }
    );



    /* ==================================================
       INICIALIZAÇÃO
    ================================================== */

    atualizarPlacar();

});
