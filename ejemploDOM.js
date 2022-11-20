const productosArray = []
    //clase producto
    class NewProduct {
}

const Heladera = new NewProduct(1, 'Heladera', 600, 20)
productosArray.push(Heladera)
const Lavarropas = new NewProduct(2, "Lavarropas", 1000, 40)
productosArray.push(Lavarropas)
const Microondas = new NewProduct(3, "Microondas", 200, 30)
productosArray.push(Microondas)
const Cafetera = new NewProduct(4, "Cafetera", 800, 15)
productosArray.push(Cafetera)

// Manipular DOM

const selectProd = document.getElementById("lista")
//console.log(productosArray)
productosArray.forEach(elemento=>{
    const optionProd = document.createElement("option")
    optionProd.innerText = `${elemento.name}: $${elemento.price}`
    optionProd.setAttribute ("id", `${elemento.id}`)
    selectProd.append(optionProd)
})


//CARRITO

const carrito = [] //para guardar el carrito

const botonIngresar = document.getElementById("ingresarProducto")
botonIngresar.onclick = () => {
    

}