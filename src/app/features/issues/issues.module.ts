import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssuesRoutingModule } from './issues-routing.module';
import { IssuesComponent } from './issues.component';
import { DevlopersComponent } from './containers/devlopers/devlopers.component';
import { OverviewComponent } from './containers/overview/overview.component';
import { DevloperListComponent } from './containers/devloper-list/devloper-list.component';
import { DevloperEntryComponent } from './containers/devloper-entry/devloper-entry.component';

@NgModule({
  declarations: [IssuesComponent, DevlopersComponent, OverviewComponent, DevloperListComponent, DevloperEntryComponent],
  imports: [
    CommonModule,
    IssuesRoutingModule
  ]
})
export class IssuesModule { }
