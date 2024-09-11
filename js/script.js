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
            email:'',
            apiUrl:'https://flynn.boolean.careers/exercises/api/random/mail', 
        }
    },

    methods: {
        getRandomEmail(){
            axios.get(this.apiUrl)
            .then(response => {
                this.email = response.data.response;
                console.log(response.data.response)
            });
        },
    },
    mounted() {
        this.getRandomEmail();
        
    },
}).mount('#app')


