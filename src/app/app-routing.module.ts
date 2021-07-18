import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoryComponent } from './category/category.component';
import { ChartComponent } from './chart/chart.component';
import { ModalChartComponent } from './chart/modal-chart/modal-chart.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'chart', component: ChartComponent },
  { path: 'chart/modal-chart/:name', component: ModalChartComponent, pathMatch: 'full' },
  { path: 'category', component: CategoryComponent },
  { path: 'about-us', component: AboutUsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
