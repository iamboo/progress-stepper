import {Component, OnInit} from '@angular/core';
import {StepInterface, StepSettingsInterface} from './progress-stepper/progress-stepper.component';

@Component({
    selector: 'hc-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    progressSteps: StepInterface[];
    tabSettings: StepSettingsInterface;
    constructor() {}

    ngOnInit() {
        this.progressSteps = [
            {label: 'Winter', iconSet: 'fa', icon: 'fa-check', routerLink: '/winter'},
            {label: 'January', iconSet: 'fa', icon: 'fa-check', routerLink: '/winter/january'},
            {label: 'Spring', iconSet: 'fa', icon: 'fa-lock', routerLink: '/spring'},
            {label: 'Summer', iconSet: 'fa', icon: 'fa-lock', routerLink: '/summer'},
            {label: 'Fall', routerLink: '/fall'},
            {label: 'Year Round', iconSet: 'fa', icon: 'fa-times', routerLink: '/annual'}
        ];
        this.tabSettings = {
            type: 'isolated'
        };
    }
}
