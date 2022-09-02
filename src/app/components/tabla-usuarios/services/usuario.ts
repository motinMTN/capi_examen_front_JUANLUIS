import { Domicilio } from "./domicilio";

export class Usuario {
  id: number;
  name: string;
  fecha_nacimiento: Date;
  edad: number;
  domicilios: Domicilio[];


  constructor(id: number, name: string, fecha_nacimiento: Date, edad: number, domicilios: Domicilio[]) {
    this.id = id;
    this.name = name;
    this.fecha_nacimiento = fecha_nacimiento;
    this.edad = edad;
    this.domicilios = domicilios;
  }

}
