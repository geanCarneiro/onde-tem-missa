import { Routes } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: CalendarioComponent
    }
];
