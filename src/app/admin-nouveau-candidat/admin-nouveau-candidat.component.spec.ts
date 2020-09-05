import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNouveauCandidatComponent } from './admin-nouveau-candidat.component';

describe('AdminNouveauCandidatComponent', () => {
  let component: AdminNouveauCandidatComponent;
  let fixture: ComponentFixture<AdminNouveauCandidatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNouveauCandidatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNouveauCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
