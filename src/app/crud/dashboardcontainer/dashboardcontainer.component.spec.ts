import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardcontainerComponent } from './dashboardcontainer.component';

describe('DashboardcontainerComponent', () => {
  let component: DashboardcontainerComponent;
  let fixture: ComponentFixture<DashboardcontainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardcontainerComponent]
    });
    fixture = TestBed.createComponent(DashboardcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
