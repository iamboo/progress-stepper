import {Component, AfterContentInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'hc-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements AfterContentInit {
    currentRoute = '';

    constructor(private router: Router) {}

    ngAfterContentInit() {
        this.setContent();
    }

    private setContent() {
        this.currentRoute = this.router.url;
    }
}
