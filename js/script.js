/* Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */

const { createApp } = Vue

createApp({

    data() {
        return {
            emails:[],
            apiUrl:'https://flynn.boolean.careers/exercises/api/random/mail', 
        }
    },

    methods: {
        getRandomEmail(){

            //genero dieci email 
            for(let i = 0; i < 10; i++) {

                //ricevo la mail generata dall'Api tramite ajax call per mezzo di axios e metodo GET
                 axios.get(this.apiUrl)
                 .then(response => {

                    //insersco le mail nel mio array
                    this.emails.push(response.data.response);
                 });
            }
        },
    },
    
    mounted() {
        this.getRandomEmail();
    },

}).mount('#app')


