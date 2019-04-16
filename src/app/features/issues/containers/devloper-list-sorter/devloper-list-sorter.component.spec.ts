import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevloperListSorterComponent } from './devloper-list-sorter.component';

describe('DevloperListSorterComponent', () => {
  let component: DevloperListSorterComponent;
  let fixture: ComponentFixture<DevloperListSorterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevloperListSorterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevloperListSorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
