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
            //ciclo l'array per tirare fuori i singoli elementi
            for (let index = 0; index < data.length; index++) {
                //salvo l'elemento corrente in una variabile
                const element = data[index];
                
                //creo l'oggetto context che contiene le proprietà (compilate con la dot notation) da dare ad Handlebars per compilare le card
                var context = {
                    "copertina" : element.poster,
                    "titolo" : element.title,
                    "autore" : element.author,
                    "anno" : element.year
                };

                // Creo la variabile delle card che contengono il template compilato con handlebars
                var disco = template(context);

                //appendo le card al container già creato
                $('main.container').append(disco);
            }   
        },
        'error': function() {
            console.log('Si è verificato un errore!');   
        }
    });
        
});
