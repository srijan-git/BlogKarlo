import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritersProfileComponent } from './writers-profile.component';

describe('WritersProfileComponent', () => {
  let component: WritersProfileComponent;
  let fixture: ComponentFixture<WritersProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritersProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritersProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
