import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DevloperEntryComponent } from './containers/devloper-entry/devloper-entry.component';
import { DevloperListSorterComponent } from './containers/devloper-list-sorter/devloper-list-sorter.component';
import { DevloperListComponent } from './containers/devloper-list/devloper-list.component';
import { DevlopersComponent } from './containers/devlopers/devlopers.component';
import { OverviewComponent } from './containers/overview/overview.component';
import { AppStartUpEffects } from './effects/app-startup.effects';
import { DeveloperEffects } from './effects/developers.effects';
import { IssuesRoutingModule } from './issues-routing.module';
import { IssuesComponent } from './issues.component';
import { featureName, reducers } from './reducers';


@NgModule({
  declarations: [IssuesComponent, DevlopersComponent, OverviewComponent, DevloperListComponent, DevloperEntryComponent, DevloperListSorterComponent],
  imports: [
    CommonModule,
    IssuesRoutingModule,
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([AppStartUpEffects, DeveloperEffects]),
    HttpClientModule
  ]
})
export class IssuesModule { }
