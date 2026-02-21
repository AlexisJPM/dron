import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {

  public servicioAuth = inject(AuthService);
  private  router = inject(Router);

  ngOnInit(): void {
    initFlowbite();
  }

  cerrarSesion(){
    this.servicioAuth.logout();
    this.router.navigate(['/']);
  }
 
}
