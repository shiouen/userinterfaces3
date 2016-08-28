'use strict';

import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { BoardType } from "./board-type.enum";
import { Room } from "./room.model";
import { RoomType } from "./room-type.enum";

@Injectable()
export class RoomService {
    constructor(private http: Http) { }

    public getRoom(id: number) {
        return new Room("test", RoomType.Auditory, "descr", 1, BoardType.Chalk, true, true);
    }
}