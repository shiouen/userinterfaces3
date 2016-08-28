'use strict';

import { Component, OnInit }            from '@angular/core';

import { Room }                         from './room/room.model';
import { RoomService }                  from './room/room.service';

@Component({
    selector: 'campus-info',
    templateUrl: 'app/app.html',
    styleUrls: [ 'dist/app/app.css' ]
})

export class AppComponent implements OnInit {
    private floor: number;
    private rooms: Room[];

    constructor(private roomService: RoomService) { }

    ngOnInit() {
        this.floor = 0;
        this.roomService.getRooms().subscribe((rooms: Room[]) => { this.rooms = rooms });
    }
}