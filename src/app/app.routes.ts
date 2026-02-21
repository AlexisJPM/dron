import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Registro } from './features/registro/registro';
import { Drones } from './features/drones/drones';
import { Bitacora } from './features/bitacora/bitacora';
import { Pagina404 } from './shared/pagina-404/pagina-404';
import { authGuard } from './guards/auth-guard';
import { canMatchGuard } from './guards/can-match-guard';
import { CreacionDron } from './shared/creacion-dron/creacion-dron';
import { deactivateGuard } from './guards/deactivate-guard';

export const routes: Routes = [

    { path: '', component: Home },

    {path: 'drones', component: Drones, canMatch: [canMatchGuard], data: { rol: 'ADMIN' }},
    {path: 'drones', component: CreacionDron, canMatch: [canMatchGuard], data: { rol: 'PILOTO' }},

    { path: 'bitacora', component: Bitacora, canDeactivate: [deactivateGuard], canActivate: [authGuard] },
    { path: 'registro', component: Registro, canActivate: [authGuard] },

    { path: '**', component: Pagina404 },

];
