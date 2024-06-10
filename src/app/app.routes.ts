import { Routes } from '@angular/router';
import { MainPageComponent } from '../components/main-page/main-page.component';
import { AboutUsPageComponent } from '../components/about-us-page/about-us-page.component';
import { ArchivesPageComponent } from '../components/archives-page/archives-page.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { LoginPageComponent } from '../components/login-page/login-page.component';
import { AccountProfileComponent } from '../components/account-profile/account-profile.component';
import { ActiveTasksPageComponent } from '../components/active-tasks-page/active-tasks-page.component';

export const routes: Routes = [
    {
        path: '',
        title: 'LigmaTasks |> Main Page',
        component: MainPageComponent
    },{
        path: 'home-page',
        title: 'LigmaTasks |> Main Page',
        component: MainPageComponent
    },{
        path: 'about-us-page',
        title: 'LigmaTasks |> About Us Page',
        component: AboutUsPageComponent
    },{
        path: 'archives-page',
        title: 'LigmaTasks |> Archives Page',
        component: ArchivesPageComponent
    },{
        path: 'login-page',
        title: 'LigmaTasks |> Login Page',
        component: LoginPageComponent
    },{
        path: 'acount-profile-page',
        title: 'LigmaTasks |> My Account Page',
        component: AccountProfileComponent
    },{
        path: 'my-tasks-page',
        title: 'LigmaTasks |> My Tasks Page',
        component: ActiveTasksPageComponent
    },{
        path: '**',
        title: 'LigmaTasks |> Page not found',
        component: PageNotFoundComponent
    }
];
