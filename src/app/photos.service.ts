import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface UnsplashPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  likes: number;
  liked_by_user: boolean;
  description: string;
  user: any;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private httpClient: HttpClient) { }

  getPhotos() {
    return this.httpClient.get<UnsplashPhoto>(`https://api.unsplash.com/photos/random`, {
      headers: {
        Authorization: `Client-ID ${environment.ACCESS_KEY}`
      }
    });
  }
}
