'use strict';

import { NgModule }             from '@angular/core';

import { FloorMapComponent }    from "./floor-map.component";
import { ListComponent }        from "./list.component";

@NgModule({
    declarations: [
        FloorMapComponent,
        ListComponent
    ]
})
export class CampusInfoModule { }