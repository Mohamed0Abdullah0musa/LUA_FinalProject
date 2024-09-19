import { Routes } from '@angular/router';
import { MainLayoutComponent } from './Shared/Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Shared/Components/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '', component:MainLayoutComponent,
        loadChildren: () => import('./Shared/shared.module').then(m => m.SharedModule)
    },
    {
        path: 'tourist', component:MainLayoutComponent,
        loadChildren: () => import('./Tourist/tourist.module').then(m => m.TouristModule)
    },

    {path:"**",component:NotFoundComponent}
];

