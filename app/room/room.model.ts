'use strict';

import { BoardType } from './board-type.enum';
import { RoomType } from './room-type.enum';

export class Room {
    /**
     * Constructor.
     *
     * @param _id {Number} Room id.
     * @param _name {String} Room name.
     * @param _type {RoomType} Room type.
     * @param _description {String} Room description.
     * @param _capacity {Number} Room capacity.
     * @param _boardType {BoardType} Board type.
     * @param _hasProjector {Boolean} Whether a projector is provided.
     * @param _hasSoundReinforcement {Boolean} Whether sound reinforcement is provided.
     * @param _floor {Number} The floor the room is on.
     */
    constructor(
        private _id: number,
        private _name: string,
        private _type: RoomType,
        private _description: string,
        private _capacity: number,
        private _boardType: BoardType,
        private _hasProjector: boolean,
        private _hasSoundReinforcement: boolean,
        private _floor: number) { }

    public get id(): number { return this._id; }
    public get name(): string { return this._name; }
    public get type(): RoomType { return this._type; }
    public get description(): string { return this._description; }
    public get capacity(): number { return this._capacity; }
    public get boardType(): BoardType { return this._boardType; }
    public get hasProjector(): boolean { return this._hasProjector; }
    public get hasSoundReinforcement(): boolean { return this._hasSoundReinforcement; }
    public get floor(): number { return this._floor }

    public set id(id: number) { this._id = id; }
    public set name(name: string) { this._name; }
    public set type(type: RoomType) { this._type; }
    public set description(description: string) { this._description; }
    public set capacity(capacity: number) { this._capacity; }
    public set boardType(boardType: BoardType) { this._boardType; }
    public set hasProjector(hasProjector: boolean) { this._hasProjector; }
    public set hasSoundReinforcement(hasSoundReinforcement: boolean) { this._hasSoundReinforcement; }
    public set floor(floor: number) { this._floor; }

}