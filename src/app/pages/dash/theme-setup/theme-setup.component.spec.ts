import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSetupComponent } from './theme-setup.component';

describe('ThemeSetupComponent', () => {
  let component: ThemeSetupComponent;
  let fixture: ComponentFixture<ThemeSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
