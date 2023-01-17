import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersuccessComponent } from './managersuccess.component';

describe('ManagersuccessComponent', () => {
  let component: ManagersuccessComponent;
  let fixture: ComponentFixture<ManagersuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagersuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagersuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
