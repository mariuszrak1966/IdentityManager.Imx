import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogopenFeatureComponent } from './dialogopen-feature.component';

describe('DialogopenFeatureComponent', () => {
  let component: DialogopenFeatureComponent;
  let fixture: ComponentFixture<DialogopenFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogopenFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogopenFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
