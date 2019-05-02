import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectsEntryComponent } from './defects-entry.component';

describe('DefectsEntryComponent', () => {
  let component: DefectsEntryComponent;
  let fixture: ComponentFixture<DefectsEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefectsEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
