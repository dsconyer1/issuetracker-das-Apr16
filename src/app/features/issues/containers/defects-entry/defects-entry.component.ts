import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddedDefect } from '../../actions/defect.actions';
import { DeveloperListItem } from '../../models';
import { State } from '../../reducers';

@Component({
  selector: 'app-defects-entry',
  templateUrl: './defects-entry.component.html',
  styleUrls: ['./defects-entry.component.css']
})
export class DefectsEntryComponent implements OnInit {

  @Input() developers: DeveloperListItem[];

  defectForm: FormGroup;
  hasErrors = false;
  constructor(private formBuilder: FormBuilder, private store: Store<State>) { }

  ngOnInit() {
    this.defectForm = this.formBuilder.group({
      title: ['', Validators.required],
      dateSubmitted: ['', [Validators.required]],
      description: ['', [Validators.required]],
      status: ['', [Validators.required]],
      developerId: [''],
      fixCommit: ['']
    }, { validator: this.formValidator } );
  }

  onSubmit(focusMe: HTMLInputElement) {
    if (this.defectForm.valid) {
      const { title, dateSubmitted, description, status, developerId, fixCommit } = this.defectForm.value;
      const dateSubed = new Date(dateSubmitted.year + '/' + dateSubmitted.month + '/' + dateSubmitted.day);
      this.store.dispatch(new AddedDefect(title, dateSubed, description, status, developerId, fixCommit));
      this.defectForm.reset();  // resets the form values
      focusMe.focus();
      this.hasErrors = false;
    } else {
      console.log('Form is valid = ', this.defectForm.valid);
      console.log('Errors');
      console.log(this.defectForm.errors);
      this.hasErrors = true;
    }
  }

  get title() {
    return this.defectForm.get('title');
  }

  get dateSubmitted() {
    return this.defectForm.get('dateSubmitted');
  }

  get description() {
    return this.defectForm.get('description');
  }

  get status() {
    return this.defectForm.get('status');
  }

  get developerId() {
    return this.defectForm.get('developerId');
  }

  get fixCommit() {
    return this.defectForm.get('fixCommit');
  }

  formValidator: ValidatorFn = (fg: FormGroup) => {
    const status = fg.get('status').value.toLowerCase();
    const developerId = fg.get('developerId').value;
    const fixCommit = fg.get('fixCommit').value;

    const result = {};
    const devResult = status === 'new' && developerId !== null
     ? Object.assign(result, {developerError: true})
     : null;

    const fixCommitResult = status !== 'completed' && fixCommit.length > 0
    ? Object.assign(result, { fixCommitError: true })
    : null;

    if (devResult || fixCommitResult) { return result; } else { return null; }
  }

//  fixCommitValidator: ValidatorFn = (fg: FormGroup) => {
//     const status = fg.get('status').value.toLowerCase();
//     const fixCommit = fg.get('fixCommit').value;
//     return status !== 'completed' && fixCommit !== null
//      ? { fixCommitError: true }
//      : null;
//   }

}

// function developerValidator(fg: FormGroup): ValidatorFn  {
//   return (control: AbstractControl): { [key: string]: any } => {
//       if (fg.) {
//         return {
//           developerError: true
//         };
//       } else {
//         return null;
//       }
//   };
// }

// function fixCommitValidator(status: string, fixCommit: string): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: any } => {
//       if ((status.toLowerCase() !== 'completed') && (fixCommit.length > 0)) {
//         return {
//           fixCommitError: true
//         };
//       } else {
//         return null;
//       }
//   };
// }
