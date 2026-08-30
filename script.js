document.addEventListener("DOMContentLoaded", function () {


    /* ==================================================
       MÚSICAS
    ================================================== */

    const rodadas = [

        /* =========================
           RODADA 1
        ========================= */

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


        /* =========================
           RODADA 2
        ========================= */

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


        /* =========================
           RODADA 3
        ========================= */

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
       SELEÇÃO ATUAL
    ================================================== */

    let musicaSelecionada = null;

    let rodadaAtual = 0;



    /* ==================================================
       TELAS
    ================================================== */

    const inicio =
        document.getElementById("inicio");

    const regras =
        document.getElementById("regras");

    const rodada1 =
        document.getElementById("rodada1");

    const rodada2 =
        document.getElementById("rodada2");

    const rodada3 =
        document.getElementById("rodada3");

    const final1 =
        document.getElementById("final1");

    const final2 =
        document.getElementById("final2");

    const final =
        document.getElementById("final");



    /* ==================================================
       BOTÕES
    ================================================== */

    const btnSimbora =
        document.getElementById("btnSimbora");

    const btnComecar =
        document.getElementById("btnComecar");

    const btnEscolher1 =
        document.getElementById("btnEscolher1");

    const btnEscolher2 =
        document.getElementById("btnEscolher2");

    const btnEscolher3 =
        document.getElementById("btnEscolher3");

    const btnProximo1 =
        document.getElementById("btnProximo1");

    const btnProximo2 =
        document.getElementById("btnProximo2");

    const btnProximo3 =
        document.getElementById("btnProximo3");

    const btnContinuar =
        document.getElementById("btnContinuar");

    const btnIrMensagem =
        document.getElementById("btnIrMensagem");



    /* ==================================================
       PLACAR
    ================================================== */

    function atualizarPlacar() {

        const elementoAcertos =
            document.getElementById("acertos");

        const elementoErros =
            document.getElementById("erros");

        const placarAcertos =
            document.getElementById("placarAcertos");

        const placarErros =
            document.getElementById("placarErros");


        elementoAcertos.textContent =
            acertos;

        elementoErros.textContent =
            erros;


        if (placarAcertos) {

            placarAcertos.textContent =
                acertos;

        }


        if (placarErros) {

            placarErros.textContent =
                erros;

        }

    }



    /* ==================================================
       MOSTRAR TELA
    ================================================== */

    function mostrarTela(tela) {

        const telas = [

            inicio,

            regras,

            rodada1,

            rodada2,

            rodada3,

            final1,

            final2,

            final

        ];


        telas.forEach(function (elemento) {

            elemento.classList.add(
                "escondido"
            );

        });


        tela.classList.remove(
            "escondido"
        );

    }



    /* ==================================================
       CRIAR RODADA
    ================================================== */

    function criarRodada(numeroRodada) {

        rodadaAtual =
            numeroRodada;


        musicaSelecionada =
            null;


        const numero =
            numeroRodada + 1;


        const rodada =
            rodadas[numeroRodada];


        const container =
            document.getElementById(
                "opcoesRodada" + numero
            );


        const resultado =
            document.getElementById(
                "resultado" + numero
            );


        const btnEscolher =
            document.getElementById(
                "btnEscolher" + numero
            );


        const btnProximo =
            document.getElementById(
                "btnProximo" + numero
            );


        /* Limpa tudo */

        container.innerHTML = "";

        resultado.innerHTML = "";


        /* Reseta botão ESCOLHER */

        btnEscolher.classList.add(
            "escondido"
        );

        btnEscolher.disabled =
            true;


        /* Esconde PRÓXIMO */

        btnProximo.classList.add(
            "escondido"
        );


        /* ==================================================
           CRIA AS MÚSICAS
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



                /* LINK OUVIR */

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



                /* BOTÃO SELECIONAR */

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

                        selecionarMusica(
                            musica,
                            bloco,
                            container,
                            btnEscolher
                        );

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
       SELECIONAR MÚSICA
    ================================================== */

    function selecionarMusica(
        musica,
        bloco,
        container,
        btnEscolher
    ) {


        /* Remove seleção anterior */

        const blocos =
            container.querySelectorAll(
                ".opcaoMusica"
            );


        blocos.forEach(
            function (item) {

                item.classList.remove(
                    "selecionada"
                );

            }
        );


        /* Marca a escolhida */

        bloco.classList.add(
            "selecionada"
        );


        /* Guarda música */

        musicaSelecionada =
            musica;



        /* Mostra botão ESCOLHER */

        btnEscolher.classList.remove(
            "escondido"
        );


        btnEscolher.disabled =
            false;

    }



    /* ==================================================
       CONFIRMAR ESCOLHA
    ================================================== */

    function confirmarEscolha() {


        /* Segurança */

        if (
            musicaSelecionada === null
        ) {

            return;

        }


        const numero =
            rodadaAtual + 1;


        const container =
            document.getElementById(
                "opcoesRodada" + numero
            );


        const resultado =
            document.getElementById(
                "resultado" + numero
            );


        const btnEscolher =
            document.getElementById(
                "btnEscolher" + numero
            );


        const btnProximo =
            document.getElementById(
                "btnProximo" + numero
            );


        /* Impede novas escolhas */

        const botoes =
            container.querySelectorAll(
                ".btnSelecionar"
            );


        botoes.forEach(
            function (botao) {

                botao.disabled =
                    true;

            }
        );


        btnEscolher.disabled =
            true;



        /* ==================================================
           ATUALIZA PLACAR
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
            rodadaAtual,
            resultado
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
        numeroRodada,
        resultado
    ) {


        let imagem;



        /* RODADA 1 */

        if (
            numeroRodada === 0
        ) {

            imagem =
                acertou
                    ? imagens.rodada1Acerto
                    : imagens.rodada1Erro;

        }



        /* RODADA 2 */

        else if (
            numeroRodada === 1
        ) {

            imagem =
                acertou
                    ? imagens.rodada2Acerto
                    : imagens.rodada2Erro;

        }



        /* RODADA 3 */

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
       INÍCIO
    ================================================== */

    btnSimbora.addEventListener(
        "click",
        function () {

            mostrarTela(
                regras
            );

        }
    );



    /* ==================================================
       COMEÇAR
    ================================================== */

    btnComecar.addEventListener(
        "click",
        function () {


            /* Zera placar */

            acertos = 0;

            erros = 0;


            atualizarPlacar();


            criarRodada(0);


            mostrarTela(
                rodada1
            );

        }
    );



    /* ==================================================
       ESCOLHER - RODADA 1
    ================================================== */

    btnEscolher1.addEventListener(
        "click",
        function () {

            confirmarEscolha();

        }
    );



    /* ==================================================
       ESCOLHER - RODADA 2
    ================================================== */

    btnEscolher2.addEventListener(
        "click",
        function () {

            confirmarEscolha();

        }
    );



    /* ==================================================
       ESCOLHER - RODADA 3
    ================================================== */

    btnEscolher3.addEventListener(
        "click",
        function () {

            confirmarEscolha();

        }
    );



    /* ==================================================
       PRÓXIMO - RODADA 1
    ================================================== */

    btnProximo1.addEventListener(
        "click",
        function () {

            criarRodada(1);


            mostrarTela(
                rodada2
            );

        }
    );



    /* ==================================================
       PRÓXIMO - RODADA 2
    ================================================== */

    btnProximo2.addEventListener(
        "click",
        function () {

            criarRodada(2);


            mostrarTela(
                rodada3
            );

        }
    );



    /* ==================================================
       PRÓXIMO - RODADA 3
    ================================================== */

    btnProximo3.addEventListener(
        "click",
        function () {

            /*
             * Depois da terceira rodada,
             * não vai direto para a mensagem.
             *
             * Primeiro aparece a pergunta:
             *
             * "Você deve estar se perguntando..."
             */

            mostrarTela(
                final1
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
                final2
            );

        }
    );



    /* ==================================================
       CONTINUAR - MENSAGEM FINAL
    ================================================== */

    btnIrMensagem.addEventListener(
        "click",
        function () {

            mostrarTela(
                final
            );


            /*
             * Garante que o vídeo comece
             * assim que a tela final aparecer.
             */

            const video =
                document.querySelector(
                    ".videoFinal"
                );


            if (video) {

                video.currentTime = 0;

                video.play().catch(
                    function () {
                        /*
                         * Alguns navegadores podem
                         * bloquear autoplay.
                         * Como o vídeo está muted,
                         * normalmente será permitido.
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
