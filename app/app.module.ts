'use strict';

import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { HttpModule }                   from "@angular/http";
import { BrowserModule }                from '@angular/platform-browser';

import { InputTextModule }              from 'primeng/primeng';

import { CampusInfoModule }             from './campus-info/campus-info.module';
import { RoomModule }                   from './room/room.module';

import { FilterPanelService }           from "./campus-info/filter-panel/filter-panel.service";

import { AppComponent }                 from './app.component';
import { NavbarComponent }              from './navbar/navbar.component';

import { appRoutingProviders, routing } from "./app.routing";

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        CampusInfoModule,
        FormsModule,
        HttpModule,
        InputTextModule,
        RoomModule,
        routing
    ],
    providers: [
        appRoutingProviders,
        FilterPanelService
    ]
})
export class AppModule { }