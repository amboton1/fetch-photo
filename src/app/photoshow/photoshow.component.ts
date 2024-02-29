import { Component, OnInit } from '@angular/core';
import { PhotosService, UnsplashPhoto } from '../photos.service';
import { Observable, map, take } from 'rxjs';

@Component({
  selector: 'app-photoshow',
  templateUrl: './photoshow.component.html',
  styleUrls: ['./photoshow.component.scss']
})
export class PhotoshowComponent implements OnInit {

  constructor(private photosService: PhotosService) { }

  images$: Observable<UnsplashPhoto> | undefined;

  ngOnInit(): void {
    this.fetchPhoto();
  }

  getPhoto() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.images$ = this.photosService.getPhotos();
  }

}
