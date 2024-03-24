import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js' // bundle = bs + popper

var button = document.getElementById("offcanvas-toggler")
var offcanvas_el = document.getElementById("offcanvasMainNavbar")
offcanvas_el.addEventListener('show.bs.offcanvas', function () {
    button.classList.add('show')
})
// handle case when sidebar is closed internally using `X`
offcanvas_el.addEventListener('hide.bs.offcanvas', function () {
    button.classList.remove('show')
})

