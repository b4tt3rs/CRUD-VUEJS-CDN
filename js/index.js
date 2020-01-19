const modulo1 = new Vue({
    el: '#modulo1',
    data: {
        titulo: "EJERCICIO CRUD VUEJS CON CDN",
        listaFrutas: [],
        nuevaFruta: ""
    },
    methods: {
        agregarFruta() {
            this.listaFrutas.push({
                nombre: this.nuevaFruta,
                cantidad: 0,
                estadoEditar: false
            })
            this.nuevaFruta = "";
            localStorage.setItem('db', JSON.stringify(this.listaFrutas))
        },

        editarFruta(index) {
            this.listaFrutas[index].estadoEditar = !this.listaFrutas[index].estadoEditar;
            localStorage.setItem('db', JSON.stringify(this.listaFrutas))

        },
        eliminarFruta(index) {
            this.listaFrutas.splice(index, 1);
            localStorage.setItem('db', JSON.stringify(this.listaFrutas))

        }

    },
    created: function () {
        let db = JSON.parse(localStorage.getItem('db'));
        if (db) {
            this.listaFrutas = db;
        } else {
            this.listaFrutas = [];
        }
    }
});
const modulo2 = new Vue({
    el: "#modulo2",
    data: {
        titulo: "PROPIEDADES COMPUTADAS",
        palabra: "",
        contador: 0
    },
    computed: {
        invertido() {
            return this.palabra.split("").reverse().join("");
        },
        validarMaximo() {
            return this.contador <= 100;
        },
        validarMinimo() {
            return this.contador > 0;
        },
        limiteMaximo() {
            return this.contador <= 100 ? "" : "FUERA DE RANGO";
        },
        color() {
            return {
                'bg-primary': this.contador <= 10,
                'bg-warning': this.contador > 10 && this.contador <= 30,
                'bg-danger': this.contador > 30
            }
        }
    }

})
