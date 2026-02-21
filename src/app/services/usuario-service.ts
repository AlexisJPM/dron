import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})

export class UsuarioService {

  private http = inject(HttpClient);

  private API_USUARIOS = 'https://app-dron-a6653-default-rtdb.firebaseio.com/';

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<{ [key: string]: Usuario }>(`${this.API_USUARIOS}/usuarios.json`).pipe(
      map(respuesta => {
        if (!respuesta) {
          return [];
        }
        return Object.keys(respuesta).map(id => {
          const usuarioConId = { ...respuesta[id], id: id };
          return usuarioConId;
        })
      })
    )
  }

  //POST
  postUsuarios(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.API_USUARIOS}/usuarios.json`, usuario);
  }

  //PUT
  putUsuario(id: string, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.API_USUARIOS}/usuarios/${id}.json`, usuario);
  }

  //DELETE
  deleteUsuario(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_USUARIOS}/usuarios/${id}.json`);

  }

}
