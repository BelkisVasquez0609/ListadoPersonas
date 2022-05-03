import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ListadoPersonas';
  ocupacion = "Programadora";

  public mostrarNombre(nombre: String){
    alert ("El nombre es: " + nombre)
  }
  
  public cambiarOcupacion(){
    this.ocupacion = "Mesero"
  }
}
