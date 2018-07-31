import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EagrochatbotComponent } from './eagrochatbot.component';

describe('EagrochatbotComponent', () => {
  let component: EagrochatbotComponent;
  let fixture: ComponentFixture<EagrochatbotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EagrochatbotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EagrochatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
