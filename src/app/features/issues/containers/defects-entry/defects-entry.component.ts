import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddedDefect } from '../../actions/defect.actions';
import { State } from '../../reducers';

@Component({
  selector: 'app-defects-entry',
  templateUrl: './defects-entry.component.html',
  styleUrls: ['./defects-entry.component.css']
})
export class DefectsEntryComponent implements OnInit {

  defectForm: FormGroup;
  hasErrors = false;
  constructor(private formBuilder: FormBuilder, private store: Store<State>) { }

  ngOnInit() {
    this.defectForm = this.formBuilder.group({
      title: ['', Validators.required],
      dateSubmitted: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  onSubmit(focusMe: HTMLInputElement) {
    if (this.defectForm.valid) {
      const { title, dateSubmitted, description } = this.defectForm.value;
      this.store.dispatch(new AddedDefect(title, dateSubmitted, description));
      this.defectForm.reset();  // resets the form values
      focusMe.focus();
      this.hasErrors = false;
    } else {
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
}
