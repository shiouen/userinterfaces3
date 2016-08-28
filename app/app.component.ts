'use strict';

import { Component } from '@angular/core';

import { Room } from "./room/room.model";
import { RoomService } from "./room/room.service";

@Component({
    selector: 'campus-info',
    templateUrl: 'app/app.html',
    styleUrls: [ 'dist/app/app.css' ]
})

export class AppComponent {
    private room: Room;

    constructor(private service: RoomService) {
        this.room = service.getRoom(1);
    }
}