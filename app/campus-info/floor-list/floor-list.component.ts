'use strict';

import { Component } from "@angular/core";

import { FilterPanelService } from "../filter-panel/filter-panel.service";
import { Room } from "../../room/room.model";
import { RoomService } from "../../room/room.service";

@Component({
    selector: 'floor-list',
    templateUrl: 'app/campus-info/floor-list/floor-list.html',
    styleUrls: [ 'dist/app/campus-info/floor-list/floor-list.css' ]
})
export class FloorListComponent {
    private _rooms: Room[];

    constructor(private filterPanelService: FilterPanelService, private roomService: RoomService) { }

    public get rooms(): Room[] { return this._rooms; }
    public set rooms(rooms: Room[]) { this._rooms = rooms; }

    public ngOnInit(): void {
        this.roomService.getRooms()
            .subscribe((rooms: Room[]) => this.rooms = rooms);
    //.filter((room: Room) => { return this.filterPanelService.floor === room.floor }))
}
}