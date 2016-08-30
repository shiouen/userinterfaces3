'use strict';

import {
    Component,
    Input,
    ViewEncapsulation}  from '@angular/core';

import { Desk }         from "./desk.model";

@Component({
    selector: 'desk-popup',
    templateUrl: 'app/room/desk/desk.html',
    styleUrls: [ 'dist/app/room/desk/desk.css' ],
    encapsulation: ViewEncapsulation.None
})

export class DeskComponent {
    @Input() public desk: Desk;
    private _modal: boolean;
    private _display: boolean;
    private _resizable: boolean;

    constructor() {
        this._modal = true;
        this._display = false;
        this._resizable = false;
    }

    public get modal(): boolean { return this._modal }
    public set modal(closable: boolean) { this._modal = closable; }

    public get display(): boolean { return this._display }
    public set display(display: boolean) { this._display = display; }

    public get resizable(): boolean { return this._resizable }
    public set resizable(resizable: boolean) { this._resizable = resizable; }

    public showDialog(event: Event) {
        this._display = true;
        event.cancelBubble = true;
        event.preventDefault();
    }
}