function total(cantidad,categoria){
    let valorTicket=200
    return Math.round((valorTicket*cantidad)*(1-(categoria/100)))
}
const listaCategorias={
    'Estudiante':80,
    'Trainee':50,
    'Junior':15,
}
const btnResumen = document.getElementById('Resumen')
btnResumen.addEventListener('click',()=>{
    const lblPagar = document.getElementById('form-pagar')
    const cantidad = document.getElementById('Cantidad').value
    if(cantidad>0){
        const categoria = document.getElementById('Categoria')
        const categoriaSeleccionado = categoria.options[categoria.selectedIndex].text;
        let descuento
        for (const key in listaCategorias) {
            if(key==categoriaSeleccionado){
                descuento=listaCategorias[key]
            }
        }
        console.log(descuento)
        lblPagar.textContent=`Total a Pagar: $ ${total(cantidad,descuento)}`
    }else{
        alert("Cantidad incorrecta");
    }
})