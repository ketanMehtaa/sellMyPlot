import { Route } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AuthComponent } from './features/auth/auth.component';

export const appRoutes: Route[] = [
    {
        path:'dashboard',component:DashboardComponent
    }
    ,{
        path:'auth',component:AuthComponent
    }
];
