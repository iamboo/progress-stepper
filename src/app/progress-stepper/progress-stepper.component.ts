import {Component, Input, AfterContentInit} from '@angular/core';

export function throwErrorForMissingRouterLink(stepsWithoutRouterLink: StepInterface[]) {
    const stepLabels = stepsWithoutRouterLink.map(step => step.label);
    throw Error(`Routerlink missing on ${stepLabels.join(',')}`);
}

export interface StepSettingsInterface {
    type?: string;
    useRouterOutlet?: boolean;
}

export interface StepInterface {
    label?: string;
    routerLink?: string;
    iconSet?: string;
    icon?: string;
    active?: boolean;
    completed?: boolean;
}

@Component({
    selector: 'hc-progress-stepper',
    templateUrl: './progress-stepper.component.html',
    styleUrls: ['./progress-stepper.component.scss']
})
export class ProgressStepperComponent implements AfterContentInit {
    routerEnabled: boolean = false;
    useRouterOutlet: boolean = false;
    typeClass = '';

    constructor() {}

    @Input('settings') settings: StepSettingsInterface;
    @Input('steps') steps: StepInterface[];

    ngAfterContentInit() {
        this.checkForRouterUse();
        this.typeClass = this.settings && this.settings.type ? this.settings.type : 'arrow';
        this.steps[0].active = true;
    }

    private checkForRouterUse() {
        const countUsingRouter = this.steps.filter(step => step.routerLink !== undefined).length;
        if (countUsingRouter > 0 && countUsingRouter < this.steps.length) {
            const stepMissingRouterLink = this.steps.filter(step => step.routerLink === undefined);
            throwErrorForMissingRouterLink(stepMissingRouterLink);
        } else {
            this.routerEnabled = countUsingRouter === this.steps.length;
            this.useRouterOutlet = this.settings && this.settings.useRouterOutlet === true;
        }
    }
}
