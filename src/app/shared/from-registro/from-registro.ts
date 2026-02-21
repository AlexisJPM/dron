import { Component, inject, signal } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario-service';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-from-registro',
  imports: [FormsModule],
  templateUrl: './from-registro.html',
  styleUrl: './from-registro.css',
})
export class FromRegistro {

  private servicioUsuario = inject(UsuarioService);
  public servicioAuth = inject(AuthService);

  //Lista de usuarios reactiva
  listaUsuarios = signal<Usuario[]>([]);

  //crear un objeto del usuario que se va a aguardar, se va a vincular con el usuario
  nuevoUsuario: Usuario = {
    name: '',
    email: '',
    phone: '',
    password:'',
    rol:'PILOTO'
  };

  editando= false;

  //variable para controlar la etiqueta del boton registro

  ngOnInit() {
    this.obtenerUsuarios(); 
  }

  //metodo leer usuarios
  obtenerUsuarios() {
    this.servicioUsuario.getUsuarios().subscribe(datosUsuarios => {
      this.listaUsuarios.set(datosUsuarios)
    });
  }

  //metodo eleiminar usuario
  eliminarUsuario(id: string) {
    //confirmar alerta del navegador sirve para preguntar el usuario si quiere eliminar
    if (confirm('¿Desea eliminar el resgitrso.?')) {
      this.servicioUsuario.deleteUsuario(id).subscribe(() => {
        //filtrar el usuario para eliminar la tabla 
        //this.listaUsuarios.set(this.listaUsuarios().filter(u => u.id !== id));
        this.obtenerUsuarios();
      })
    }
  }

  //METODO PARA PASAR LOSA DATOS DEL USUARIO QUE QUIERE EDITAR AL FORMULARIO
  seleccionarParaEditar(user: Usuario) {
    this.editando = true;
    this.nuevoUsuario = { ...user };

  }


  //metodo guardar usuario
  guardarUsuario() {
    if (this.editando && this.nuevoUsuario.id) {
      this.servicioUsuario.putUsuario(this.nuevoUsuario.id, this.nuevoUsuario).subscribe(() => {
        this.obtenerUsuarios();
        this.resetear();
      });
    } else {

      this.servicioUsuario.postUsuarios(this.nuevoUsuario).subscribe(() => {
        this.obtenerUsuarios();
        this.resetear();
      });

    }
  }

  resetear(){
    this.editando=false;
    this.nuevoUsuario={name:'', email:'', phone:'', password:'', rol:'PILOTO'};

  }

}
