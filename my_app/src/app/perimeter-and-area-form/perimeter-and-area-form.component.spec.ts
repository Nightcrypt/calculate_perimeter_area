import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerimeterAndAreaFormComponent } from './perimeter-and-area-form.component';

describe('PerimeterAndAreaFormComponent', () => {
  let component: PerimeterAndAreaFormComponent;
  let fixture: ComponentFixture<PerimeterAndAreaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerimeterAndAreaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerimeterAndAreaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
