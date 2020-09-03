import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module'
import { DataService } from './services/data.service'
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { VenueDetailComponent } from './components/venue-detail/venue-detail.component';
import { ImageDetailDialogComponent } from './components/image-detail-dialog/image-detail-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainPageComponent,
    VenueDetailComponent,
    ImageDetailDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
