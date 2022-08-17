import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameCarComponent } from './name-car.component';

describe('NameCarComponent', () => {
  let component: NameCarComponent;
  let fixture: ComponentFixture<NameCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
