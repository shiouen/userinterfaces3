'use strict';

import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser'

import {
    ButtonModule,
    DialogModule,
    FieldsetModule }                    from 'primeng/primeng';

import { DeskComponent }                from './desk/desk.component'
import { RoomDetailsComponent }         from './details/room-details.component';
import { RoomService }                  from './room.service';
import { ListedRoomComponent }          from './listed/listed-room.component';
import { MappedRoomComponent }          from './mapped/mapped-room.component';

import { appRoutingProviders, routing } from './room.routing';

@NgModule({
    declarations: [
        DeskComponent,
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
        ButtonModule,
        DialogModule,
        FieldsetModule,
        routing
    ],
    providers: [
        appRoutingProviders,
        RoomService
    ]
})
export class RoomModule { }