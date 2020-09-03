import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Venue } from '../../models/venue';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { Sort } from '@angular/material/sort';
import { VenueDetailComponent } from "../venue-detail/venue-detail.component";

import { MatDialog } from '@angular/material/dialog';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
  data: Venue[] = [];
  cities: string[] = [];
  startYears: string[] = [""];
  selectedCities: string[] = [];
  displayedColumns: string[] = ['title', 'city', 'zipcode', 'adress', 'startdate'];
  dataSource: MatTableDataSource<Venue>;

  textFilter = new FormControl();
  selectFilter = new FormControl();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  venueSubscription: Subscription;

  constructor(private dataService: DataService,
    public dialog: MatDialog) {

    this.venueSubscription = this.dataService.getVenues().subscribe((data: Venue[]) => {
      this.data = data;

      for (const venue of data) {
        if (this.cities.indexOf(venue.location.city) === -1) {
          this.cities.push(venue.location.city);
        }

        if (venue.dates.hasOwnProperty('startdate')) {
          let year: string = (venue.dates.startdate).substring(6, 10);
          if (this.startYears.indexOf(year) === -1) {
            this.startYears.push(year);
          }
        }

      }
      this.startYears.sort();
      this.cities.sort();

      this.dataSource = new MatTableDataSource(this.data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = function (data, filter: string): boolean {
        return data.title.toLowerCase().includes(filter) ||
          data.location.zipcode.toLowerCase().includes(filter) ||
          data.location.adress.toString().toLowerCase().includes(filter);
      };

    });

  }

  openDetailDialog(venue) {
    this.dialog.open(VenueDetailComponent, {
      width: '900px',
      data: [venue, 0]
    });
  }



  ngOnInit() {

    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyCityFilter(value) {
    console.log(value.value);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyYearFilter(value) {
    // console.log(value.value);
  }
}



