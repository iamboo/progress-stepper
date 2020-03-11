import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CashmereModule} from './cashmere.module';
import {ContentComponent} from './content/content.component';
import {StepperComponent} from './progress-stepper/progress-stepper.component';

@NgModule({
    declarations: [AppComponent, StepperComponent, ContentComponent],
    imports: [BrowserModule, AppRoutingModule, CashmereModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
