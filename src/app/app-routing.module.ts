import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { HomeNavComponent } from './home/home-nav/home-nav.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        canActivate: [AuthGuard],
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

// {
//     path: 'order-list',
//     loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
// }