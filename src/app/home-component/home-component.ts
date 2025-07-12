import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service';
import { Usuario } from '../app';

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) { };

  usuarios: Usuario[] = [];
  usuarioSeleccionado: Usuario = {idUsuario: 0, nombre: '', direccion: '', telefono: ''};

  ngOnInit() {
    this.loadUsuarios();
  }

  loadUsuarios(){
    this.userService.getUsuarios().subscribe(data => {
      this.usuarios = data;
      console.log('Usuarios cargados', data);
    })
  }

  handleSave(data: Usuario){
    if(data.idUsuario){
      this.userService.updateUsuarios(data).subscribe(() => this.loadUsuarios());
    } else {
      this.userService.addUsuarios(data).subscribe(() => this.loadUsuarios());
    }
    this.usuarioSeleccionado = {idUsuario: 0, nombre: '', direccion: '', telefono: ''};
  }

  editUsuario(data: Usuario){
    this.usuarioSeleccionado = {...data};
  }

  deleteUsuario(data: Usuario){
    this.userService.deleteUsuarios(data).subscribe(() => this.loadUsuarios());
  }
  

}
