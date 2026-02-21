import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DronService } from '../../services/dron-service';
import { Dron } from '../../models/drones';

@Component({
  selector: 'app-creacion-dron',
  imports: [FormsModule],
  templateUrl: './creacion-dron.html',
  styleUrl: './creacion-dron.css',
})
export class CreacionDron {

  private servicioDron = inject(DronService);

  @Input() listaDrones: Dron[] = []; // Recibe los drones del padre
  @Input() soloActualizar: boolean = false;

  @Output() finalizado = new EventEmitter<void>();

  
  modoEdicion = false;

  nuevoDron: Dron = {
    modelo: '',
    serie: '',
    tipo: '',
    b1: '',
    b2: '',
    b3: '',
    peso: 0,
    automina: 0,
    observaciones: '',
    estado:true,
  };


  cargarDronParaEditar(event: any) {
    const id = event.target.value;
    const seleccionado = this.listaDrones.find(d => d.id === id);
    if (seleccionado) {
      this.nuevoDron = { ...seleccionado };
      this.modoEdicion = true;
    }
  }

  guardarDron() {
    if (this.modoEdicion && this.nuevoDron.id) {
      this.servicioDron.updateDron(this.nuevoDron.id, this.nuevoDron).subscribe(() => {
        alert('Dron actualizado con éxito');
        this.finalizarProceso();
      });
    } else {
      this.servicioDron.postDrones(this.nuevoDron).subscribe(() => {
        alert('Dron creado con éxito');
        this.finalizarProceso();
      });
    }
  }

  finalizarProceso() {
    this.limpiar();
    this.finalizado.emit(); // Dispara el evento hacia el padre
  }

  limpiar() {
    this.nuevoDron = {
      modelo: '',
      serie: '',
      tipo: '',
      b1: '',
      b2: '',
      b3: '',
      peso: 0,
      automina: 0,
      observaciones: '',
    };
    this.modoEdicion = false;
    this.finalizado.emit(); // Esto cerrará el modal si el usuario pulsa "Cancelar"
  }
  
  };


