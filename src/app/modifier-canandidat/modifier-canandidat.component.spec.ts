import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCanandidatComponent } from './modifier-canandidat.component';

describe('ModifierCanandidatComponent', () => {
  let component: ModifierCanandidatComponent;
  let fixture: ComponentFixture<ModifierCanandidatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierCanandidatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierCanandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
