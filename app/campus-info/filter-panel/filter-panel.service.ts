'use strict';

import { Injectable } from "@angular/core";

@Injectable()
export class FilterPanelService {
    private _floor: number;
    private _showBoardType: boolean;
    private _showCapacity: boolean;
    private _showDescription: boolean;
    private _showHasProjector: boolean;
    private _showHasSoundReinforcement: boolean;
    private _showName: boolean;
    private _showType: boolean;

    constructor() {
        this.reset();
    }

    get floor(): number { return this._floor; }
    get showBoardType(): boolean { return this._showBoardType; }
    get showCapacity(): boolean { return this._showCapacity; }
    get showDescription(): boolean { return this._showDescription; }
    get showHasProjector(): boolean { return this._showHasProjector; }
    get showHasSoundReinforcement(): boolean { return this._showHasSoundReinforcement; }
    get showName(): boolean { return this._showName; }
    get showType(): boolean { return this._showType; }

    set floor(floor: number) { this._floor = floor; }
    set showBoardType(showBoardType: boolean) { this._showBoardType = showBoardType; }
    set showCapacity(showCapacity: boolean) { this._showCapacity = showCapacity; }
    set showDescription(showDescription: boolean) { this._showDescription = showDescription; }
    set showHasProjector(showHasProjector: boolean) { this._showHasProjector = showHasProjector; }
    set showHasSoundReinforcement(showHasSoundReinforcement: boolean) { this._showHasSoundReinforcement = showHasSoundReinforcement; }
    set showName(showName: boolean) { this._showName = showName; }
    set showType(showType: boolean) { this._showType = showType; }

    reset() {
        this._floor = 0;
        this._showBoardType = false;
        this._showCapacity = true;
        this._showDescription = false;
        this._showHasProjector = false;
        this._showHasSoundReinforcement = false;
        this._showName = true;
        this._showType = true;
    }

    toggleBoardType() { this._showBoardType = !this._showBoardType; }
    toggleCapacity() { this._showCapacity = !this._showCapacity; }
    toggleDescription() { this._showDescription = !this._showDescription; }
    toggleHasProjector() { this._showHasProjector = !this._showHasProjector; }
    toggleHasSoundReinforcement() { this._showHasSoundReinforcement = !this._showHasProjector; }
    toggleName() { this._showName = !this._showName; }
    toggleType() { this._showType = !this._showType; }
}