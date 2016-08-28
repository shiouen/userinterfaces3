'use strict';

import { Component } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar/navbar.html',
    styleUrls: [ 'dist/app/navbar/navbar.css' ]
})

export class NavbarComponent {
    private paths: any;

    constructor() {
        this.paths = {
            icon: "/app/assets/images/navbar/campus.png"
        }
    }
}