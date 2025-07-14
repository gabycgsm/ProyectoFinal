import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service';
import { Usuario } from '../app';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home-component',  
  imports: [FormsModule, CommonModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) { };

  usuario: Usuario[] = [];
  //usuarioSeleccionado: Usuario = {idUsuario: 0, nombre: '', direccion: '', telefono: ''};
  usuarioSeleccionado: Usuario = {id: 0, name: '', address: '' , phone: ''};

  usuarioAEliminar: Usuario | null = null;

  ngOnInit() {
    this.loadUsuarios();
  }

  loadUsuarios(){
    this.userService.getUsuarios().subscribe(data => {
      this.usuario = data;
      console.log('Usuarios cargados', data);
    });
  }

  handleSave(data: Usuario){
    if(data.id){
      this.userService.updateUsuarios(data).subscribe(() => this.loadUsuarios());
    } else {
      this.userService.addUsuarios(data).subscribe(() => this.loadUsuarios());
    }
    this.usuarioSeleccionado = {id: 0, name: '', address: '' , phone: ''};
  }

  editUsuario(data: Usuario){
    this.usuarioSeleccionado = {...data};
  }

  deleteUsuario(data: Usuario){
    this.userService.deleteUsuarios(data).subscribe(() => this.loadUsuarios());
    this.usuario = this.usuario.filter(u => u.id !== data.id);
  }
  
  confirmarEliminar(usuario: Usuario) {
    this.usuarioAEliminar = usuario;
  }

  eliminarConfirmado() {
    if (this.usuarioAEliminar) {
      this.deleteUsuario(this.usuarioAEliminar);
      this.usuarioAEliminar = null;
    }
  }

  cancelarEliminar() {
    this.usuarioAEliminar = null;
  }

  handleCancel() {
  this.usuarioSeleccionado = {id: 0, name: '', address: '' , phone: ''};
  }
}
