import {Component, OnInit} from '@angular/core';
import {StepInterface} from './progress-stepper/progress-stepper.component';

@Component({
    selector: 'hc-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    progressSteps: StepInterface[];
    constructor() {}

    ngOnInit() {
        this.progressSteps = [
            {label: 'Winter'},
            {label: 'Spring'},
            {label: 'Summer', active: true},
            {label: 'Fall'},
            {label: 'Year Round'}
        ];
    }
}
