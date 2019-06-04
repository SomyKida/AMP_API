import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDispatchComponent } from './email-dispatch.component';

describe('EmailDispatchComponent', () => {
  let component: EmailDispatchComponent;
  let fixture: ComponentFixture<EmailDispatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailDispatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
