import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'proyectoFinal';
}

/*export interface Usuario {
  idUsuario: number;
  nombre: string;
  direccion: string;
  telefono: string;
}*/

export interface Usuario {
  id: number;
  name: string;
  address: string;
  phone: string;
}
