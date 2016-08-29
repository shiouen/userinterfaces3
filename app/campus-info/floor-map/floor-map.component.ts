'use strict';

import { Component, OnInit }            from "@angular/core";

import { FilterPanelService }   from "../filter-panel/filter-panel.service";

import { Room }                 from "../../room/room.model";
import { RoomService }            from "../../room/room.service";

@Component({
    selector: 'floor-map',
    templateUrl: 'app/campus-info/floor-map/floor-map.html',
    styleUrls: [ 'dist/app/campus-info/floor-map/floor-map.css' ]
})
export class FloorMapComponent implements OnInit {
    public rooms: Room[];

    constructor(private filterPanelService: FilterPanelService, private roomService: RoomService) {

    }

    public ngOnInit(): void {
        this.roomService.getRooms().subscribe((rooms: Room[]) => {
            this.rooms = rooms;
        });
    }
}