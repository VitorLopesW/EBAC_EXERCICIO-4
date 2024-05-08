
let summary
summary = `
    <div class='summary flex-centralize' id='summary'>
        <div class='summary__container' id='summaryContainer'>
            <div class='summary__container__content' id='summaryContent'>
                <div class='summary__container__content__SaibaMais'>
                    <h2 id='saibaMaisButton'>
                        Saiba Mais
                    </h2>
                    <div class='summary__container__content__SaibaMais__text' id='summaryText'>
                        <div class='cdk'>
                            <div class='cdk__left cdk__click'>
                                <
                            </div>
                            <div class='cdk__1'>
                                <h3 id='cdkTitle'>
                                    Sinopse
                                </h3>
                                <p id='cdkP'>
                                Em uma adaptação do romance homônimo de Erich Maria Remarque, Nada de Novo no Front é uma história que segue o adolescente Paul Baumer e seus amigos Albert e Muller, que se alistam voluntariamente no exército alemão, movidos por uma onda de fervor patriótico. Mas isso é rapidamente dissipado quando enfrentam a realidade brutal da vida no front. Os preconceitos de Paul sobre o inimigo e os acertos e erros do conflito logo os desequilibram. No entanto, em meio à contagem regressiva, Paul deve continuar lutando até o fim, com nenhum objetivo além de satisfazer o desejo do alto escalão de acabar com a guerra com uma ofensiva alemã.
                                </p>
                            </div>
                            <div class='cdk__right cdk__click'>
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <video autoplay muted id='summaryVid'>
                <source src="assets/videos/trailer.mp4" type="video/mp4">
            </video>
        </div>
    </div>
`
export function loadSummary() {
    const container = $('#summaryContainer')
    const summary = $('.summary')
    const width = container.width()
    // ruler of 3 calc for height
    const x = (width * 9) / 21
    const height = x.toFixed(2)
    container.css({
        'height': `${height}px`,
    }) 
    const vid = $('#summaryVid')
    vid.css({
        width: `${width}px`,
        bottom: `-${height/6}px`,
        scale: 1.1,
        zIndex: -1,
    })
    //
    const content = $('#summaryContent')
    content.css({
        width: `${width}px`,
        height: `${height}px`,
    })
    //
    const saibaMais = $('#saibaMaisButton')
    saibaMais.on('click', function() {
        console.log('a')
        saibaMais.css({
            display: 'none',
        })
        const textContainer = $('#summaryText')
        textContainer.slideDown(500)
    })  
    // cdk
    const cdk = $('.cdk')
    const cdkHeight = summary.height()
    console.log(cdkHeight)

    cdk.css({
        height: `${cdkHeight}px`,
    })
    let cdkIndex = 0
    function changeCdk(arg){
        const index = [
            [
                'Sinopse',
                'Em uma adaptação do romance homônimo de Erich Maria Remarque, Nada de Novo no Front é uma história que segue o adolescente Paul Baumer e seus amigos Albert e Muller, que se alistam voluntariamente no exército alemão, movidos por uma onda de fervor patriótico. Mas isso é rapidamente dissipado quando enfrentam a realidade brutal da vida no front. Os preconceitos de Paul sobre o inimigo e os acertos e erros do conflito logo os desequilibram. No entanto, em meio à contagem regressiva, Paul deve continuar lutando até o fim, com nenhum objetivo além de satisfazer o desejo do alto escalão de acabar com a guerra com uma ofensiva alemã.'
                
            ],
            [
                'ADORO CINEMA (⭐⭐⭐⭐)',
                'Filmes que retratam a guerra não são nenhuma novidade na indústria cinematográfica, considerando que muitos clássicos do cinema exploram essa temática a partir de diferentes perspectivas e épocas, como se notabilizaram Glória Feita de Sangue (1957), Apocalypse Now (1979), Vá e Veja (1985), O Resgate do Soldado Ryan (1998) e, até mais recentemente, Dunkirk (2017) e 1917 (2019). Nada de Novo no Front (2022) é mais um desses casos, uma produção alemã com uma visão mais realista e sem romantização sobre os horrores da guerra, no caso aqui a Primeira Guerra Mundial.Nada de Novo no Front foi indicado a 9 Oscars, incluindo as categorias principais de Melhor Filme, Melhor Roteiro Adaptado e Melhor Filme Internacional, o que o coloca como um dos maiores destaques da temporada de premiações de 2023.'
            ],
            [
                'Travers Petterson [Marvell News] (⭐⭐⭐⭐⭐)',
                'O momento do Oscar é ideal para colocar em dia o épico anti-guerra feroz de Edward Berger sobre jovens soldados alemães morrendo nas trincheiras da Primeira Guerra Mundial. O filme em língua alemã conta com impressionantes nove indicações, incluindo Melhor Filme, e tragicamente sua mensagem nunca fica velha.'
            ],
            [
                'Peter Barn [Sydney News] (⭐⭐⭐⭐⭐)',
                'O filme é uma adaptação do romance homônimo de Erich Maria Remarque, que foi publicado em 1929 e é considerado um dos mais importantes romances anti-guerra já escritos. O filme é uma obra-prima, uma das melhores adaptações de um livro para o cinema que eu já vi. O diretor Edward Berger fez um trabalho incrível, capturando a essência do livro e trazendo-o para a tela de uma forma que é emocionante e poderosa.'
            ],
            [
                'Luan Specter [Guardian Angel] (⭐⭐⭐⭐)',
                'Podemos dizer que Nada de Novo no Front é um filme que não tem medo de mostrar a realidade da guerra. O filme é brutal, violento e perturbador, mas também é incrivelmente emocionante e poderoso. É um filme que vai fazer você pensar, que vai fazer você sentir, e que vai fazer você questionar o que significa ser humano. É um filme que vai ficar com você muito tempo depois de terminar de assisti-lo.'
            ]
        ]
        cdkIndex += arg
        if(cdkIndex < 0) cdkIndex = 4
        if(cdkIndex > 4) cdkIndex = 0
        const cdkTitle = $('#cdkTitle')
        const cdkP = $('#cdkP')
        cdkTitle.text(index[cdkIndex][0])
        cdkP.text(index[cdkIndex][1])
    }
    const cdkLeft = $('.cdk__left')
    const cdkRight = $('.cdk__right')
    cdkLeft.on('click', function() {
        changeCdk(-1)
    })
    cdkRight.on('click', function() {
        changeCdk(1)
    })
    //


};

export default summary

