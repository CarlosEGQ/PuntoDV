export class Cliente{
    constructor(id,nombre,apellido,fechaNac,pais,fechaRegis,sexo){
        this.id_Cliente=id;
        this.nombre_Cliente=nombre;
        this.apellido_Cliente=apellido
        this.fechaNaci_Cliente=fechaNac;
        this.pais_Cliente=pais;
        this.fechaRegis_Cliente=fechaRegis;
        this.sexo_Cliente=sexo;
    }
    estoy(){
        console.log('entre a la clase');
    }
}