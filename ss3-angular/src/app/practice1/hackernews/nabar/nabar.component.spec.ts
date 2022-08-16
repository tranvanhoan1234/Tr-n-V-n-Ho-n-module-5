import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NabarComponent } from './nabar.component';

describe('NabarComponent', () => {
  let component: NabarComponent;
  let fixture: ComponentFixture<NabarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NabarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NabarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
