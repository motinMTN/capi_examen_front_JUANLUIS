import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { Usuario } from './services/usuario';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  users: Usuario[] = [];

  constructor(private usersService: UsersService ) { }

  ngOnInit(): void {
    this.usersService.getListUsers().subscribe( (users: Usuario[]) => {
      this.users = users;
      // console.log(users);
    })
  }

  ageCalculator(edad:any){
    if(edad){
      const convertAge = new Date(edad);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      edad = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
      return edad;
    }
  }

}
