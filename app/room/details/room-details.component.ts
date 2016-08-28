'use strict';

import { Component, OnInit }        from '@angular/core';

import { RoomService } from "../room.service";

@Component({
    selector: 'campus-info',
    templateUrl: 'app/room/details/room-details.html',
    styleUrls: [ 'dist/app/room/details/room-details.css' ]
})

export class RoomDetailsComponent implements OnInit {
    constructor(private roomService: RoomService) { }

    ngOnInit() { }
}