import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoeContactFeatureComponent } from './coe-contact-feature.component';

describe('CoeContactFeatureComponent', () => {
  let component: CoeContactFeatureComponent;
  let fixture: ComponentFixture<CoeContactFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoeContactFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoeContactFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
