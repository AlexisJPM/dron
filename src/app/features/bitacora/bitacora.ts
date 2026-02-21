import { Component } from '@angular/core';
import { Form } from '../../shared/form/form';
import { misDrones } from '../../models/drones';

@Component({
  selector: 'app-bitacora',
  imports: [Form,],
  templateUrl: './bitacora.html',
  styleUrl: './bitacora.css',
})
export class Bitacora {

 listaDrones: misDrones[] = [
    { id: 1, modelo: "DJI MATRICE 300 RTK" },
    { id: 2, modelo: "DJI MAVIC 3 ENTERPRISE" },
    { id: 3, modelo: "dji03" }
  ];
}


