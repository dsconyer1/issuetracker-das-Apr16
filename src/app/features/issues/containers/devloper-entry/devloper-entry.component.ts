import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-devloper-entry',
  templateUrl: './devloper-entry.component.html',
  styleUrls: ['./devloper-entry.component.css']
})
export class DevloperEntryComponent implements OnInit {

  developerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.developerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      department: ['ero'],
      emailAddress: ['', {
        validators: [Validators.required, Validators.email, notThatPersonValidator('joe@aol.com')],
        updateOn: 'blur'
      }]
    });

    this.developerForm.valueChanges.subscribe(v => console.log(v));
  }

  onSubmit(focusMe: HTMLInputElement) {
    if (this.developerForm.valid) {
      console.log(this.developerForm.value);
      this.developerForm.reset();  // resets the form values
      focusMe.focus();
    } else {

    }
  }

  get firstName() {
    return this.developerForm.get('firstName');
  }

  get lastName() {
    return this.developerForm.get('lastName');
  }

  get emailAddress() {
    return this.developerForm.get('emailAddress');
  }
}


function notThatPersonValidator(name: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
      if (control.value === name) {
        return {
          jerk: true
        };
      } else {
        return null;
      }
  };
}
