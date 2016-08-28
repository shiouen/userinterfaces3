'use strict';

import { BoardType } from './board-type.enum';
import { RoomType } from './room-type.enum';

export class Room {
    /**
     * Constructor.
     *
     * @param name {String} Room name.
     * @param type {RoomType} Room type.
     * @param description {String} Room description.
     * @param capacity {Number} Room capacity.
     * @param board_type {BoardType} Board type.
     * @param has_projector {Boolean} Whether a projector is provided.
     * @param has_sound_reinforcement {Boolean} Whether sound reinforcement is provided.
     */
    constructor(
        private name: string,
        private type: RoomType,
        private description: string,
        private capacity: number,
        private board_type: BoardType,
        private has_projector: boolean,
        private has_sound_reinforcement:boolean) { }
}