'use strict';

import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { SelectItem } from 'primeng/primeng';

import { FilterPanelService } from "./filter-panel.service";

@Component({
    selector: 'filter-panel',
    templateUrl: 'app/campus-info/filter-panel/filter-panel.html',
    styleUrls: [ 'dist/app/campus-info/filter-panel/filter-panel.css' ]
})

export class FilterPanelComponent {
    public showBoardType: boolean;
    public showCapacity: boolean;
    public showDescription: boolean;
    public showHasProjector: boolean;
    public showHasSoundReinforcement: boolean;
    public showName: boolean;
    public showType: boolean;

    public view: string;
    public viewOptions: SelectItem[];

    public floor: number;
    public floorOptions: SelectItem[];

    constructor(private filterPanelService: FilterPanelService, private router: Router) {
        this.showBoardType = filterPanelService.showBoardType;
        this.showCapacity = filterPanelService.showCapacity;
        this.showDescription = filterPanelService.showDescription;
        this.showHasProjector = filterPanelService.showHasProjector;
        this.showHasSoundReinforcement = filterPanelService.showHasSoundReinforcement;
        this.showName = filterPanelService.showName;
        this.showType = filterPanelService.showType;

        this.view = 'map';
        this.viewOptions = [
            { label: 'Map', value: 'map' },
            { label: 'List', value: 'list' },
        ];

        this.floor = filterPanelService.floor;
        this.floorOptions = [
            { label: 'Ground floor', value: 0 },
            { label: 'First floor', value: 1 },
            { label: 'Second floor', value: 2 }
        ]
    }

    public pushChanges(): void {
        this.filterPanelService.floor = this.floor;
        this.filterPanelService.showBoardType = this.showBoardType;
        this.filterPanelService.showCapacity = this.showCapacity;
        this.filterPanelService.showDescription = this.showDescription;
        this.filterPanelService.showHasProjector = this.showHasProjector;
        this.filterPanelService.showHasSoundReinforcement = this.showHasSoundReinforcement;
        this.filterPanelService.showName = this.showName;
        this.filterPanelService.showType = this.showType;
    }

    public navigateFloorView(): void {
        this.router.navigate([`/floor-${this.view}`]);
    }
}