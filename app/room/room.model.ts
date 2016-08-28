'use strict';

import { BoardType } from './board-type.enum';
import { RoomType } from './room-type.enum';

export class Room {
    /**
     * Constructor.
     *
     * @param id {Number} Room id.
     * @param name {String} Room name.
     * @param type {RoomType} Room type.
     * @param description {String} Room description.
     * @param capacity {Number} Room capacity.
     * @param boardType {BoardType} Board type.
     * @param hasProjector {Boolean} Whether a projector is provided.
     * @param hasSoundReinforcement {Boolean} Whether sound reinforcement is provided.
     */
    constructor(
        private id: number,
        private name: string,
        private type: RoomType,
        private description: string,
        private capacity: number,
        private boardType: BoardType,
        private hasProjector: boolean,
        private hasSoundReinforcement:boolean) { }
}