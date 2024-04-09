import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEventListComponent } from './student-event-list.component';

describe('StudentEventListComponent', () => {
  let component: StudentEventListComponent;
  let fixture: ComponentFixture<StudentEventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEventListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
