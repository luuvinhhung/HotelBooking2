import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFirstpageComponent } from './main-firstpage.component';

describe('MainFirstpageComponent', () => {
  let component: MainFirstpageComponent;
  let fixture: ComponentFixture<MainFirstpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFirstpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFirstpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
