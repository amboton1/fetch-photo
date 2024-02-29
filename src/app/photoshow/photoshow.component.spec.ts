import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoshowComponent } from './photoshow.component';

describe('PhotoshowComponent', () => {
  let component: PhotoshowComponent;
  let fixture: ComponentFixture<PhotoshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoshowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
