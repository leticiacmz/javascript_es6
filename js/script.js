//lazy evaluation
function randomNumber (){
    console.log('generating a random number...');
    return Math.random() * 10;
}
function multiply (a, b = randomNumber()) {
    return a *b;
}
   
}
console.log(multiply(5));
console.log(multiply(5));

/*
var obj = {
    showContext: function showContext() {
        //this = obj

        setTimeout(() => {
            this.log('after 1000ms');
        }, 1000);
    },
            log: function log(value) {

                console.log(value);
            }
    };
    obj.showContext(); */



/* var obj = {
        showContext: function showContext() {
            this.log('teste');

            setTimeout(
                function() {

                        this.log('after 1000ms');
                    } .bind(this), //foca nisso pra resolver problemas
                     1000
                     );
                },
                log: function log(value) {

                    console.log(value);
                }
        };
        obj.showContext(); */



        /* var sum0ld = function(a, b) {

                                                    return a + b;
                                                    };
                                                    */

        //Arrow Functions 
        /*
        var sum = (a, b) => {

        var x = 10;
        if (a > b) {

        }
        return a + b;
        }
        */

        //var sum = (a, b) => a + b;
        //console.log(sum(5, 15));

        /*
                                    var log = function(value) {

                                    console.log(value);
                                    };

                                    log('test');
                                    */

        /* var meunumero = 20;
                                   var meutexto = ' exemplo';

                                   console.log(meunumero + meutexto);
                                   */