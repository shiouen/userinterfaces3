import { ModuleWithProviders }      from "@angular/core";
import { Routes, RouterModule }     from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/floor-map',
        pathMatch: 'full'
    }
];

export const appRoutingProviders: any[] = [ ];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);