import { Component, OnInit } from '@angular/core';
//
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'ccc-dialogopen-feature',
  templateUrl: './dialogopen-feature.component.html',
  styleUrls: ['./dialogopen-feature.component.scss']
})


export class DialogopenFeatureComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  openDialog(){
    console.log("XD");
    const dialogRef = this.dialog.open(DialogopenFeatureComponent);

    //dialogRef.afterClosed().subscribe(result => {
     // console.log(`Dialog result: ${result}`);
    //});
  }
  ngOnInit(): void {
    //this.openDialog();
  }

}
