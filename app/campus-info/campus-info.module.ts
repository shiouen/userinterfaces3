'use strict';

import { NgModule }                     from '@angular/core';

import { appRoutingProviders, routing } from "./campus-info.routing";

import { FilterPanelComponent }         from "./filter-panel/filter-panel.component";
import { FloorMapComponent }            from "./floor-map/floor-map.component";
import { FloorListComponent }           from "./floor-list/floor-list.component";

@NgModule({
    declarations: [
        FilterPanelComponent,
        FloorListComponent,
        FloorMapComponent
    ],
    imports: [ routing ],
    providers: [ appRoutingProviders ]
})
export class CampusInfoModule { }