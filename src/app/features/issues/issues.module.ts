import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { DevloperEntryComponent } from './containers/devloper-entry/devloper-entry.component';
import { DevloperListComponent } from './containers/devloper-list/devloper-list.component';
import { DevlopersComponent } from './containers/devlopers/devlopers.component';
import { OverviewComponent } from './containers/overview/overview.component';
import { IssuesRoutingModule } from './issues-routing.module';
import { IssuesComponent } from './issues.component';
import { featureName, reducers } from './reducers';
import { DevloperListSorterComponent } from './containers/devloper-list-sorter/devloper-list-sorter.component';


@NgModule({
  declarations: [IssuesComponent, DevlopersComponent, OverviewComponent, DevloperListComponent, DevloperEntryComponent, DevloperListSorterComponent],
  imports: [
    CommonModule,
    IssuesRoutingModule,
    StoreModule.forFeature(featureName, reducers)
  ]
})
export class IssuesModule { }
