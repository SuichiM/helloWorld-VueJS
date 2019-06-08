const app = new Vue({
    el: '#app',
    template: '#ejemplo',
    data: {
        cursos: [
            { name: "Google.com", url: "http://www.google.com" },
            { name: "Wikipedia.com", url: "http://www.wikipedia.com" }
        ],
        mostrar: true,
        mensaje: 'Hola Vue.js',
        imagen: "http://laravelacademy.org/wp-content/uploads/2016/08/00-featured-vuejs-logo-simple-256x128.jpg",
        altimg: "Vue.JS"

    },
    methods: {
        toggleMostrar: function () {
            this.mostrar = !this.mostrar
        }
    }
})