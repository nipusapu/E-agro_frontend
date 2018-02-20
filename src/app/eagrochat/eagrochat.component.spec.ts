import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EagrochatComponent } from './eagrochat.component';

describe('EagrochatComponent', () => {
  let component: EagrochatComponent;
  let fixture: ComponentFixture<EagrochatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EagrochatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EagrochatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
