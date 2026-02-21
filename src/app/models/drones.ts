export interface Dron{
    id?:string;
    modelo:string;
    serie:string;
    tipo:string;
    b1:string;
    b2:string;
    b3:string;
    peso:number;
    automina:number;
    observaciones:string;
    estado?: boolean;
    
}

export interface misDrones{
    id:number;
    modelo:string;  
}

export interface BitacorasVuelo{
    id:number;
    mision:string;
    operador:string;
    lugar:string;
    despegues:number;
    observaciones:string;
}