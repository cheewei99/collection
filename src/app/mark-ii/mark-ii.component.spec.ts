import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkIIComponent } from './mark-ii.component';

describe('MarkIIComponent', () => {
  let component: MarkIIComponent;
  let fixture: ComponentFixture<MarkIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
