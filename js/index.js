const app = new Vue({
    el: '#root',
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
        },
        
        editarFruta(index) {
            this.listaFrutas[index].estadoEditar = !this.listaFrutas[index].estadoEditar;
        },
        eliminarFruta(index) {
            this.listaFrutas.splice(index, 1);
        }

    }
})