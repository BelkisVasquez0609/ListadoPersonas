import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ListadoPersonas';
  ocupacion = "Programadora";
  public personas = 
  [
    {
    "id": 1,
    "nombre": "Bernardine",
    "apellido": "Forton",
    "ocupacion": "Chef",
    "bio": "cras mi pede malesuada in imperdiet et"
  }, {
    "id": 2,
    "nombre": "Gus",
    "apellido": "Mordy",
    "ocupacion": "Otro",
    "bio": "arcu libero rutrum ac lobortis vel dapibus"
  }, {
    "id": 3,
    "nombre": "Petronilla",
    "apellido": "Gerlack",
    "ocupacion": "Otro",
    "bio": "dapibus nulla suscipit ligula in lacus curabitur at ipsum"
  }, {
    "id": 4,
    "nombre": "Julian",
    "apellido": "Belch",
    "ocupacion": "Programadora",
    "bio": "libero nam dui proin leo odio"
  }, {
    "id": 5,
    "nombre": "Cletus",
    "apellido": "Olanda",
    "ocupacion": "Maestro",
    "bio": "aliquam erat volutpat in congue etiam justo"
  }, {
    "id": 6,
    "nombre": "Artemas",
    "apellido": "Byk",
    "ocupacion": "Programadora",
    "bio": "ipsum primis in faucibus orci luctus et ultrices"
  }, {
    "id": 7,
    "nombre": "Brandon",
    "apellido": "Colledge",
    "ocupacion": "Otro",
    "bio": "habitasse platea dictumst maecenas ut massa quis augue"
  }, {
    "id": 8,
    "nombre": "Andrus",
    "apellido": "Ashpole",
    "ocupacion": "Otro",
    "bio": "quisque porta volutpat erat quisque erat"
  }, {
    "id": 9,
    "nombre": "Hurleigh",
    "apellido": "Gapper",
    "ocupacion": "Programadora",
    "bio": "ipsum ac tellus semper interdum"
  }, {
    "id": 10,
    "nombre": "Nona",
    "apellido": "Curnnokk",
    "ocupacion": "Chef",
    "bio": "ut nunc vestibulum ante ipsum"
  }, {
    "id": 11,
    "nombre": "Julissa",
    "apellido": "Goldhawk",
    "ocupacion": "Maestro",
    "bio": "sociis natoque penatibus et magnis dis parturient montes nascetur"
  }, {
    "id": 12,
    "nombre": "Justine",
    "apellido": "Neames",
    "ocupacion": "Chef",
    "bio": "erat eros viverra eget congue eget semper rutrum nulla nunc"
  }, {
    "id": 13,
    "nombre": "Addie",
    "apellido": "Bernadzki",
    "ocupacion": "Chef",
    "bio": "odio donec vitae nisi nam ultrices"
  }, {
    "id": 14,
    "nombre": "Walker",
    "apellido": "McQuilliam",
    "ocupacion": "Programadora",
    "bio": "odio elementum eu interdum eu"
  }, {
    "id": 15,
    "nombre": "Teri",
    "apellido": "Domenicone",
    "ocupacion": "Maestro",
    "bio": "sem mauris laoreet ut rhoncus aliquet pulvinar"
  }, {
    "id": 16,
    "nombre": "Adelaida",
    "apellido": "Theurer",
    "ocupacion": "Maestro",
    "bio": "aliquam lacus morbi quis tortor id nulla ultrices aliquet"
  }, {
    "id": 17,
    "nombre": "Ruthann",
    "apellido": "Grindle",
    "ocupacion": "Chef",
    "bio": "in quis justo maecenas rhoncus"
  }, {
    "id": 18,
    "nombre": "Bernadina",
    "apellido": "Ramlot",
    "ocupacion": "Programadora",
    "bio": "ac tellus semper interdum mauris ullamcorper"
  }, {
    "id": 19,
    "nombre": "Agata",
    "apellido": "Folli",
    "ocupacion": "Chef",
    "bio": "eu felis fusce posuere felis sed lacus morbi sem mauris"
  }, {
    "id": 20,
    "nombre": "Olenka",
    "apellido": "O'Duggan",
    "ocupacion": "Chef",
    "bio": "elit sodales scelerisque mauris sit"
  }, {
    "id": 21,
    "nombre": "Ora",
    "apellido": "Peperell",
    "ocupacion": "Chef",
    "bio": "tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed"
  }, {
    "id": 22,
    "nombre": "Inger",
    "apellido": "Edge",
    "ocupacion": "Otro",
    "bio": "neque aenean auctor gravida sem"
  }, {
    "id": 23,
    "nombre": "Clerissa",
    "apellido": "McCarl",
    "ocupacion": "Programadora",
    "bio": "integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum"
  }, {
    "id": 24,
    "nombre": "Myrtle",
    "apellido": "Dearman",
    "ocupacion": "Programadora",
    "bio": "auctor sed tristique in tempus sit amet sem"
  }, {
    "id": 25,
    "nombre": "Sigfried",
    "apellido": "Maddie",
    "ocupacion": "Chef",
    "bio": "in felis donec semper sapien a libero nam dui"
  }, {
    "id": 26,
    "nombre": "Arther",
    "apellido": "Royan",
    "ocupacion": "Programadora",
    "bio": "amet eleifend pede libero quis orci nullam molestie nibh in"
  }, {
    "id": 27,
    "nombre": "Judie",
    "apellido": "Gouldstraw",
    "ocupacion": "Maestro",
    "bio": "congue risus semper porta volutpat"
  }, {
    "id": 28,
    "nombre": "Ferne",
    "apellido": "Eastman",
    "ocupacion": "Programadora",
    "bio": "quam fringilla rhoncus mauris enim"
  }, {
    "id": 29,
    "nombre": "Kacy",
    "apellido": "Fearns",
    "ocupacion": "Otro",
    "bio": "risus praesent lectus vestibulum quam sapien varius ut"
  }, {
    "id": 30,
    "nombre": "Kelley",
    "apellido": "Thicking",
    "ocupacion": "Programadora",
    "bio": "duis mattis egestas metus aenean"
  }]
  

  public mostrarNombre(nombre: String){
    alert ("El nombre es: " + nombre)
  }
  
  public cambiarOcupacion(){
    this.ocupacion = "Mesero"
  }

  public dividirPersona(){
    this.personas.length = 2
  }

  public eliminar(Id : number){
    const index = this.personas.findIndex(p =>p.id == Id);
    this.personas.splice(index,1);
    console.log(index)
  }
}
