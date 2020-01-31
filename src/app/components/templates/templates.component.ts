import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styles: [`.ng-invalid.ng-touch:not(form){
    border:1px solid red;
  }`]
})
export class TemplatesComponent {
  usuario: object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: '',
    sexo: 'Masculino',
    acepta: true
  };
  paises = [{
    codigo: 'BO',
    nombre: 'Bolivia'
  },
  {
    codigo: 'COL',
    nombre: 'Colombia'
  }]
  sexos: string[] = ['Masculino', 'Femenino']

  constructor() { }

  guardar(forma: NgForm) {
    console.log('Formulario guardado');
    console.log(forma);
  }

}
