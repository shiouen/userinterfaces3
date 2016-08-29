'use strict';

import { Component, Input, ViewEncapsulation } from "@angular/core";

import { Room } from "../../room/room.model";
import { FilterPanelService } from "../../campus-info/filter-panel/filter-panel.service";

@Component({
    selector: 'mapped-room',
    templateUrl: 'app/room/mapped/mapped-room.html',
    styleUrls: [ 'dist/app/room/mapped/mapped-room.css' ],
    encapsulation: ViewEncapsulation.None
})
export class MappedRoomComponent {
    @Input() private _room: Room;

    constructor(private _panel: FilterPanelService) { }

    public get room(): Room { return this._room; }
    public set room(room: Room) { this._room = room; }

    public get panel(): FilterPanelService { return this._panel; }
}