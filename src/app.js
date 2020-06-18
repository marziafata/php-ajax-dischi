var $ = require('jquery');

$(document).ready(function() {

    //dichiaro le variabili che mi serviranno con Handlebars
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);
    
    $.ajax({
        'url': 'dischi.php',
        'method': 'GET',
        'success': function(data) {
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                console.log(element);

                var context = {
                    "copertina" : element.poster,
                    "titolo" : element.title,
                    "autore" : element.author,
                    "anno" : element.year
                };

                var disco = template(context);

                $('main.container').append(disco);
                
            
                
            }   
        },
        'error': function() {
            console.log('Si è verificato un errore!');   
        }
    });
        
});
