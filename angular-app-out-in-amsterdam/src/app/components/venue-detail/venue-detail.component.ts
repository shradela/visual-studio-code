import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Venue } from '../../models/venue';
import { ImageDetailDialogComponent } from '../image-detail-dialog/image-detail-dialog.component'

@Component({
  selector: 'app-venue-detail',
  templateUrl: './venue-detail.component.html',
  styleUrls: ['./venue-detail.component.css']
})



export class VenueDetailComponent implements OnInit {
  ''
  venue: Venue;
  url: string = "https://www.google.com/maps/search/?api=1&query=";

  constructor(
    public dialogRef: MatDialogRef<VenueDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Venue,
    public dialog: MatDialog
  ) {
    this.venue = data;
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  openImageDetail(url: string) {
    this.dialog.open(ImageDetailDialogComponent, {
      // width: '1000px',
      data: [url, 0]
    });
  }

  goToMaps(location) {
    console.log(JSON.stringify(location));
    let latitude = location.latitude.replace(",", ".");
    let longitude = location.longitude.replace(",", ".");
    let name = location.name.replace(" ", "+")
    window.open(this.url + latitude + ',' + longitude + '&query=' + name, "_blank");
  }

}

