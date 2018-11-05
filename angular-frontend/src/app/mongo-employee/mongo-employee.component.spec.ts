import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoEmployeeComponent } from './mongo-employee.component';

describe('MongoEmployeeComponent', () => {
  let component: MongoEmployeeComponent;
  let fixture: ComponentFixture<MongoEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongoEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongoEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
