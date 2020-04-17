import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkIComponent } from './mark-i.component';

describe('MarkIComponent', () => {
  let component: MarkIComponent;
  let fixture: ComponentFixture<MarkIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
