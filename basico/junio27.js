
// Metodo find
// Retorna solo el elemento que cumple con una condición específica, a diferencia de filter o map que devulven arrays

const arreglo6 = [{ id: 1, descripcion: "Estudiar", completado: false },
    { id: 2, descripcion: "Lavar", completado: false },
    { id: 3, descripcion: "Correr", completado: false },
    { id: 4, descripcion: "Dormir", completado: false },
    ];
    
    function completar(id) {
        const buscado = arreglo6.find(v => v.id === id);
        console.log(buscado);
    }
    
    completar(2);