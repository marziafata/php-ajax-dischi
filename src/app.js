var $ = require('jquery');

$(document).ready(function() {

    //dichiaro le variabili che mi serviranno con Handlebars
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);
    
    //faccio partire la chiamata ajax
    $.ajax({
        'url': 'dischi.php',//percorso file che contiene l'array di dati che mi serve (se non funziona potrei diver scrivere il percorso a partire da localhost)
        'method': 'GET',
        'success': function(data) {
            gestisci_dati(data);   
        },
        'error': function() {
            console.log('Si è verificato un errore!');   
        }
    });

    //funzione che cicla tutti i dischi contenuti nell'array
    //parametro => array dei dischi
    function gestisci_dati(dischi) {
        //ciclo l'array per tirare fuori i singoli elementi
        for (let index = 0; index < dischi.length; index++) {
            //salvo l'elemento corrente in una variabile
            const element = dischi[index];
            
            //richiamo la funzione disegna card passando come parametro l'elemento corrente
            disegna_card(element);
        } 
    }

    // funzione per disegnare la card in pagina
    // parametro => il singolo disco (oggetto)
    function disegna_card(disco) {
        //creo l'oggetto context che contiene le proprietà (compilate con la dot notation) da dare ad Handlebars per compilare le card
        var context = {
            "copertina" : disco.poster,
            "titolo" : disco.title,
            "autore" : disco.author,
            "anno" : disco.year
        };

        // Creo la variabile delle card che contengono il template compilato con handlebars
        var html = template(context);

        //appendo le card al container già creato
        $('main.container').append(html);
    }
        
});
