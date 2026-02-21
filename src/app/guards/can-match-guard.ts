import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const canMatchGuard: CanMatchFn = (route, segments) => {

  const auth = inject(AuthService);
  const router = inject(Router);
  const rolPermitido = route.data?.['rol']; // Lee la propiedad 'rol' de la ruta

  // Si el rol del usuario coincide con el permitido, lo deja pasar
  if (auth.rolActual() === rolPermitido) {
    return true;
  }
  // Si no coincide, devuelve false. 
  return router.navigate(['/']);
  
};
