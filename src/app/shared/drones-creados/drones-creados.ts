import { Component, inject, Input, signal } from '@angular/core';
import { Dron } from '../../models/drones';
import { DronService } from '../../services/dron-service';

@Component({
  selector: 'app-drones-creados',
  imports: [],
  templateUrl: './drones-creados.html',
  styleUrl: './drones-creados.css',
})
export class DronesCreados {

  @Input() dron?: Dron;
  private dronService = inject(DronService);

  dronescreados = signal<Dron[]>([]);

  obtenerDron() {
    this.dronService.getDrones().subscribe(datosUsuarios => {
      this.dronescreados.set(datosUsuarios)
    });
  }

  actualizarEstado(nuevoEstado: boolean) {
    if (this.dron && this.dron.id) {
      //Actualizamos localmente para que el mensaje azul cambie de inmediato
      this.dron.estado = nuevoEstado;
      //Enviamos la actualización a Firebase
      this.dronService.updateDronEstado(this.dron.id, nuevoEstado).subscribe({
      });
    }
  };

  eliminarDron(id: string) {
    if (confirm('¿Desea Eliminar el Dron Creado.?')) {
      this.dronService.deleteDron(id).subscribe(() => {
        this.obtenerDron();
        alert('Dron eliminado correctamente');
      })
    }
  }



}
