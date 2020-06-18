
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Dischi Ajax</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.2/handlebars.min.js"></script>
        <link rel="stylesheet" href="../public/app.css">
    </head>
    <body>
        <header>
            <div class="header-container container">
                <div class="img">
                    <img src="data:image/jpeg;base64,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" alt="logo-musica">
                </div>
                <div class="dropdown">
                    <select class="seleziona-genere">
                        <option value="">Tutti i generi</option>
                        <option value="Pop">Pop</option>
                        <option value="Rock">Rock</option>
                        <option value="Metal">Metal</option>
                        <option value="Jazz">Jazz</option>
                    </select>
                </div>
            </div>
        </header>
        <main class="container">
            
        </main>

        <!-- Handlebars     -->
        <script id="entry-template" type="text/x-handlebars-template">
            <div class="cd" data-genere="{{genere}}">
                <img src="{{copertina}}" alt="{{titolo}}">
                <h3>{{titolo}}</h3>
                <span class="author">{{autore}}</span>
                <span class="year">{{anno}}</span>
            </div>
        </script>

        <!-- javascript e jquery -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="../public/app.js" charset="utf-8"></script></body>
    </body>
</html>
