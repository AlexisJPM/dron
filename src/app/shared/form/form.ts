import { Component, inject, signal } from '@angular/core';
import { BitacoraService } from '../../services/bitacora-service';
import { Bitacora } from '../../models/bitacoras';
import { FormsModule } from '@angular/forms';
import { DronService } from '../../services/dron-service';
import { Dron } from '../../models/drones';
@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  private servicioBitacora = inject(BitacoraService);
  private servicioDrones = inject(DronService);

  listaDeDrones: Dron[] = [];

  listaDeBitacoras = signal<Bitacora[]>([]);

  nuevaBitacora: Bitacora = {
    dron: '',
    mision: '',
    operador: '',
    lugar: '',
    ndespegues: 0,
    observaciones: '',
  };

  idEdicion = false;

  ngOnInit() {
    this.obtenerDrones();
    this.obtenerBitacoras();
  }

  obtenerDrones() {
    this.servicioDrones.getDrones().subscribe({
      next: (drones) => (this.listaDeDrones = drones),
    });
  }

  
  obtenerBitacoras() {
    this.servicioBitacora.getBitacoras().subscribe(datosBitacora => {
      this.listaDeBitacoras.set(datosBitacora)
    });
  }

  guardarBitacora() {
    if (this.idEdicion && this.nuevaBitacora.id) {
      this.servicioBitacora.putBitacora(this.nuevaBitacora.id, this.nuevaBitacora).subscribe(() => {
        this.obtenerBitacoras();
        this.resetear(); 
      });
    } else {
      this.servicioBitacora.postBitacoras(this.nuevaBitacora).subscribe(() => {
        this.obtenerBitacoras();
        this.resetear();
      });
    }
  }

  eliminar(id: string) {
    if (confirm('¿Desea eliminar el registro?')) {
      this.servicioBitacora.deleteBitacora(id).subscribe(() => {
        this.obtenerBitacoras();
      });
    }
  }

  seleccionarParaEditar(item: Bitacora) {
    this.idEdicion = true;
    this.nuevaBitacora = { ...item };
  }

  resetear() {
    this.idEdicion = false;
    this.nuevaBitacora = {
      dron: '',
      mision: '',
      operador: '',
      lugar: '',
      ndespegues: 0,
      observaciones: '',
    };
  }
}