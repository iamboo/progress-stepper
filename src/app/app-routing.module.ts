import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [
    {
        path: 'winter',
        component: AppComponent
    },
    {
        path: 'spring',
        component: AppComponent
    },
    {
        path: 'summer',
        component: AppComponent
    },
    {
        path: 'fall',
        component: AppComponent
    },
    {
        path: 'annual',
        component: AppComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'winter'
    },
    {
        path: '**',
        redirectTo: 'winter'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
