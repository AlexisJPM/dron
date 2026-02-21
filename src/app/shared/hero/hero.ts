import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-hero',
  imports: [FormsModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  email:string='';
  password:string='';

  private servicioAuth = inject(AuthService);
  //Inyector de rutas, ayuda a especificar una ruta despues del login
  private router = inject(Router);

  iniciarSesion(){
    this.servicioAuth.login(this.email, this.password).subscribe(success =>{
      if(success){
        alert('Bienvenido al sistema');
        this.router.navigate(['/registro']);
      }else{
        alert('Usuario Incorrecto');
      }
    }); 
  } 



}
