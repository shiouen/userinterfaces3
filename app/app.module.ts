'use strict';

import { NgModule }         from '@angular/core';
import { HttpModule }       from "@angular/http";
import { BrowserModule }    from '@angular/platform-browser';

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
        RoomModule
    ]
})
export class AppModule { }