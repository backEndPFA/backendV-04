$('a').removeClass('active');
$('a:contains(Statistiques)').addClass('active');
$("#main-content").load("page/statistiques.html");

function show(page) {

    if (page == "statistiques") {
        $('a').removeClass('active');
        $('a:contains(Statistique)').addClass('active');
        $("#main-content").load("page/statistiques.html");
        event.preventDefault();
    }
    if (page == 'gestionusers') {
        $('a').removeClass('active');
        $('a:contains(User)').addClass('active');
        $("#main-content").load("page/gestionusers.html");

        event.preventDefault();
    }
    if (page == 'ferme') {
        $('a').removeClass('active');
        $('a:contains(Ferme)').addClass('active');
        $("#main-content").load("page/ferme.html");

        event.preventDefault();
    }

    if (page == "parcelle") {
        $('a').removeClass('active');
        $('a:contains(Parcelle)').addClass('active');
        $("#main-content").load("page/parcelle.html");
        event.preventDefault();
    }
    //--
    if (page == "plante") {
        $('a').removeClass('active');
        $('a:contains(Plante)').addClass('active');
        $("#main-content").load("page/plante.html");
        event.preventDefault();
    }
    if (page == "typeplante") {
        $('a').removeClass('active');
        $('a:contains(Type Plantes)').addClass('active');
        $("#main-content").load("page/typeplante.html");
        event.preventDefault();
    }
    if (page == "plantages") {
        $('a').removeClass('active');
        $('a:contains(Plantag)').addClass('active');
        $("#main-content").load("page/plantages.html");
        event.preventDefault();
    }


    if (page == "typeSole") {
        $('a').removeClass('active');
        $('a:contains(Type Sole)').addClass('active');
        $("#main-content").load("page/typeSole.html");
        event.preventDefault();
    }
    if (page == "alerte") {
        $('a').removeClass('active');
        $('a:contains(Alertes)').addClass('active');
        $("#main-content").load("page/alert.html");
        event.preventDefault();
    }



}