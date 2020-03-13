import {Component, OnInit, ViewChild, AfterContentInit} from '@angular/core';
import {StepInterface, StepperComponent, StepColor, StepType} from './progress-stepper/stepper.component';

@Component({
    selector: 'hc-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit {
    progressSteps: StepInterface[];
    colorOptions: StepColor[] = ['green', 'blue', 'orange', 'purple', 'red', 'none'];
    typeOptions: StepType[] = ['arrow', 'isolated'];

    @ViewChild('stepperElement', {static: false}) stepperElement: StepperComponent;

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
    }

    ngAfterContentInit() {
        setTimeout(() => {
            this.setColor(this.colorOptions[0]);
            this.setType(this.typeOptions[0]);
            this.stepperElement.useRouterOutlet = true;
            this.stepperElement.defaultActive = false;
        }, 1);
    }

    setType(type: StepType) {
        this.stepperElement.type = type;
    }

    setColor(color: StepColor) {
        this.stepperElement.color = color;
    }
}
