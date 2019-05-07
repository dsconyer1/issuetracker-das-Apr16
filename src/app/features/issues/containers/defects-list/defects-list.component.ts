import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { UpdateDefect } from '../../actions/defect.actions';
import { DefectListItem } from '../../models';
import { State } from '../../reducers/defects.reducer';

@Component({
  selector: 'app-defects-list',
  templateUrl: './defects-list.component.html',
  styleUrls: ['./defects-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefectsListComponent implements OnInit {

  @Input() defects: DefectListItem[];

  constructor(private store: Store<State>, private modalService: NgbModal) { }

  ngOnInit() {
  }

  developerDisplay(defect: DefectListItem) {
    let result = '';
    if (defect.developerId) {
      result = defect.developerId.firstName + ' ' + defect.developerId.lastName;
    }
    return result;
  }

  throwBack(defect: DefectListItem) {
    this.store.dispatch(new UpdateDefect(defect.id, defect.status, undefined, defect.fixCommit));
  }

  open(content, defect: DefectListItem) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((fixCommit) => {
      this.store.dispatch(new UpdateDefect(defect.id, 'Complete', defect.developerId, fixCommit));
    });
  }

}
