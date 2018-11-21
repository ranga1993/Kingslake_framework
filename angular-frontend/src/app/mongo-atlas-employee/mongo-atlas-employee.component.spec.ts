import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoAtlasEmployeeComponent } from './mongo-atlas-employee.component';

describe('MongoAtlasEmployeeComponent', () => {
  let component: MongoAtlasEmployeeComponent;
  let fixture: ComponentFixture<MongoAtlasEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongoAtlasEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongoAtlasEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
