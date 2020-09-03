import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDetailDialogComponent } from './image-detail-dialog.component';

describe('ImageDetailDialogComponent', () => {
  let component: ImageDetailDialogComponent;
  let fixture: ComponentFixture<ImageDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageDetailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
