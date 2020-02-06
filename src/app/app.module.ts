import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressStepperComponent } from './progress-stepper/progress-stepper.component';
import { CashmereModule } from './cashmere.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressStepperComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CashmereModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
