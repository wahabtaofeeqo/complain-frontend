import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptComplaintsComponent } from './dept-complaints.component';

describe('DeptComplaintsComponent', () => {
  let component: DeptComplaintsComponent;
  let fixture: ComponentFixture<DeptComplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptComplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
