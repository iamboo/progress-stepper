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
            {label: 'Winter', iconSet: 'fa', icon: 'fa-check'},
            {label: 'Spring', iconSet: 'fa', icon: 'fa-lock'},
            {label: 'Summer', active: true, iconSet: 'fa', icon: 'fa-lock'},
            {label: 'Fall'},
            {label: 'Year Round', iconSet: 'fa', icon: 'fa-times'}
        ];
        this.tabSettings = {
            type: 'isolated'
        };
    }
}
