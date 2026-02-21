import { CanDeactivateFn } from '@angular/router';
import { Bitacora } from '../features/bitacora/bitacora';

export const deactivateGuard: CanDeactivateFn<Bitacora> = (component) => {

return component.tieneCambiosSinGuardar ? component.tieneCambiosSinGuardar() : true;

};
