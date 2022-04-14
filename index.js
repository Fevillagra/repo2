class Licor {
    constructor(name, price) {
        this.name = name.toUpperCase()
        this.price = parseFloat(price)
        this.sold = false
    }

    addIVA() {
        this.price = this.price * 1.21
    }
}

const productos = []

productos.push(new Licor("ron",120))
productos.push(new Licor("whiskey",100))
productos.push(new Licor("fernet",80))

for(const product of productos) product.addIVA

console.log(productos)