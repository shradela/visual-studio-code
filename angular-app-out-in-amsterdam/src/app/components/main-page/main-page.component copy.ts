// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
// import { Venue } from '../../models/venue';
// import { DataService } from '../../services/data.service';
// import { Subscription } from 'rxjs';
// import {Sort} from '@angular/material/sort';
// import { FormControl } from '@angular/forms';

// @Component({
//   selector: 'app-main-page',
//   templateUrl: './main-page.component.html',
//   styleUrls: ['./main-page.component.css']
// })

// export class MainPageComponent implements OnInit {
//   data: Venue[] = [];
//   cities : string[] = [];
//   selectedCities : string[] = [];
//   displayedColumns: string[] = ['title', 'city', 'zipcode', 'adress', 'startdate'];
//   dataSource: MatTableDataSource<Venue>;

//   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
//   @ViewChild(MatSort, { static: true }) sort: MatSort;

//   venueSubscription: Subscription;

//   constructor(private dataService: DataService) {

//       this.venueSubscription = this.dataService.getVenues().subscribe((data: Venue[]) => {
//       this.data = data;

//         for (const venue of data) {
//           if (this.cities.indexOf(venue.location.city) === -1) {
//             this.cities.push(venue.location.city);
//           }
//         }
//         this.cities.sort();

//       this.dataSource = new MatTableDataSource(this.data);

//       this.dataSource.paginator = this.paginator;
//       this.dataSource.sort = this.sort;
//       this.dataSource.filterPredicate = function(data, filter: string): boolean {
//         return data.title.toLowerCase().includes(filter) || 
//         data.location.zipcode.toLowerCase().includes(filter) || 
//         data.location.adress.toString().toLowerCase().includes(filter);
//     };
      
      
      
//       // (resource, filter): boolean => {
//       //   return this.filterVenue(resource, JSON.parse(filter));
//       // };

//     });

//   }

//   ngOnInit() {

//       this.dataSource = new MatTableDataSource(this.data);
//       this.dataSource.paginator = this.paginator;
//       this.dataSource.sort = this.sort;
//   }

//   // filterVenue(resource, filter) {
//   //   const {search = '', cityList = []} = (filter);

//   //   return (resource.title.toLowerCase().includes(search) ||
//   //     resource.location.zipcode.toLowerCase().includes(search) ||
//   //     /*resource.dates.startdate.toLowerCase().includes(search)||*/ 
//   //     resource.location.adress.toLowerCase().includes(search)) &&
//   //     (cityList.includes(resource.location.city) ||
//   //       cityList.length === 0);
//   // }

//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;

//     this.dataSource.filter = filterValue.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }

//   applyCityFilter(value) {
//     console.log(value.value);
//     this.selectedCities = value.value;
//     //this.dataSource.filter = value.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }

//   // new sort
//   // sortData(sort: Sort) {
//   //   const data = this.dataSource;
//   //   if (!sort.active || sort.direction === '') {
//   //     this.dataSource = data;
//   //     return;
//   //   }

//   //   this.dataSource = data.sort((a, b) => {
//   //     const isAsc = sort.direction === 'asc';
//   //     switch (sort.active) {
//   //       case 'name': return compare(a.name, b.name, isAsc);
//   //       case 'calories': return compare(a.calories, b.calories, isAsc);
//   //       case 'fat': return compare(a.fat, b.fat, isAsc);
//   //       case 'carbs': return compare(a.carbs, b.carbs, isAsc);
//   //       case 'protein': return compare(a.protein, b.protein, isAsc);
//   //       default: return 0;
//   //     }
//   //   });
//   // }

// }

// function compare(a: number | string, b: number | string, isAsc: boolean) {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }


