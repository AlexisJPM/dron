import { Component, ViewChild } from '@angular/core';
import { Form } from '../../shared/form/form';

@Component({
  selector: 'app-bitacora',
  imports: [Form,],
  templateUrl: './bitacora.html',
  styleUrl: './bitacora.css',
})
export class Bitacora {
  
  // Obtenemos la referencia del componente hijo
  @ViewChild(Form) formularioHijo!: Form;

  // Llamará el Guard
  tieneCambiosSinGuardar(): boolean {
    return this.formularioHijo ? this.formularioHijo.tieneCambiosSinGuardar() : true;
  }

  
}