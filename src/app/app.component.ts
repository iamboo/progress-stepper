import {Component, OnInit, ViewChild, AfterContentInit} from '@angular/core';
import {StepInterface, StepperComponent, StepColor, StepType} from './progress-stepper/stepper.component';
import {Router, NavigationEnd, NavigationStart, ActivatedRoute, Params, UrlSerializer} from '@angular/router';

@Component({
    selector: 'hc-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit {
    progressSteps: StepInterface[];
    colorOptions: StepColor[] = ['green', 'blue', 'orange', 'purple', 'red', 'none'];
    typeOptions: StepType[] = ['arrow', 'isolated'];

    @ViewChild('stepperElement') stepperElement: StepperComponent;

    constructor(private router: Router, private route: ActivatedRoute, private urlSerializer: UrlSerializer) {
        this.router.events.forEach(event => {
            if (event instanceof NavigationStart) {
                this.updateStepParams(event.url);
            }
        });
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.progressSteps = [
                {label: 'Winter', iconSet: 'fa', icon: 'fa-check', routerLink: '/winter', queryParams: params},
                {label: 'January', iconSet: 'fa', icon: 'fa-check', routerLink: '/winter/january', queryParams: params},
                {label: 'Spring', iconSet: 'fa', icon: 'fa-lock', routerLink: '/spring', queryParams: params},
                {label: 'Summer', iconSet: 'fa', icon: 'fa-lock', routerLink: '/summer', queryParams: params},
                {label: 'Fall', routerLink: '/fall', queryParams: params},
                {label: 'Year Round', iconSet: 'fa', icon: 'fa-times', routerLink: '/annual', queryParams: params}
            ];
        });
    }

    ngAfterContentInit() {
        setTimeout(() => {
            this.setColor(this.colorOptions[0]);
            this.setType(this.typeOptions[0]);
            this.stepperElement.useRouterOutlet = true;
            this.stepperElement.findCurrentStep();
        }, 1);
    }

    updateStepParams(url: string) {
        const params: Params = this.urlSerializer.parse(url).queryParams;
        this.progressSteps.forEach(step => {
            step.queryParams = params;
        });
    }

    setType(type: StepType) {
        this.stepperElement.type = type;
    }

    setColor(color: StepColor) {
        this.stepperElement.color = color;
    }
}
