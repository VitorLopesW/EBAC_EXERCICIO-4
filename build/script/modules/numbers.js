
let numbers
let oscarTextNum = 1
let numTrigger = false
numbers = `
    <div class='numbers flex-centralize' id='numbers'>
        <div>
            <h2 id='oscarText'>
                ...
            </h2>
        </div>
        <div class='numbers__oscars'>
            <img src='assets/images/oscar.svg' alt='Oscars' id='oscar1' class='oscars'>
            <img src='assets/images/oscar.svg' alt='Oscars' id='oscar2' class='oscars'>
            <img src='assets/images/oscar.svg' alt='Oscars' id='oscar3' class='oscars'>
            <img src='assets/images/oscar.svg' alt='Oscars' id='oscar4' class='oscars'>
            <img src='assets/images/oscar.svg' alt='Oscars' id='oscar5' class='oscars'>
            <img src='assets/images/oscar.svg' alt='Oscars' id='oscar6' class='oscars'>
            <img src='assets/images/oscar.svg' alt='Oscars' id='oscar7' class='oscars'>
            <img src='assets/images/oscar.svg' alt='Oscars' id='oscar8' class='oscars'>
        </div>
        <div class='numbers__winners' id='numbersWinners'>
            <h2>
                Melhor roteiro adaptado.
            </h2>
        </div>
    </div>
`

window.addEventListener('scroll', async () => {
    if(numTrigger) return
    //numbers top
    let numbers = document.getElementById('numbers')
    let numbersTop = numbers.getBoundingClientRect().top
    //
    const windowWidth = window.innerWidth
    //
    const smartphones = 425
    const tablets = 768
    const laptops = 1024
    const laptopsL = 1440
    const desktops = 1920
    //
    if(windowWidth > desktops){
        var ActiveEffect = numbersTop <= 1800
    }
    else if(windowWidth > laptopsL && windowWidth <= desktops){
        var ActiveEffect = numbersTop <= 1500
    }
    else if(windowWidth > laptops && windowWidth <= laptopsL){
        var ActiveEffect = numbersTop <= 1050
    }
    else if(windowWidth > tablets && windowWidth <= laptops){
        var ActiveEffect = numbersTop <= 950
    }
    else if(windowWidth > smartphones && windowWidth <= tablets){
        var ActiveEffect = numbersTop <= 700
    }
    else if(windowWidth <= smartphones){
        var ActiveEffect = numbersTop <= 400
    }
    


    if (ActiveEffect) {
        numTrigger = true
        let oscars = document.querySelectorAll('.oscars');
        (async () => {
            for (const oscar of oscars) {
                const div = $('#' + oscar.id)
                div.click((clickedDiv) => {
                    const id = clickedDiv.target.id
                    if(id === 'oscar1') $('#numbersWinners').html('<h2>Melhor roteiro adaptado.</h2>')
                    else if(id === 'oscar2') $('#numbersWinners').html('<h2>Melhor som.</h2>')
                    else if(id === 'oscar3') $('#numbersWinners').html('<h2> Melhores efeitos visuais.</h2>')
                    else if(id === 'oscar4') $('#numbersWinners').html('<h2> Melhor trilha sonora.</h2>')
                    else if(id === 'oscar5') $('#numbersWinners').html('<h2>Melhor design de produção.</h2>')
                    else if(id === 'oscar6') $('#numbersWinners').html('<h2>Melhor maquiagem e penteados.</h2>')
                    else if(id === 'oscar7') $('#numbersWinners').html('<h2>Melhor fotografia.</h2>')
                    else if(id === 'oscar8') $('#numbersWinners').html('<h2>Melhor filme internacional.</h2>')
                })
                // animation
                div.css({
                    'opacity': '1'
                })
                .animate({
                     'scale': '1.005'
                }, 'fast')
                oscarText.innerHTML = 'Ganhador de ' + oscarTextNum + ' Oscars!'
                oscarTextNum++
                await new Promise(resolve => setTimeout(resolve, 200))
            }
            $('#numbersWinners').animate({
                'opacity': '1'
            },'slow')
        })();
    }
})



export default numbers
