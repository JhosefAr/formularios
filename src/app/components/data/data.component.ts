import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, ControlContainer} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma: FormGroup;
  usuario:object={
    nombrecompleto:{
      nombre:'Jhosef',
      apellido:'Aruhiza'
    },
    correo:'jhosef@gmail.com',
    pasatiempo:['dormir', 'comer', 'caminar']
  }
  constructor() {
    this.forma = new FormGroup({
      'nombrecompleto':new FormGroup({
        'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'apellido': new FormControl('', Validators.required)
      }),
      'correo': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'pasatiempo': new FormArray([
        new FormControl('dormir',Validators.required)
      ])
    })
    //this.forma.setValue(this.usuario);
  }
  agregar(){
    (<FormArray>this.forma.controls['pasatiempo']).push(
      new FormControl('', Validators.required)
    )
  }
  guardarCambios(){
    console.log(this.forma.valid);
    this.forma.reset({
      nombrecompleto:{
        nombre: '',
        apellido: ''
      },
      correo: ''
    });
  }
}
