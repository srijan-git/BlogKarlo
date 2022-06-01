import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAuthViewComponent } from './no-auth-view.component';

describe('NoAuthViewComponent', () => {
  let component: NoAuthViewComponent;
  let fixture: ComponentFixture<NoAuthViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoAuthViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoAuthViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
