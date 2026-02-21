import { Component, inject, signal } from '@angular/core';
import { DronesCreados } from "../../shared/drones-creados/drones-creados";
import { CreacionDron } from '../../shared/creacion-dron/creacion-dron';
import { Dron } from '../../models/drones';
import { DronService } from '../../services/dron-service';

@Component({
  selector: 'app-drones',
  imports: [DronesCreados, CreacionDron],
  templateUrl: './drones.html',
  styleUrl: './drones.css',
})
export class Drones {

  private dronService = inject(DronService);

  drones = signal<Dron[]>([])
  dronSeleccionado?: Dron;
  vistaActual: 'cerrado' | 'crear' | 'actualizar' = 'cerrado';

  ngOnInit() {
    this.obtenerDrones();
  }

  obtenerDrones() {
    this.dronService.getDrones().subscribe((data) => {
      this.drones.set(data);
    });
  }

  seleccionarDron(dron: Dron) {
    this.dronSeleccionado = dron;
  }

  setVista(vista: 'crear' | 'actualizar') {
    if (this.vistaActual === vista) {
      this.vistaActual = 'cerrado';
    } else {
      this.vistaActual = vista;
    }
  }
}
