import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelAgencyLocationComponent } from './model-agency-location.component';

describe('ModelAgencyLocationComponent', () => {
  let component: ModelAgencyLocationComponent;
  let fixture: ComponentFixture<ModelAgencyLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelAgencyLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelAgencyLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
