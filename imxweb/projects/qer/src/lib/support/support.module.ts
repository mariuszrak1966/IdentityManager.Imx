import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterFeatureComponent } from './newsletter-feature/newsletter-feature.component';
import { CoeContactFeatureComponent } from './coe-contact-feature/coe-contact-feature.component';
import { InstructionsFeatureComponent } from './instructions-feature/instructions-feature.component';
import { MatDialogClose, MatDialog, MatDialogContent,MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    NewsletterFeatureComponent,
    CoeContactFeatureComponent,
    InstructionsFeatureComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewsletterFeatureComponent,
    CoeContactFeatureComponent,
    InstructionsFeatureComponent
  ]
})
export class SupportModule { }
