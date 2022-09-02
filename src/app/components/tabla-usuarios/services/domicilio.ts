export class Domicilio {
  id:number;
  domicilio:string;
  numero_exterior: number;
  colonia: string;
  cp: string;
  ciudad: string;

  constructor(id: number, domicilio: string, numero_exterior: number, colonia: string, cp: string, ciudad: string) {
    this.id = id;
    this.domicilio = domicilio;
    this.numero_exterior = numero_exterior;
    this.colonia = colonia;
    this.cp = cp;
    this.ciudad = ciudad;
  }
}
