import {Component, Input, AfterContentInit} from '@angular/core';

export function throwErrorForMissingRouterLink(stepsWithoutRouterLink: StepInterface[]) {
    const stepLabels = stepsWithoutRouterLink.map(step => step.label);
    throw Error(`Routerlink missing on ${stepLabels.join(',')}`);
}

export interface StepSettingsInterface {
    type?: 'arrow' | 'isolated';
    useRouterOutlet?: boolean;
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
    typeClass = '';
    activeIndex = 0;

    constructor() {}

    @Input('settings')
    public settings: StepSettingsInterface;

    @Input('steps')
    public steps: StepInterface[];

    ngAfterContentInit() {
        this.checkForRouterUse();
        this.typeClass = this.settings && this.settings.type ? this.settings.type : 'arrow';
        const foundIndex = this.steps.findIndex(step => step.active);
        this.activeIndex = foundIndex === -1 ? 0 : foundIndex;
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
