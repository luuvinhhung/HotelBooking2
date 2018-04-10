import { MainComponent } from './home/main/main.component';
import { DetailsComponent } from './home/main/hotel/details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainFirstpageComponent } from './firstpage/main-firstpage/main-firstpage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    // {
    //     path: 'home', component: MainFirstpageComponent
    // },
    {
        path: '', component: MainFirstpageComponent
    }, {
        path: 'login', component: LoginComponent
    }, {
        path: 'home', component: HomeComponent, children: [
            {
                path: 'hotels', component: MainComponent
            }, {
                path: 'details', component: DetailsComponent
            }, {
                path: 'details/:id', component: DetailsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [MainFirstpageComponent];
