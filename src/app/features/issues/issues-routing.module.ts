import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevlopersComponent } from './containers/devlopers/devlopers.component';
import { OverviewComponent } from './containers/overview/overview.component';
import { IssuesComponent } from './issues.component';

const routes: Routes = [
  {
    path: 'issues',
    component: IssuesComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'developers',
        component: DevlopersComponent
      },
      {
        path: '**',
        redirectTo: 'overview'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssuesRoutingModule { }
