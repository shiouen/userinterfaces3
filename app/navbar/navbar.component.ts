'use strict';

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar/navbar.html',
    styleUrls: [ 'dist/app/navbar/navbar.css' ],
    encapsulation: ViewEncapsulation.None
})

export class NavbarComponent {
    private paths: any;

    constructor() {
        this.paths = {
            icon: "/app/assets/images/navbar/campus.png"
        }
    }
}