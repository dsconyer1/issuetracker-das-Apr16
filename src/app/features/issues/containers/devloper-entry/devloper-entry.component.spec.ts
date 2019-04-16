import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevloperEntryComponent } from './devloper-entry.component';

describe('DevloperEntryComponent', () => {
  let component: DevloperEntryComponent;
  let fixture: ComponentFixture<DevloperEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevloperEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevloperEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
