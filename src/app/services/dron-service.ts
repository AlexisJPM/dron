import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Dron } from '../models/drones';
import { map, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class DronService {

  private http = inject(HttpClient);
  private API_DRONES = 'https://app-dron-a6653-default-rtdb.firebaseio.com/';

  // MÉTODO NUEVO PARA OBTENER DRONES
  getDrones(): Observable<Dron[]> {
    return this.http.get<{ [key: string]: Dron }>(`${this.API_DRONES}/drones.json`).pipe(
      map(responseData => {
        const dronesArray: Dron[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            dronesArray.push({ ...responseData[key], id: key });
          }
        }
        return dronesArray;
      })
    );

  }

  postDrones(dron: Dron): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.API_DRONES}/drones.json`, dron);
  }
  //Actualiza solo es estado del dron
  updateDronEstado(id: string, estado: boolean): Observable<any> {
    return this.http.patch(`${this.API_DRONES}/drones/${id}.json`, { estado: estado });
  }

  updateDron(id: string, dron: Dron): Observable<Dron> {
    return this.http.put<Dron>(`${this.API_DRONES}/drones/${id}.json`, dron);
  }

  deleteDron(id: string): Observable<any> {
    return this.http.delete(`${this.API_DRONES}/drones/${id}.json`);
  }
}