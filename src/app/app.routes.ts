import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Registro } from './features/registro/registro';
import { Drones } from './features/drones/drones';
import { Bitacora } from './features/bitacora/bitacora';
import { Pagina404 } from './shared/pagina-404/pagina-404';
import { authGuard } from './guards/auth-guard';
import { canMatchGuard } from './guards/can-match-guard';
import { CreacionDron } from './shared/creacion-dron/creacion-dron';
import { AuthService } from './services/auth-service';
import { inject } from '@angular/core';

export const routes: Routes = [
    // //Ruta inicial
    // { path: '', component: Home },
    // //Ruta de navegacion
    // { path: 'drones', component: Drones, canMatch: [canMatchGuard], data: { rol: 'ADMIN' } },
    // { path: 'drones', component: CreacionDron, canMatch: [canMatchGuard], data: { rol: 'PILOTO' } },
    // { path: 'bitacora', component: Bitacora},
    // { path: 'registro', component: Registro, canActivate: [authGuard] },

    // { path: '**', component: Pagina404 },

    // {path: '', canMatch: [() => inject(AuthService).rolActual() !== null], // Si tiene sesión activa
    //     redirectTo: 'drones', pathMatch: 'full'
    // },

    { path: '', component: Home },

    {path: 'drones', component: Drones, canMatch: [canMatchGuard], data: { rol: 'ADMIN' }},
    {path: 'drones', component: CreacionDron, canMatch: [canMatchGuard], data: { rol: 'PILOTO' }},

    { path: 'bitacora', component: Bitacora, canActivate: [authGuard] },
    { path: 'registro', component: Registro, canActivate: [authGuard] },

    { path: '**', component: Pagina404 },

];
