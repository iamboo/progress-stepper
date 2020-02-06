import {Component, Input, AfterContentInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

export function throwErrorForMissingRouterLink(stepsWithoutRouterLink: StepInterface[]) {
    const stepLabels = stepsWithoutRouterLink.map(step => step.label);
    throw Error(`Routerlink missing on ${stepLabels.join(',')}`);
}

export interface StepSettingsInterface {
    type?: 'arrow' | 'isolated';
    useRouterOutlet?: boolean;
    showCount?: boolean;
}

export interface StepInterface {
    label?: string;
    routerLink?: string;
    iconSet?: 'hc-icons' | 'fa';
    icon?: string;
    active?: boolean;
}

@Component({
    selector: 'hc-progress-stepper',
    templateUrl: './progress-stepper.component.html',
    styleUrls: ['./progress-stepper.component.scss']
})
export class ProgressStepperComponent implements AfterContentInit {
    routerEnabled = false;
    useRouterOutlet = false;
    showStepCount = false;
    typeClass = '';
    activeIndex = 0;

    @Input('settings')
    public settings: StepSettingsInterface;

    @Input('steps')
    public steps: StepInterface[];

    constructor(private router: Router) {}

    ngAfterContentInit() {
        this.typeClass = this.settings && this.settings.type ? this.settings.type : 'arrow';
        this.showStepCount = this.settings && this.settings.showCount ? this.settings.showCount : false;
        this._checkForRouterUse();
        this.router.events.forEach(event => {
            if (event instanceof NavigationEnd) {
                const url = event && event.url ? event.url : '';
                this._setCurrentStep(url);
            }
        });
    }

    private _checkForRouterUse() {
        const countUsingRouter = this.steps.filter(step => step.routerLink !== undefined).length;
        if (countUsingRouter > 0 && countUsingRouter < this.steps.length) {
            const stepMissingRouterLink = this.steps.filter(step => step.routerLink === undefined);
            throwErrorForMissingRouterLink(stepMissingRouterLink);
        } else {
            this.routerEnabled = countUsingRouter === this.steps.length;
            this.useRouterOutlet = this.settings && this.settings.useRouterOutlet === true;
        }
    }

    private _setCurrentStep(currentRoute: string) {
        const foundActiveIndex = this.steps.findIndex(step => step.active);
        const foundActiveRoute = this.steps.findIndex(step => currentRoute === step.routerLink);
        this.activeIndex = foundActiveRoute > -1 ? foundActiveRoute : foundActiveIndex > -1 ? foundActiveIndex : 0;
    }
}
