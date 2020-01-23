import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllColumnsComponent } from './all-columns.component';

describe('AllColumnsComponent', () => {
  let component: AllColumnsComponent;
  let fixture: ComponentFixture<AllColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
