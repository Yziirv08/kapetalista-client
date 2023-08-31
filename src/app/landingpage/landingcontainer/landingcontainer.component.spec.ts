import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingcontainerComponent } from './landingcontainer.component';

describe('LandingcontainerComponent', () => {
  let component: LandingcontainerComponent;
  let fixture: ComponentFixture<LandingcontainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingcontainerComponent]
    });
    fixture = TestBed.createComponent(LandingcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
