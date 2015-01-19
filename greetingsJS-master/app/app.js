/**
 * Created by http://rhizomik.net/~roberto/
 */

(function(){
    var app = angular.module("greetingsJS", ["greetingTab","greetingForm"]);

    app.controller("GreetingsController", ["$http",
        function($http) {
            this.GREETINGS_API = "http://localhost:8383/greetings";
            this.newGreeting = {'date': Date.now()};
            this.loading = false;
            var greetingCtrl = this;

            this.isLoading = function(){
                return this.loading;
            };

            this.noGreetings = function(){
                return this.greetings === undefined;
            }

            this.listGreetings = function(){
                this.loading = true;
                $http.get(this.GREETINGS_API)
                    .success(function (data) {
                        greetingCtrl.greetings = data;
                    });
            };

            this.addGreeting = function(){
                $http.post(this.GREETINGS_API, this.newGreeting)
                    .then(function(){
                        greetingCtrl.newGreeting = {'date': Date.now()};
                        greetingCtrl.listGreetings();
                    });
            };
        }]);

    var appm = angular.module("moviesJS", []);

    var gem = {
        name: 'Dodecahedron',
        price: 2.95,
        description: '. . .',
    }

    var movies = [

        {
        name: 'La vita è bella',
        author: 'Roberto Benigni',
        description: "Italia fascista, 1938. Guido Orefice è un uomo ebreo che, trasferitosi dalla campagna toscana, si reca dallo zio ad Arezzo con l'amico Ferruccio e durante il tragitto, dove viene scambiato per il re Vittorio Emanuele III, incontra una giovane maestra elementare di nome Dora, a cui subito dà il soprannome di principessa, innamorandosene",
        reviews: [{
                stars: 5,
                body: "I love this film!",
                author: "joe@example.org",
                createdOn: 1397490980837
            }, {
                stars: 1,
                body: "This gem sucks.",
                author: "tim@example.org",
                createdOn: 1397490980837
            }],
        notes: [{
            stars: 5,
            body: "how to pain!"
            }, {
            stars: 1,
            body: "how to play football"
            }]
        }
        ,
        {
            name: 'La vita è bella 2',
            author: 'Roberto Benigni',
            description: "Italia fascista, 1938. Guido Orefice è un uomo ebreo che, trasferitosi dalla campagna toscana, si reca dallo zio ad Arezzo con l'amico Ferruccio e durante il tragitto, dove viene scambiato per il re Vittorio Emanuele III, incontra una giovane maestra elementare di nome Dora, a cui subito dà il soprannome di principessa, innamorandosene",
            reviews: [],
            notes: []
        }
        ,
        {
            name: 'La vita è bella 3',
            author: 'Roberto Benigni',
            description: "Italia fascista, 1938. Guido Orefice è un uomo ebreo che, trasferitosi dalla campagna toscana, si reca dallo zio ad Arezzo con l'amico Ferruccio e durante il tragitto, dove viene scambiato per il re Vittorio Emanuele III, incontra una giovane maestra elementare di nome Dora, a cui subito dà il soprannome di principessa, innamorandosene",
            reviews: [{
                stars: 5,
                body: "I love this film!",
                author: "joe@example.org",
                createdOn: 1397490980837
            }, {
                stars: 1,
                body: "This film sucks.",
                author: "tim@example.org",
                createdOn: 1397490980837
            }],
            notes: []
        }
        ,
        {
            name: 'La vita è bella 4',
            author: 'Roberto Benigni',
            description: "Italia fascista, 1938. Guido Orefice è un uomo ebreo che, trasferitosi dalla campagna toscana, si reca dallo zio ad Arezzo con l'amico Ferruccio e durante il tragitto, dove viene scambiato per il re Vittorio Emanuele III, incontra una giovane maestra elementare di nome Dora, a cui subito dà il soprannome di principessa, innamorandosene",
            reviews: [{
                stars: 5,
                body: "I love this film 4!",
                author: "joe@example.org",
                createdOn: 1397490980837
            }, {
                stars: 1,
                body: "bad.",
                author: "tim@example.org",
                createdOn: 1397490980837
            }],
            notes: []
        }
    ]

    appm.controller("MoviesController", function(){
        this.product = gem;

        this.movies = movies;
        });


    appm.controller("TabController", function() {
        this.tab = 1;

        this.isSet = function(checkTab) {
            return this.tab === checkTab;
        };

        this.setTab = function(setTab) {
            this.tab = setTab;
        };
    });

    appm.controller("ReviewController", function(){

        this.review = {};

        this.addReview = function(movie){
            movie.reviews.push(this.review);
            this.review = {};
        };
    });


    appm.controller("NoteController", function(){

        this.note = {};

        this.addNote = function(movie){
            movie.notes.push(this.note);
            this.note = {};
        };
    });



    var appmm = angular.module("serverMoviesJS", ["greetingTab","greetingForm"]);

    appmm.controller("MoviesController", ["$http",
        function($http) {

            this.GREETINGS_API = "http://localhost:8383/greetings";

            this.OMDB_API = "http://www.omdbapi.com/?s=Rambo";

            this.newGreeting = {'date': Date.now()};
            this.loading = false;
            var greetingCtrl = this;

            this.isLoading = function(){
                return this.loading;
            };

            this.noMovies = function(){
                return this.greetings === undefined;
            }
            // preleva i dati con metodo get poi li elabora dopo il gree tab
            this.listMovies = function(){
                this.loading = true;
                $http.get(this.GREETINGS_API)
                    .success(function (data) {
                        greetingCtrl.greetings = data;
                    });
            };

            // preleva i dati con metodo get poi li elabora dopo il gree tab
            this.mylistMovies = function(){
                this.loading = true;
                $http.get(this.OMDB_API)
                    .success(function (data) {
                        greetingCtrl.greetings = data;
                    });
            };











            this.addGreeting = function(){
                $http.post(this.GREETINGS_API, this.newGreeting)
                    .then(function(){
                        greetingCtrl.newGreeting = {'date': Date.now()};
                        greetingCtrl.listGreetings();
                    });
            };





        }]);



    var gem = {
        name: 'Dodecahedron',
        price: 2.95,
        description: '. . .',
    }

    appmm.controller("MovieseController", function(){
        this.product = gem;

        this.movies = movies;
    });





}());
