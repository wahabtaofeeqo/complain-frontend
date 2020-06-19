import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutProComponent } from './logout-pro.component';

describe('LogoutProComponent', () => {
  let component: LogoutProComponent;
  let fixture: ComponentFixture<LogoutProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
