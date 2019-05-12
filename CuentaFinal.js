class CuentaFinal{
    constructor(detalle,monto){
        this.monto = monto;
        this.detalle = detalle;
    }

    calcularBalance(){
        return this.monto; 
    }

}

module.exports = CuentaFinal;
