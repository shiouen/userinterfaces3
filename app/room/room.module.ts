'use strict';

import { NgModule }             from '@angular/core';

import { appRoutingProviders, routing }              from "./room.routing";

import { RoomDetailsComponent } from "./details/room-details.component";
import { RoomService }          from "./room.service";

@NgModule({
    declarations: [ RoomDetailsComponent ],
    imports: [ routing ],
    providers: [
        appRoutingProviders,
        RoomService
    ]
})
export class RoomModule { }