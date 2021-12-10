import {Component, AfterContentInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'hc-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements AfterContentInit {
    currentRoute = '';

    constructor(private router: Router, private route: ActivatedRoute) {}

    ngAfterContentInit() {
        this.setContent();
    }

    private setContent() {
        this.currentRoute = decodeURIComponent(this.router.url);
    }

    setParams(event: Event) {
        const selectElement = event.srcElement as HTMLSelectElement;
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: {test: selectElement.value},
            queryParamsHandling: 'merge'
        });
    }
}
