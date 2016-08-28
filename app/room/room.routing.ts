import { ModuleWithProviders }      from "@angular/core";
import { Routes, RouterModule }     from '@angular/router';

import { RoomDetailsComponent }     from "./details/room-details.component";

const appRoutes: Routes = [
    {
        path: 'room/:id',
        component: RoomDetailsComponent
    }
];

export const appRoutingProviders: any[] = [ ];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);