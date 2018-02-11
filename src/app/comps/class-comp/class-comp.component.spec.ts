import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassCompComponent } from './class-comp.component';

describe('ClassCompComponent', () => {
  let component: ClassCompComponent;
  let fixture: ComponentFixture<ClassCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
