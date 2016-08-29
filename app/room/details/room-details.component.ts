'use strict';

import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from "@angular/router";

import { RoomService }              from "../room.service";
import { Room }                     from "../room.model";

import { Observable }               from "rxjs/Rx";

@Component({
    selector: 'campus-info',
    templateUrl: 'app/room/details/room-details.html',
    styleUrls: [ 'dist/app/room/details/room-details.css' ]
})

export class RoomDetailsComponent implements OnInit {
    private _room: Room;

    constructor(private _roomService: RoomService, private _route: ActivatedRoute) { }

    public ngOnInit(): void {
        this._route.params.subscribe((params: Observable<Params>) => {
            let id = +params['id'];
            this._roomService.getRoom(id).subscribe((room: Room) => {
                this._room = room;
            });
        });
    }
}