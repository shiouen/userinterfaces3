'use strict';

import { NgModule }         from '@angular/core';
import { HttpModule }       from "@angular/http";
import { BrowserModule }    from '@angular/platform-browser';

import { InputTextModule }   from 'primeng/primeng';

import { AppComponent }     from './app.component';
import { CampusInfoModule } from "./campus-info/campus-info.module";
import { RoomModule }       from "./room/room.module";

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ AppComponent ],
    imports: [
        BrowserModule,
        CampusInfoModule,
        HttpModule,
        InputTextModule,
        RoomModule
    ]
})
export class AppModule { }