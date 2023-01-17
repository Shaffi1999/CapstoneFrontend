import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoffpageComponent } from './logoffpage.component';

describe('LogoffpageComponent', () => {
  let component: LogoffpageComponent;
  let fixture: ComponentFixture<LogoffpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoffpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoffpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
