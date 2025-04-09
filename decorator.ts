// Interfaz Component
interface Bebida {
    getDescripcion(): string;
    getPrecio(): number;
}

// ConcreteComponent - Implementaciones base
class Espresso implements Bebida {
    getDescripcion(): string {
        return "Espresso";
    }

    getPrecio(): number {
        return 2.0;
    }
}

class CafeAmericano implements Bebida {
    getDescripcion(): string {
        return "Café Americano";
    }

    getPrecio(): number {
        return 1.5;
    }
}

// Decorator abstracto
abstract class ComplementoDecorator implements Bebida {
    protected bebida: Bebida;
    
    constructor(bebida: Bebida) {
        this.bebida = bebida;
    }
    
    getDescripcion(): string {
        return this.bebida.getDescripcion();
    }
    
    getPrecio(): number {
        return this.bebida.getPrecio();
    }
}

// ConcreteDecorators - Implementaciones específicas de complementos
class LecheDecorator extends ComplementoDecorator {
    constructor(bebida: Bebida) {
        super(bebida);
    }
    
    getDescripcion(): string {
        return this.bebida.getDescripcion() + " + Leche";
    }
    
    getPrecio(): number {
        return this.bebida.getPrecio() + 0.5;
    }
}

class ChocolateDecorator extends ComplementoDecorator {
    constructor(bebida: Bebida) {
        super(bebida);
    }
    
    getDescripcion(): string {
        return this.bebida.getDescripcion() + " + Chocolate";
    }
    
    getPrecio(): number {
        return this.bebida.getPrecio() + 0.7;
    }
}

class CanelaDecorator extends ComplementoDecorator {
    constructor(bebida: Bebida) {
        super(bebida);
    }
    
    getDescripcion(): string {
        return this.bebida.getDescripcion() + " + Canela";
    }
    
    getPrecio(): number {
        return this.bebida.getPrecio() + 0.3;
    }
}

// Cliente - Para probar nuestro sistema
function main() {
    // Creamos un café espresso básico
    let miCafe: Bebida = new Espresso();
    console.log(`Pedido: ${miCafe.getDescripcion()} - Precio: $${miCafe.getPrecio()}`);
    
    // Añadimos leche
    miCafe = new LecheDecorator(miCafe);
    console.log(`Pedido: ${miCafe.getDescripcion()} - Precio: $${miCafe.getPrecio()}`);
    
    // Añadimos canela
    miCafe = new CanelaDecorator(miCafe);
    console.log(`Pedido: ${miCafe.getDescripcion()} - Precio: $${miCafe.getPrecio()}`);
    
    // Otro ejemplo con café americano
    let otroCafe: Bebida = new CafeAmericano();
    otroCafe = new ChocolateDecorator(otroCafe);
    otroCafe = new LecheDecorator(otroCafe);
    console.log(`Pedido: ${otroCafe.getDescripcion()} - Precio: $${otroCafe.getPrecio()}`);
}

main();