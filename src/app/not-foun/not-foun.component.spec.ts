import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFounComponent } from './not-foun.component';

describe('NotFounComponent', () => {
  let component: NotFounComponent;
  let fixture: ComponentFixture<NotFounComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFounComponent]
    });
    fixture = TestBed.createComponent(NotFounComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
