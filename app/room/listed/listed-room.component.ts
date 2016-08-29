'use strict';

import {
    Component,
    Input,
    ViewEncapsulation } from "@angular/core";

import { Router } from "@angular/router";

import { Room } from "../../room/room.model";
import { FilterPanelService } from "../../campus-info/filter-panel/filter-panel.service";

@Component({
    selector: 'listed-room',
    templateUrl: 'app/room/listed/listed-room.html',
    styleUrls: [ 'dist/app/room/listed/listed-room.css' ],
    encapsulation: ViewEncapsulation.None
})
export class ListedRoomComponent {
    @Input() public room: Room;

    constructor(private _panel: FilterPanelService, private _router: Router) { }

    public get panel(): FilterPanelService { return this._panel; }

    public navigate(): void {
        this._router.navigate(['room/', this.room.id]);
    }
}