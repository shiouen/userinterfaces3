'use strict';

import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Room } from "./room.model";
import { Observable } from "rxjs";

import 'rxjs/Rx';

@Injectable()
export class RoomService {
    private baseUrl: string;

    constructor(private http: Http) {
        this.baseUrl = 'server/assets';
    }

    public getRooms(): Observable<Room[]> {
        const url = `${this.baseUrl}/rooms.json`;
        return this.http.get(url)
            .map((res: Response) => res.json());
    }
}