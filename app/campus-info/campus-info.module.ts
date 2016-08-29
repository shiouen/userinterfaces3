'use strict';

import { NgModule }                     from '@angular/core';

import { appRoutingProviders, routing } from './campus-info.routing';

import {
    DropdownModule,
    SelectButtonModule,
    ToggleButtonModule }                from 'primeng/primeng';

import { BrowserModule }                from '@angular/platform-browser'
import { FormsModule }                  from '@angular/forms';

import { FilterPanelComponent }         from './filter-panel/filter-panel.component';
import { FloorMapComponent }            from './floor-map/floor-map.component';
import { FloorListComponent }           from './floor-list/floor-list.component';
import { RoomModule } from "../room/room.module";

@NgModule({
    declarations: [
        FilterPanelComponent,
        FloorListComponent,
        FloorMapComponent
    ],
    exports: [
        FilterPanelComponent
    ],
    imports: [
        BrowserModule,
        DropdownModule,
        FormsModule,
        RoomModule,
        routing,
        SelectButtonModule,
        ToggleButtonModule
    ],
    providers: [
        appRoutingProviders
    ]
})
export class CampusInfoModule { }