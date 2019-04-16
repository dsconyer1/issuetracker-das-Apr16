import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevloperListComponent } from './devloper-list.component';

describe('DevloperListComponent', () => {
  let component: DevloperListComponent;
  let fixture: ComponentFixture<DevloperListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevloperListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevloperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
