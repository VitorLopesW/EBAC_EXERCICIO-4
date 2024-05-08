
let hero

hero = `
    <div class='hero flex-centralize' id='hero'>
        <div class='hero__foreground'>
            <div class='hero__foreground__scrollGradient'></div>
            <div class='hero__foreground__logo' id='logoHero'>

                <h1>
                Im
                </h1>

                <h1>
                    Westen
                </h1>
                
                <h1>
                    nichts Neues
                </h1>

            </div>
        </div>
        <div class='hero__imgGradient'>
            <img src="assets/images/hero.jpg" alt="Hero Image">
        </div>
    </div>
`

// add animations to hero
window.addEventListener('scroll', () => {
    // hero position
        const hero = document.getElementById('hero')
        const rect = hero.getBoundingClientRect()
        const heroTop = rect.top
        //console.log(heroTop)
    // windows width
        const windowWidth = window.innerWidth
    // Full HD Screens
        if(windowWidth <= 1920){
            if(heroTop <= -100){
                const percentage = 100 + ((heroTop + 100) / 5)
                hero.style.opacity = percentage + '%'
                //console.log(percentage)
            }else{
                hero.style.opacity = 1;
            }
        }

    //

})
//

export default hero
