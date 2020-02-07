import {Component, OnInit, ViewChild, AfterContentInit} from '@angular/core';
import {StepInterface, StepSettingsInterface, ProgressStepperComponent} from './progress-stepper/progress-stepper.component';

@Component({
    selector: 'hc-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit {
    progressSteps: StepInterface[];
    stepSettings: StepSettingsInterface;
    styleOptions = ['default', 'none'];
    currentStyle = '';
    themeOptions = ['action', 'brand', 'none'];
    currentTheme = '';
    classList = '';
    typeOptions = ['arrow', 'isolated'];

    @ViewChild('stepperElement', {static: false}) stepperElement: ProgressStepperComponent;

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
        this.stepSettings = {
            type: 'isolated',
            useRouterOutlet: true
        };
    }

    ngAfterContentInit() {
        setTimeout(() => {
            this.setStyle(this.styleOptions[0]);
            this.setTheme(this.themeOptions[0]);
            this.setType(this.typeOptions[0]);
        }, 1);
    }

    setStyle(style: string) {
        this.currentStyle = style;
        this.updateStyleClass();
    }

    setTheme(theme: string) {
        this.currentTheme = theme;
        this.updateStyleClass();
    }

    setType(type) {
        this.stepSettings.type = type;
        this.stepperElement.typeClass = type;
    }

    updateStyleClass() {
        this.classList = this.currentStyle + ' ' + this.currentTheme;
    }
}
