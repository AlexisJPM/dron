import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Bitacora } from '../models/bitacoras';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BitacoraService {

  private http = inject(HttpClient);
  private API_BITACORAS = 'https://app-dron-a6653-default-rtdb.firebaseio.com/';

  getBitacoras(): Observable<Bitacora[]> {
  return this.http.get<{ [key: string]: Bitacora }>(`${this.API_BITACORAS}/bitacoras.json`).pipe(
    map(res => res ? Object.keys(res).map(id => ({ id, ...res[id] })) : [])
  );
}

  postBitacoras(bitacora: Bitacora): Observable<Bitacora> {
    return this.http.post<Bitacora>(`${this.API_BITACORAS}/bitacoras.json`, bitacora);
  }
  
  putBitacora(id: string, bitacora: Bitacora): Observable<Bitacora> {
    return this.http.put<Bitacora>(`${this.API_BITACORAS}/bitacoras/${id}.json`, bitacora);
  }

  deleteBitacora(id: string): Observable<any> {
    return this.http.delete(`${this.API_BITACORAS}/bitacoras/${id}.json`);
  }

}
 