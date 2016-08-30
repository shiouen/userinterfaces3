'use strict';

import {
    Component,
    Input,
    ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";

import { Room } from "../../room/room.model";
import { FilterPanelService } from "../../campus-info/filter-panel/filter-panel.service";

@Component({
    selector: 'mapped-room',
    templateUrl: 'app/room/mapped/mapped-room.html',
    styleUrls: [ 'dist/app/room/mapped/mapped-room.css' ],
    encapsulation: ViewEncapsulation.None
})
export class MappedRoomComponent {
    @Input() public room: Room;
    @Input() public noFilter: boolean;

    constructor(private _panel: FilterPanelService, private _router: Router) { }

    public get panel(): FilterPanelService { return this._panel; }

    public navigate(): void {
        this._router.navigate(['room/', this.room.id]);
    }
}