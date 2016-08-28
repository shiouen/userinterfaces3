'use strict';

import { Component } from '@angular/core';

@Component({
    selector: 'filter-panel',
    templateUrl: '/app/campus-info/filter-panel/filter-panel.html',
    styleUrls: [ '/dist/app/campus-info/filter-panel/filter-panel.css' ]
})

export class FilterPanelComponent {
    private enabled: boolean;
}