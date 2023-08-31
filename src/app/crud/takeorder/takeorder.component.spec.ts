import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeorderComponent } from './takeorder.component';

describe('TakeorderComponent', () => {
  let component: TakeorderComponent;
  let fixture: ComponentFixture<TakeorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakeorderComponent]
    });
    fixture = TestBed.createComponent(TakeorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
