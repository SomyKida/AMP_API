import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlitaComponent } from './alita.component';

describe('AlitaComponent', () => {
  let component: AlitaComponent;
  let fixture: ComponentFixture<AlitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
