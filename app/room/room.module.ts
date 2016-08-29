'use strict';

import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser'

import { FieldsetModule }               from 'primeng/primeng';

import { RoomDetailsComponent }         from "./details/room-details.component";
import { RoomService }                  from "./room.service";
import { ListedRoomComponent }          from "./listed/listed-room.component";
import { MappedRoomComponent }          from "./mapped/mapped-room.component";

import { appRoutingProviders, routing } from "./room.routing";

@NgModule({
    declarations: [
        ListedRoomComponent,
        MappedRoomComponent,
        RoomDetailsComponent
    ],
    exports: [
        ListedRoomComponent,
        MappedRoomComponent,
    ],
    imports: [
        BrowserModule,
        FieldsetModule,
        routing
    ],
    providers: [
        appRoutingProviders,
        RoomService
    ]
})
export class RoomModule { }