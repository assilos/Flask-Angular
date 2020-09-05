import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulerFormComponent } from './postuler-form.component';

describe('PostulerFormComponent', () => {
  let component: PostulerFormComponent;
  let fixture: ComponentFixture<PostulerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostulerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
