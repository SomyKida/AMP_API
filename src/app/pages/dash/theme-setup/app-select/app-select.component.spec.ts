import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSelectComponent } from './app-select.component';

describe('AppSelectComponent', () => {
  let component: AppSelectComponent;
  let fixture: ComponentFixture<AppSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
