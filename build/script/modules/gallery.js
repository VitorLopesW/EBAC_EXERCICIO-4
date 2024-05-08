
let gallery

const imageLinks = 
[
    'assets/images/foto1.jpeg',
    'assets/images/foto2.jpeg',
    'assets/images/foto3.jpg',
    'assets/images/foto4.jpg',
    'assets/images/foto5.png',
    'assets/images/foto6.jpg',
]

gallery = `
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        </div>
        <div class="modal-footer">
        </div>
        </div>
    </div>
    </div>

    <div class='gallery flex-centralize' id='gallery'>
        <div class='container'>
            <div class='row'>
                <div class='col col-6  col-md-6 col-xl-3'>
                <img class='gallery-image' src="${imageLinks[0]}" alt="Foto 1"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                </div>
                <div class='col col-6  col-md-6 col-xl-3'>
                    <img class='gallery-image' src="${imageLinks[1]}" alt="Foto 2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                </div>
                <div class='col col-6  col-md-6 col-xl-3'>
                    <img class='gallery-image' src="${imageLinks[2]}" alt="Foto 3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                </div>
                <div class='col col-6  col-md-6 col-xl-3'>
                    <img class='gallery-image' src="${imageLinks[3]}" alt="Foto 4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                </div>
                <div class='col col-6  col-md-6 col-xl-3'>
                    <img class='gallery-image' src="${imageLinks[4]}" alt="Foto 5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                </div>
                <div class='col col-6  col-md-6 col-xl-3'>
                    <img class='gallery-image' src="${imageLinks[5]}" alt="Foto 6" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                </div>
            </div>
        </div>
    <div>
`

export function loadGallery() {
    console.log("e")
    $('.gallery-image').on('click', (e) => {
        $('.modal-body').html(`<img src="${e.target.src}" alt="Foto" class="img-fluid">`)
    })
}


export default gallery
