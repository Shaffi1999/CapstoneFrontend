import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerRegisterationComponent } from './manager-registeration.component';

describe('ManagerRegisterationComponent', () => {
  let component: ManagerRegisterationComponent;
  let fixture: ComponentFixture<ManagerRegisterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerRegisterationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
