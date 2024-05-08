// importar sessões para o website.
        import hero from './modules/hero.js'
        import numbers from './modules/numbers.js'
        import summary from './modules/summary.js'
        import lines from './modules/lines.js'
        import watch from './modules/watch.js'
        // GALERIA COM PROBLEMA, DESABILITA O SUMARIO
        //import gallery from './modules/gallery.js'

// Adicionar sessões, no website.
        function addSession(sessions) {
            let main = $('main')
            //
            sessions.forEach(session => {
                main.append(
                    `
                    <section>
                        ${session}
                    </section>
                    `
                )
            })
            //
        }

// Se necessario adicionar um espaço em branco, para facilitar o desenvolvimento.
const blankSpace = '<div class="blank-space"></div>'

        addSession(
            [
                hero,
                /**/lines,
                summary,
                /**/lines,
                numbers,
                /**/lines,
                //gallery,
                /**/lines,
                watch,
                /**/lines,
            ]
        ) 
//