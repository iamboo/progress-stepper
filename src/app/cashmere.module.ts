import {NgModule} from '@angular/core';
import {TabsModule, IconModule, RadioButtonModule, FormFieldModule, PopModule, ButtonModule} from '@healthcatalyst/cashmere';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    exports: [TabsModule, IconModule, RadioButtonModule, FormFieldModule, PopModule, ButtonModule, BrowserAnimationsModule]
})
export class CashmereModule {}
