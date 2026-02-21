import { Component, Input } from '@angular/core';
import { BitacorasVuelo } from '../../models/drones';

@Component({
  selector: 'app-bitacoras-dron',
  imports: [],
  templateUrl: './bitacoras-dron.html',
  styleUrl: './bitacoras-dron.css',
})
export class BitacorasDron {

  @Input () bitacora?:BitacorasVuelo;

}
