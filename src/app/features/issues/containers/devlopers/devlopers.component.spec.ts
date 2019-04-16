import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevlopersComponent } from './devlopers.component';

describe('DevlopersComponent', () => {
  let component: DevlopersComponent;
  let fixture: ComponentFixture<DevlopersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevlopersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevlopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
