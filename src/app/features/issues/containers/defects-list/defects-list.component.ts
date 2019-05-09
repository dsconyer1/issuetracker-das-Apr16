import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { UpdateDefect } from '../../actions/defect.actions';
import { DefectListItem, DeveloperListItem } from '../../models';
import { State } from '../../reducers/defects.reducer';

@Component({
  selector: 'app-defects-list',
  templateUrl: './defects-list.component.html',
  styleUrls: ['./defects-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefectsListComponent implements OnInit {

  @Input() defects: DefectListItem[];
  @Input() developers: DeveloperListItem[];

  constructor(private store: Store<State>, private modalService: NgbModal) { }

  ngOnInit() {
  }

  developerDisplay(devId: string) {
    const dev = this.developers.find(aDev => aDev.id === devId);
    let result = '';
    if (dev) {
      result = dev.firstName + ' ' + dev.lastName;
    }
    return result;
  }

  showAssignDev(defect: DefectListItem) {
    if (defect.developerId) {
      return false;
    } else { return true; }
  }

  showThrowBack(defect: DefectListItem) {
    if (defect.developerId && defect.status.toLowerCase() === 'in process') {
      return true;
    } else { return false; }
  }

  showMakeComplete(defect: DefectListItem) {
    if (defect.developerId && defect.status.toLowerCase() !== 'completed') {
      return true;
    } else { return false; }
  }

  throwBack(defect: DefectListItem) {
    this.store.dispatch(new UpdateDefect(defect.id, 'New', undefined, defect.fixCommit));
  }

  openAssignDev(content, defect: DefectListItem) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((devId) => {
      // const newDev = this.developers.find(aDev => aDev.id === devId);
      this.store.dispatch(new UpdateDefect(defect.id, 'In Process', devId, defect.fixCommit));
    });
  }

  openMakeComplete(content, defect: DefectListItem) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((fixCommit) => {
      this.store.dispatch(new UpdateDefect(defect.id, 'Completed', defect.developerId, fixCommit));
    });
  }

}
