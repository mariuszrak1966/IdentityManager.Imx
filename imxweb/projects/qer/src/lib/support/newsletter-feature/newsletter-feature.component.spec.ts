import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterFeatureComponent } from './newsletter-feature.component';
import { MatDialogClose, MatDialog, MatDialogContent,MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


describe('NewsletterFeatureComponent', () => {
  let component: NewsletterFeatureComponent;
  let fixture: ComponentFixture<NewsletterFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
