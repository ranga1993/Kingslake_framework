import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsbEmployeeComponent } from './jsb-employee.component';

describe('JsbEmployeeComponent', () => {
  let component: JsbEmployeeComponent;
  let fixture: ComponentFixture<JsbEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsbEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsbEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
