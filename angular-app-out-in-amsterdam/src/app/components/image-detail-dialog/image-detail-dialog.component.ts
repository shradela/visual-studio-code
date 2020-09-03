import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-detail-dialog',
  templateUrl: './image-detail-dialog.component.html',
  styleUrls: ['./image-detail-dialog.component.css']
})
export class ImageDetailDialogComponent implements OnInit {

  url: string;

  constructor(
    public dialogRef: MatDialogRef<ImageDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    public dialog: MatDialog
    ) {
      this.url = data;
    }

  ngOnInit(): void {
  }

}
