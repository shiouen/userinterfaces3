'use strict';

import {
    Component,
    OnInit,
    ViewEncapsulation }            from "@angular/core";

import { FilterPanelService }   from "../filter-panel/filter-panel.service";

import { Room }                 from "../../room/room.model";
import { RoomService }            from "../../room/room.service";

@Component({
    selector: 'floor-map',
    templateUrl: 'app/campus-info/floor-map/floor-map.html',
    styleUrls: [ 'dist/app/campus-info/floor-map/floor-map.css' ],
    encapsulation: ViewEncapsulation.None
})
export class FloorMapComponent implements OnInit {
    private _rooms: Room[];

    constructor(private _filterPanelService: FilterPanelService, private _roomService: RoomService) { }

    public ngOnInit(): void {
        this._roomService.getRooms().subscribe((rooms: Room[]) => {
            this.rooms = rooms;
        });
    }

    public get floor(): number { return this._filterPanelService.floor; }

    public get rooms(): Room[] { return this._rooms; }
    public set rooms(rooms: Room[]) { this._rooms = rooms; }
}