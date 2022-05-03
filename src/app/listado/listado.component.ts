import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
 /**
  * On Way Binding de entrada
  */
  @Input()
  nombre : string = "Yazmin"
  @Input()
  apellido : string = "Vásquez"
  @Input()
  biografia : string = "Nací el 6 de septiembre del 2001 en la provincia de San Pedro de Macoris, actualmente vivo en La Romana, República Dominicana."
 
  /**
  * One Way Binding de salida (Hacia el componente padre)
  */
  @Output()
  public OnGetNombre: EventEmitter<String> = new EventEmitter();  
  /**
  * Two Way Binding de salida (Hacia el componente padre)
  */
  @Input()
  Ocupacion : string  ="Docente"
  @Output()
  public OcupacionChange: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public GetNombre(){
    this.OnGetNombre.emit(this.nombre +" "+ this.apellido)
  }

  public GetOcupacion(ocup: string){
    this.Ocupacion = this.Ocupacion
    this.OcupacionChange.emit(this.Ocupacion);
  }
  public resetOcupacion(){
    this.Ocupacion = "Docente"
  }
}
