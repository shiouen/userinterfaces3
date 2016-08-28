import { ModuleWithProviders }      from "@angular/core";
import { Routes, RouterModule }     from '@angular/router';

import { FloorMapComponent }        from "./floor-map/floor-map.component";
import { FloorListComponent }       from "./floor-list/floor-list.component";

const appRoutes: Routes = [
    {
        path: 'floor-map',
        component: FloorMapComponent
    },
    {
        path: 'floor-list',
        component: FloorListComponent
    }
];

export const appRoutingProviders: any[] = [ ];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);