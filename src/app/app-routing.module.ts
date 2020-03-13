import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContentComponent} from './content/content.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: ContentComponent
    },
    {
        path: 'winter',
        component: ContentComponent,
        children: [
            {path: 'january', component: ContentComponent},
            {path: 'february', component: ContentComponent},
            {path: 'march', component: ContentComponent}
        ]
    },
    {
        path: 'spring',
        component: ContentComponent
    },
    {
        path: 'summer',
        component: ContentComponent
    },
    {
        path: 'fall',
        component: ContentComponent
    },
    {
        path: 'annual',
        component: ContentComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
