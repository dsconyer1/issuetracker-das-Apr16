import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DefectsEntryComponent } from './containers/defects-entry/defects-entry.component';
import { DefectsListComponent } from './containers/defects-list/defects-list.component';
import { DefectsComponent } from './containers/defects/defects.component';
import { DevloperEntryComponent } from './containers/devloper-entry/devloper-entry.component';
import { DevloperListSorterComponent } from './containers/devloper-list-sorter/devloper-list-sorter.component';
import { DevloperListComponent } from './containers/devloper-list/devloper-list.component';
import { DevlopersComponent } from './containers/devlopers/devlopers.component';
import { OverviewComponent } from './containers/overview/overview.component';
import { AppStartUpEffects } from './effects/app-startup.effects';
import { DefectEffects } from './effects/defects.effects';
import { DeveloperEffects } from './effects/developers.effects';
import { IssuesRoutingModule } from './issues-routing.module';
import { IssuesComponent } from './issues.component';
import { featureName, reducers } from './reducers';

@NgModule({
  declarations: [IssuesComponent, DevlopersComponent, OverviewComponent, DevloperListComponent, DevloperEntryComponent, DevloperListSorterComponent, DefectsComponent, DefectsEntryComponent, DefectsListComponent],
  imports: [
    NgbModule,
    CommonModule,
    IssuesRoutingModule,
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([AppStartUpEffects, DeveloperEffects, DefectEffects]),
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class IssuesModule { }
