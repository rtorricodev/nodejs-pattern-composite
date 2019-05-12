class CuentaIntermedia {
    constructor(detalle,listaDeCuentasFinales) {
        this.listaDeCuentasFinales = listaDeCuentasFinales;
        this.detalle = detalle;
        this.monto;
    }

    calcularBalance(){
        this.listaDeCuentasFinales.forEach(CuentaFinal => {
            this.monto += CuentaFinal.calcularBalance();
        });
        return this.monto;
    }

    anadirCuenta(cuenta) {
        this.listaDeCuentasFinales.push(cuenta);
    }

    removerCuenta(){
        this.listaDeCuentasFinales.pop();
    }
}

module.exports = CuentaIntermedia;
