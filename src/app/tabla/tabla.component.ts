import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  @Input()
  Id : number = 0
  @Input()
  nombre : string = "Yazmin"
  @Input()
  apellido : string = "Vásquez"
  @Input()
  biografia : string = ""
  @Input()
  Ocupacion : string  ="Docente"
  @Input()
  PersonaClass : any[] =[]

  @Output()
  public OnEliminar : EventEmitter<number> = new EventEmitter<number>();
  
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {

  }

  eliminar(Id: any){
    this.messageService.clear();
    this.OnEliminar.emit(Id); 
    this.messageService.add({key: 'Eliminar',severity:'success', summary:'Eliminado correctamente', detail:'La persona de Id: '+Id+" se ha eliminado correctamente"});
  }
  clear() {
    this.messageService.clear();
}
}
